import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { PLANS } from "../content";

export default defineTool({
  name: "get_pricing",
  title: "Get Wheelint pricing",
  description:
    "Return Wheelint's published subscription plans, including annual, 2-year and 3-year pricing and the Enterprise ERP option.",
  inputSchema: {
    planId: z
      .enum(["annual", "two-year", "three-year", "enterprise"])
      .optional()
      .describe("Optional plan id to return a single plan instead of all plans."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ planId }) => {
    const plans = planId ? PLANS.filter((plan) => plan.id === planId) : PLANS;
    const text = plans
      .map((plan) =>
        [
          `${plan.name}${plan.badge ? ` (${plan.badge})` : ""}`,
          `  ${plan.price} ${plan.unit}`,
          plan.savings ? `  ${plan.savings}` : null,
          `  ${plan.note}`,
        ]
          .filter(Boolean)
          .join("\n"),
      )
      .join("\n\n");

    return {
      content: [{ type: "text", text: text || "No matching plan." }],
      structuredContent: { plans },
    };
  },
});
