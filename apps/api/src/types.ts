export interface Env {
  DB: D1Database;
  ENVIRONMENT?: string;
  AUTH_TOKEN?: string;
  AI?: any;
  VECTORIZE?: any;
  CLOUDFLARE_ACCOUNT_ID?: string;
  CLOUDFLARE_WORKERSAI_API_TOKEN?: string;
  BEDROCK_AWS_ACCESS_KEY_ID?: string;
  BEDROCK_AWS_REGION?: string;
  BEDROCK_AWS_SECRET_ACCESS_KEY?: string;
}
