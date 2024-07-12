import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { drizzle } from 'drizzle-orm/d1';
import { eq, or } from 'drizzle-orm';

import { bronzeDefeatedMps, bronzeElectedMps } from './schema';

export interface Env {
  AUTH_TOKEN: string;
  DB: D1Database;
}

async function getBronzeMpData(
  db: DrizzleD1Database,
  table: typeof bronzeElectedMps | typeof bronzeDefeatedMps,
  id: string | null,
  party: string | null,
  region: string | null,
  country: string | null,
  constituency: string | null
) {
  return await db
    .select()
    .from(table)
    .where(
      or(
        id ? eq(table.id, Number(id)) : undefined,
        party ? eq(table.party_abbreviation, party) : undefined,
        region ? eq(table.region_name, region) : undefined,
        country ? eq(table.country_name, country) : undefined,
        constituency ? eq(table.constituency_name, constituency) : undefined
      )
    )
    .all();
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const token = request.headers.get('Authorization');

    if (token !== `Bearer ${env.AUTH_TOKEN}`) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { method, url } = request;
    const { pathname, searchParams } = new URL(url);

    const db = drizzle(env.DB);

    const idParam = searchParams.get('id');
    const partyParam = searchParams.get('party');
    const regionParam = searchParams.get('region');
    const countryParam = searchParams.get('country');
    const constituencyParam = searchParams.get('constituency');

    switch (method) {
      case 'GET':
        switch (pathname) {
          case '/':
            return new Response('Hello, world!');
          case '/bronze-elected-mps':
            const bronzeElectedMpsResult = await getBronzeMpData(
              db,
              bronzeElectedMps,
              idParam,
              partyParam,
              regionParam,
              countryParam,
              constituencyParam
            );

            return new Response(JSON.stringify(bronzeElectedMpsResult), {
              headers: { 'Content-Type': 'application/json' },
            });
          case '/bronze-defeated-mps':
            const bronzeDefeatedMpsResult = await getBronzeMpData(
              db,
              bronzeDefeatedMps,
              idParam,
              partyParam,
              regionParam,
              countryParam,
              constituencyParam
            );

            return new Response(JSON.stringify(bronzeDefeatedMpsResult), {
              headers: { 'Content-Type': 'application/json' },
            });
          default:
            return new Response('Not Found', { status: 404 });
        }
      default:
        return new Response('Method not Allowed', { status: 405 });
    }
  },
};
