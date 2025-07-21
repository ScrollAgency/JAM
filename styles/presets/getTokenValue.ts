import { tokens } from "../tokens-jam";

export const getTokenValue = (name: string) =>
  tokens.find((token) => token.name === name)?.value || name;
