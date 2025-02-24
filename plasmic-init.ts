import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {
  SupabaseProvider,
  SupabaseProviderMeta,
  SupabaseUserGlobalContext,
  SupabaseUserGlobalContextMeta,
  SupabaseUppyUploader,
  SupabaseUppyUploaderMeta,
  SupabaseStorageGetSignedUrl,
  SupabaseStorageGetSignedUrlMeta,
} from "plasmic-supabase";

// Import des composants locaux
import { AuthForm } from "./components/AuthForm";
import TextInput from "./components/TextInput";
import Icons from "./components/icons";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import FileUploader from "./components/FileUploader";
import ProgressBar from "./components/ProgressBar";
import Switch from "./components/switch";
import TextLink from "./components/TextLink";
import ButtonWalk from "./components/ButtonWalk";
import PhoneSelector from "./components/PhoneSelector/PhoneSelector";
import Dropdown from "./components/DropDown";
import Option from "./components/Option";
import Map from "./components/Map";
import FooterLink from "./components/Footerlink";
import JobCard from "./components/jobCard/JobCard";
import JobCardMap from "./components/JobCardMap";
import UserTable from "./components/UserTable";
import Checkbox from "./components/CheckBox";
import AuthButton from "./components/ButtonGoogle";
// import PlasmicSupabaseForm from "./components/PlasmicSupabaseForm";

// Initialisation du loader Plasmic
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID || "",  // ID du projet
      token: process.env.PLASMIC_TOKEN || ""  // Token API pour le projet
    }
  ], preview: true,
});

// Enregistrement du contexte global Supabase
PLASMIC.registerGlobalContext(SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta);

// Enregistrement des composants Supabase
PLASMIC.registerComponent(SupabaseProvider, SupabaseProviderMeta);
PLASMIC.registerComponent(SupabaseUppyUploader, SupabaseUppyUploaderMeta);
PLASMIC.registerComponent(SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta);

// Remplacement des composants
PLASMIC.substituteComponent(AuthForm, "AuthForm");


// Enregistrement du composant TextInput avec ses propriétés
PLASMIC.registerComponent(TextInput, {
  name: "TextInput",
  props: {
    label: "string",
    placeholder: "string",
    Text: "string", // Valeur initiale du texte
    required: "boolean",
    type: {
      type: "choice",
      options: ["default", "leadingText", "textArea", "password", "phone"],
      defaultValue: "default",
    },
    destructive: "boolean",
    disabled: "boolean",
    iconImage: "imageUrl",
    prefixedText: "string",
    hint: "string",
    className: "string",
    iconUrl: "imageUrl",
    onTextChange: {
      type: "eventHandler",
      description: "Fonction appelée lors du changement de la case.",
      argTypes: [
        {
          name: "VarInput",
          type: "string",
        },
      ],
    },
  },
  importPath: "./components/TextInput",
});



// Enregistrement des composants Icons
Object.entries(Icons).forEach(([iconName, iconComponent]) => {
  PLASMIC.registerComponent(iconComponent, {
    name: `Icons_${iconName}`,
    props: {},
    importPath: "./components/icons",
  });
});

// Enregistrement des composants Button et CheckBox
PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    iconImage: "imageUrl",
    label: "string",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [],
    },
  },
  importPath: "./components/Button",
});
PLASMIC.registerComponent(CheckBox, {
  name: "CheckBox",
  props: {
    checked: "boolean",
    type: {
      type: "choice",
      defaultValue: "Checkbox",
      options: ["Checkbox", "Check circle"],
      required: false,
    },
    disabled: "boolean",
    onChange: {
      type: "eventHandler",
      description: "Fonction appelée lors du changement de la case.",
      argTypes: [
        {
          name: "checked",
          type: "boolean",
        },
      ],
    },
  },
  importPath: "./components/CheckBox",
});

// Enregistrement des autres composants (Uploader, CardJob, ProgressBar, Switch, etc.)
PLASMIC.registerComponent(FileUploader, {
  name: "FileUploader",
  props: {},
  importPath: "./components/FileUploader",
});

PLASMIC.registerComponent(ProgressBar, {
  name: "ProgressBar",
  props: {
    progress: "number",
  },
  importPath: "./components/ProgressBar",
});

PLASMIC.registerComponent(Switch, {
  name: "Switch",
  props: {
    disabled: "boolean",
  },
  importPath: "./components/Switch",
});

