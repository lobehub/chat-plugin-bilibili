import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { fetchPopular } from '../servers/fetchPopular';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const result = await fetchPopular();

  return new Response(JSON.stringify(result));
};
