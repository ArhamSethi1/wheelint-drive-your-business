import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { FEATURE_CATEGORIES } from "../content";

export default defineTool({
  name: "list_features",
  title: "List Wheelint features",
  description:
    "List Wheelint's product feature categories — billing, job cards, spare parts and inventory, customers and vehicles, workshop operations, and reports and analytics.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional keyword to filter feature categories by title or summary."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.toLowerCase();
    const categories = needle
      ? FEATURE_CATEGORIES.filter((category) =>
          `${category.title} ${category.summary} ${category.visibility}`
            .toLowerCase()
            .includes(needle),
        )
      : FEATURE_CATEGORIES;

    const text = categories
      .map(
        (category) =>
          `${category.title}\n  ${category.summary}\n  Visibility: ${category.visibility}`,
      )
      .join("\n\n");

    return {
      content: [{ type: "text", text: text || "No features matched that query." }],
      structuredContent: { categories },
    };
  },
});
