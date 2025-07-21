const AccordionMeta = {
  name: "Accordion",
  section: "7.🧩 UI",
  displayName: "Accordion",
  description: "A vertically stacked set of interactive headings that each reveal a section of content.",
  importPath: "@/plasmic-library/ui/Accordion",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/Accordion.png`,

  props: {
    type: {
      type: "choice",
      options: ["single", "multiple"],
      defaultValue: "single",
      description: "Determines whether one or multiple items can be opened at the same time."
    },
    collapsible: {
      type: "boolean",
      defaultValue: false,
      description: "When type is 'single', allows closing content when clicking trigger for an open item."
    },
    children: {
      type: "slot",
      allowedComponents: ["AccordionItem"],
      defaultValue: [
        {
          type: "component",
          name: "AccordionItem",
          props: {
            value: "item-1",
            children: [
              {
                type: "component",
                name: "AccordionTrigger",
                props: {
                  children: { type: "text", value: "Is it accessible?" }
                }
              },
              {
                type: "component",
                name: "AccordionContent",
                props: {
                  children: { type: "text", value: "Yes. It adheres to the WAI-ARIA design pattern." }
                }
              }
            ]
          }
        }
      ]
    }
  }
};

export default AccordionMeta;
