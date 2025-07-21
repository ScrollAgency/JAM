import { tokens } from "../tokens-sitex";

export const getTokenValue = (name: string) =>
  tokens.find((token) => token.name === name)?.value || name;
