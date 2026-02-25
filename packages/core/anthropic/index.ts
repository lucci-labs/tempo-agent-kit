import type Anthropic from "@anthropic-ai/sdk";
import { zodToJsonSchema } from "zod-to-json-schema";
import type { TempoAgent } from "../agent";

/**
 * Converts TempoAgent tools to Anthropic tool format.
 * Includes similes in the description for better discovery.
 */
export const toAnthropicTools = (agent: TempoAgent): Anthropic.Tool[] => {
  return agent.tools.map((t) => ({
    name: t.name,
    description: `${t.description}${t.similes.length > 0 ? ` (also known as: ${t.similes.join(", ")})` : ""}`,
    input_schema: zodToJsonSchema(t.schema) as any,
  }));
};
