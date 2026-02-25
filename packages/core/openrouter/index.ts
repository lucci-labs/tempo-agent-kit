import { toOpenAITools } from "../openai";
import type { TempoAgent } from "../agent";

/**
 * Converts TempoAgent tools to OpenRouter format (identical to OpenAI).
 */
export const toOpenRouterTools = (agent: TempoAgent) => {
  return toOpenAITools(agent);
};
