import { DynamicStructuredTool } from "@langchain/core/tools";
import type { TempoAgent } from "../agent";

/**
 * Converts TempoAgent tools to LangChain StructuredTool format.
 * Includes similes in the description for better discovery.
 */
export const toLangChainTools = (agent: TempoAgent): DynamicStructuredTool[] => {
  return agent.tools.map((t) => {
    return new DynamicStructuredTool({
      name: t.name,
      description: `${t.description}${t.similes.length > 0 ? ` (also known as: ${t.similes.join(", ")})` : ""}`,
      schema: t.schema,
      func: async (input) => {
        return t.execute(agent, input);
      },
    });
  });
};
