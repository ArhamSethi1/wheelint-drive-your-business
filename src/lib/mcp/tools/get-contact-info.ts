import { defineTool } from "@lovable.dev/mcp-js";

import { CONTACT } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Get Wheelint contact info",
  description:
    "Return Wheelint's published contact details (sales email, phone, WhatsApp, office address) and the site's page paths.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          CONTACT.company,
          `Email: ${CONTACT.email}`,
          `Phone: ${CONTACT.phone}`,
          `WhatsApp: ${CONTACT.whatsapp}`,
          `Address: ${CONTACT.address}`,
        ].join("\n"),
      },
    ],
    structuredContent: { contact: CONTACT },
  }),
});
