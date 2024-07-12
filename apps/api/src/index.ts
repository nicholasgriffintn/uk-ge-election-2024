export interface Env {
  AUTH_TOKEN: string;
  DB: D1Database;
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
    const { pathname, search, searchParams } = new URL(url);

    switch (method) {
      case 'GET':
        return new Response('Hello, world!');
      default:
        return new Response('Method not Allowed', { status: 405 });
    }
  },
};
