const AccordionItemMeta = {
  name: "AccordionItem",
  section: "7.🧩 UI",
  displayName: "Accordion Item",
  description: "An item within the accordion.",
  importPath: "@/plasmic-library/ui/Accordion",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/Accordion.png`,
  importName: "AccordionItem",
  parentComponentName: "Accordion",
  
  props: {
    value: {
      type: "string",
      description: "A unique value for the accordion item.",
      defaultValue: "default-item"
    },
    children: {
      type: "slot",
      allowedComponents: ["AccordionTrigger", "AccordionContent"],
      defaultValue: [
        {
          type: "component",
          name: "AccordionTrigger",
          props: {
            children: { type: "text", value: "Item Trigger" }
          }
        },
        {
          type: "component",
          name: "AccordionContent",
          props: {
            children: { type: "text", value: "Item Content" }
          }
        }
      ]
    }
  }
};

export default AccordionItemMeta;