PLASMIC.registerComponent(TextLink, {
  name: "TextLink",
  props: {
    redirect: {
      type: "string",
      defaultValue: "",
    },
    label: "string",
    size: {
      type: "choice",
      defaultValue: "Small",
      options: ["Small", "Large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "None",
      options: ["Start", "None", "End"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
  importPath: "./components/TextLink",
});

PLASMIC.registerComponent(ButtonWalk, {
  name: "ButtonWalk",
  props: {
    label: "string",
    variant: {
      type: "choice",
      defaultValue: "active",
      options: ["active", "inactive", "disabled"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
  importPath: "./components/ButtonWalk",
});

PLASMIC.registerComponent(PhoneSelector, {
  name: "PhoneSelector",
  props: {
    className: "string",
  },
  importPath: "./components/PhoneSelector/PhoneSelector",
});

// Enregistrement du composant DropDownSelector
// Dans ton fichier d'enregistrement des composants

PLASMIC.registerComponent(Dropdown, {
  name: "Dropdown",  // Nom du composant dans Plasmic
  props: {
    iconeUrl: "imageUrl",  // L'URL de l'icône optionnelle
    label: {
      type: "string",  // Le label du select
      defaultValue: "Choisir une option",  // Valeur par défaut du label
    },
    onChange: {
      type: "eventHandler",
      description: "Fonction appelée lors du changement de l'option.",
      argTypes: [
        {
          name: "selectedOption",
          type: "string",
        },
      ],
    },
    options: {
      type: "object",  // Pour stocker une liste d'options (par exemple un tableau d'objets)
      defaultValue: [
        { key: "1", value: "Option 1" },
        { key: "2", value: "Option 2" },
        { key: "3", value: "Option 3" }
      ]
    },
    children: {
      type: "slot", // Le slot pour accepter des composants enfants (par exemple des options)
      allowedComponents: ["Option"], // Ici, tu peux accepter des composants `Option` comme enfants

      defaultValue: [
        {
          type: "component",
          name: "Option",  // Assure-toi que `Option` est enregistré aussi dans Plasmic
          props: {
            value: "Option 1",
            children: { type: "text", value: "Option 1" }
          }
        },
        {
          type: "component",
          name: "Option",  // Assure-toi que `Option` est enregistré aussi dans Plasmic
          props: {
            value: "Option 2",
            children: { type: "text", value: "Option 2" }
          }
        }
      ]
    },
  },
  importPath: "./components/DropDown",  // Chemin d'importation du composant DropDownSelector
});

PLASMIC.registerComponent(Option, {
  name: "Option",
  props: {
    value: "string",
    children: {
      type: "slot",
      defaultValue: "Option Text",
    },
  },
  importPath: "./components/Option",
});

PLASMIC.registerComponent(Map, {
  name: "Map",
  props: {
    mapStyle: "string",
    latitude: "number",
    longitude: "number",
    iconUrl: "imageUrl",
    searchAddress: "string",
    zoom: "number",
    businesses: {
      type: "object",
      defaultValue: [],
    },
  },
  importPath: "./components/Map",
});

PLASMIC.registerComponent(FooterLink, {
  name: "Footerlink",
  props: {
    href: "string",
    text: "string"
  },
  importPath: "./components/Footerlink"
});
PLASMIC.registerComponent(JobCard, {
  name: "JobCard",
  props: {
    state: {
      type: "choice",
      defaultValue: "default",
      options: ["default", "liked", "applied", "new", "lastMin"],
      required: false,
    },
    title: "string",
    className: "string",
    city: "string",
    companyName: "string",
    logo: "imageUrl",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [
        {
          name: "event",
          type: "object",
        },
      ],
    },
    tags: {
      type: "object",
      defaultValue: [],
    },
    customIcons: {
      type: "object",
      defaultValue: {},
    },
  },
  importPath: "./components/jobCard/JobCard"
});

PLASMIC.registerComponent(JobCardMap, {
  name: "JobCardMap",
  props: {
    state: {
      type: "choice",
      defaultValue: "default",
      options: ["default", "liked", "applied", "new", "lastMin"],
      required: false,
    },
    title: "string",
    city: "string",
    companyName: "string",
    logo: "imageUrl",
    tags: {
      type: "object",
      defaultValue: [],
    },
    customIcons: {
      type: "object",
      defaultValue: {},
    },
  },
  importPath: "./components/JobCardMap"
});

// Enregistrement du composant UserTable.
PLASMIC.registerComponent(UserTable, {
  name: "UserTable",
  props: {
    applications: {
      type: "object",
      defaultValue: [],
    },
  },
  importPath: "./components/UserTable",
});

//Enregistrement du composant ButtonApple
PLASMIC.registerComponent(Button, {
  name: "ButtonApple", // Nom du composant dans Plasmic
  props: {
    label: "string",
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "end", "only", "none"],
      required: false,
    },
    destructive: "boolean",
    hierarchy: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "large",
      options: ["small", "large"],
      required: false,
    },
    state: {
      type: "choice",
      defaultValue: "default",
      options: ["default", "hover", "focused", "disabled"],
      required: false,
    },
    iconImage: "imageUrl",
    className: "string",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [],
    },
  },
  importPath: "./components/ButtonApple",
});
PLASMIC.registerComponent(AuthButton, {
  name: "ButtonGoogle", // Nom du composant dans Plasmic
  description: "Bouton pour se connecter avec Google",
  props: {
    label: "string",
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "end", "only", "none"],
      required: false,
    },
    destructive: "boolean",
    hierarchy: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "large",
      options: ["small", "large"],
      required: false,
    },
    state: {
      type: "choice",
      defaultValue: "default",
      options: ["default", "hover", "focused", "disabled"],
      required: false,
    },
    iconImage: "imageUrl",
    className: "string",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [],
    },
  },
  importPath: "./components/ButtonGoogle",
});
console.log("Plasmic Project ID:", process.env.PLASMIC_PROJECT_ID);
console.log("Plasmic API Token:", process.env.PLASMIC_TOKEN);
