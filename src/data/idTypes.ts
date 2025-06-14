import { nanoid } from "nanoid";
import cuid from "cuid";
import { ulid } from "ulid";

export interface IdType {
  id: string;
  name: string;
  generator: () => string;
}

export const idTypes: IdType[] = [
  {
    id: "uuid",
    name: "UUID v4",
    generator: () => crypto.randomUUID(),
  },
  {
    id: "nanoid",
    name: "Nano ID",
    generator: () => nanoid(),
  },
  {
    id: "cuid",
    name: "CUID",
    generator: () => cuid(),
  },
  {
    id: "ulid",
    name: "ULID",
    generator: () => ulid(),
  },
];
