import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { 
  SupabaseProvider, SupabaseProviderMeta, 
  SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta,
  SupabaseUppyUploader, SupabaseUppyUploaderMeta, 
  SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta,
} from "plasmic-supabase"
import * as PlasmicLibrary from "./plasmic-library/components"
//import { StripeGlobalContext, StripeGlobalContextMeta } from "./contexts/stripe";
import { tokens } from "./styles/tokens-sitex";

// Loader plasmic
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || "",
      token: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN || "",
    },
  ],
  preview: true,
});

// Plasmic-library
function registerComponents(library: Record<string, any>) {
  for (const key of Object.keys(library)) {
    if (!key.includes("Meta")) {
      const component = library[key];
      const metaKey = `${key}Meta`;
      const meta = library[metaKey];
      if (meta) {
        PLASMIC.registerComponent(component, meta);
      }
    }
  }
}
registerComponents(PlasmicLibrary);

// Design tokens
for (const token of tokens) { PLASMIC.registerToken(token); }

// Stripe
//PLASMIC.registerGlobalContext(StripeGlobalContext, StripeGlobalContextMeta);

// Supabase
PLASMIC.registerGlobalContext(SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta)
PLASMIC.registerComponent(SupabaseProvider, SupabaseProviderMeta);
PLASMIC.registerComponent(SupabaseUppyUploader, SupabaseUppyUploaderMeta);
PLASMIC.registerComponent(SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta);
