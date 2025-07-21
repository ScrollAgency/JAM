const AccordionTriggerMeta = {
  name: "AccordionTrigger",
  section: "7.🧩 UI",
  displayName: "Accordion Trigger",
  description: "The trigger that toggles the accordion item's content.",
  importPath: "@/plasmic-library/ui/Accordion",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/Accordion.png`,
  importName: "AccordionTrigger",
  parentComponentName: "AccordionItem",

  props: {
    children: {
      type: "slot",
      defaultValue: { type: "text", value: "Accordion Trigger" }
    }
  }
};

export default AccordionTriggerMeta;
