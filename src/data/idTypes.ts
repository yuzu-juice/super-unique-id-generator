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
    generator: () => "V1StGXR8_Z5jdHi6B-myT",
  },
  {
    id: "cuid",
    name: "CUID",
    generator: () => "cjld2cjxh0000qzrmn831i7rn",
  },
  {
    id: "ulid",
    name: "ULID",
    generator: () => "01ARZ3NDEKTSV4RRFFQ69G5FAV",
  },
  {
    id: "shortid",
    name: "Short ID",
    generator: () => "S1x8j2d9k",
  },
  {
    id: "objectid",
    name: "Object ID",
    generator: () => "507f1f77bcf86cd799439011",
  },
];
