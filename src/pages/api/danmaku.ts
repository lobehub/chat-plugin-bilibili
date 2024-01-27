import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { fetchDanmaku } from '@/servers/fetchDanmaku';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { avid } = (await req.json()) as { avid: string };

  const result = await fetchDanmaku(avid);

  return new Response(JSON.stringify(result));
};
