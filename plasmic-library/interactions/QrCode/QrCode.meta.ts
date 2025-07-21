const QrCodeMeta = {
  name: "QrCode",
  section: "5.🌀 Interactions",
  displayName: "Qr Code",
  description: "Créer ou scanner un Qr Code",
  importPath: "./plasmic-library/interactions/QrCode",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/QrCode.png`,

  props: {
    mode: {
      type: "choice",
      options: ["create", "scan", "show"],
      defaultValue: "scan",
      description: "Selection de mode d'utilisation",
    },
    userId: {
      type: "string",
    },
    commercantId: {
      type: "string",
    },
    onScanSuccess: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
  },
};

export default QrCodeMeta;
