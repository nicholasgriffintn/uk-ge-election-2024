import { WebPDFLoader } from 'langchain/document_loaders/web/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Document } from '@langchain/core/documents';
import type { VectorStore } from '@langchain/core/vectorstores';
import {
  CloudflareVectorizeStore,
  CloudflareWorkersAIEmbeddings,
} from '@langchain/cloudflare';

import { Env } from '../../types';
import { BLOG_POST_TEXT } from './data/blog';

const upsertDocsToVectorstore = async (
  vectorstore: VectorStore,
  docs: Document[]
) => {
  const ids: any[] = [];
  const encoder = new TextEncoder();
  for (const doc of docs) {
    // Vectorize does not support object metadata, and we won't be needing it for
    // this app.
    doc.metadata = {};
    const insecureHash = await crypto.subtle.digest(
      'SHA-1',
      encoder.encode(doc.pageContent)
    );
    // Use a hash of the page content as an id
    const hashArray = Array.from(new Uint8Array(insecureHash));
    const readableId = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    if (!readableId) {
      throw new Error('Could not generate an id for the document.');
    }
    ids.push(readableId);
  }
  const result = await vectorstore.addDocuments(docs, { ids });
  return result;
};

export async function aiIngestHandler(
  request: Request,
  env: Env,
  ctx: ExecutionContext
) {
  const cloudflareBindings = env;
  if (!cloudflareBindings) {
    throw new Error('No Cloudflare bindings found.');
  }

  if (cloudflareBindings.ENVIRONMENT !== 'local') {
    throw new Error(
      `You must run the ingest script with cloudflareBindings.ENVIRONMENT set to "local".`
    );
  }
  const embeddings = new CloudflareWorkersAIEmbeddings({
    binding: cloudflareBindings.AI,
    modelName: '@cf/baai/bge-base-en-v1.5',
  });

  // Tune based on your raw content.
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1024,
    chunkOverlap: 100,
  });

  // Ingest content from a blog post on AI agents
  const aiAgentDocument = new Document({
    pageContent: BLOG_POST_TEXT,
  });
  const splitAiAgentDocs = await splitter.splitDocuments([aiAgentDocument]);
  const aiKnowledgeVectorstore = new CloudflareVectorizeStore(embeddings, {
    index: cloudflareBindings.VECTORIZE,
  });

  await upsertDocsToVectorstore(aiKnowledgeVectorstore, splitAiAgentDocs);

  return 'Ingest complete!';
}
