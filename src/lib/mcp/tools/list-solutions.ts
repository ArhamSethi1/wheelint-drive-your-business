import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { SOLUTIONS } from "../content";

export default defineTool({
  name: "list_solutions",
  title: "List Wheelint solutions",
  description:
    "List the business types Wheelint is tailored for — workshops, multibrand service networks, dealerships, and OEMs or dealer networks — with the highlights for each.",
  inputSchema: {
    solutionId: z
      .enum(["workshops", "multibrand-networks", "dealerships", "oems"])
      .optional()
      .describe("Optional solution id to return a single solution."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ solutionId }) => {
    const solutions = solutionId
      ? SOLUTIONS.filter((solution) => solution.id === solutionId)
      : SOLUTIONS;

    const text = solutions
      .map(
        (solution) =>
          `${solution.title}\n  ${solution.summary}\n${solution.highlights
            .map((highlight) => `  - ${highlight}`)
            .join("\n")}`,
      )
      .join("\n\n");

    return {
      content: [{ type: "text", text: text || "No matching solution." }],
      structuredContent: { solutions },
    };
  },
});
