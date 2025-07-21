const AccordionContentMeta = {
  name: "AccordionContent",
  section: "7.🧩 UI",
  displayName: "Accordion Content",
  description: "The content that is revealed when the accordion item is open.",
  importPath: "@/plasmic-library/ui/Accordion",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/Accordion.png`,
  importName: "AccordionContent",
  parentComponentName: "AccordionItem",
  
  props: {
    children: {
      type: "slot",
      defaultValue: { type: "text", value: "Accordion Content" }
    }
  }
};

export default AccordionContentMeta;
