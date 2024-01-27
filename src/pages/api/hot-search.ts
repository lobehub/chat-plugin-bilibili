import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { fetchHotSearch } from '@/servers/fetchHotSearch';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const result = await fetchHotSearch();

  return new Response(JSON.stringify(result));
};
