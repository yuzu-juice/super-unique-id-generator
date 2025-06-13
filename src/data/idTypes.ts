export interface IdType {
  id: string;
  name: string;
  description: string;
  generator: () => string;
}

export const idTypes: IdType[] = [
  {
    id: "uuid",
    name: "UUID v4",
    description: "Universally Unique Identifier",
    generator: () => "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  },
  {
    id: "nanoid",
    name: "Nano ID",
    description: "URL-safe unique string ID",
    generator: () => "V1StGXR8_Z5jdHi6B-myT",
  },
  {
    id: "cuid",
    name: "CUID",
    description: "Collision-resistant unique identifier",
    generator: () => "cjld2cjxh0000qzrmn831i7rn",
  },
  {
    id: "ulid",
    name: "ULID",
    description: "Universally Unique Lexicographically Sortable Identifier",
    generator: () => "01ARZ3NDEKTSV4RRFFQ69G5FAV",
  },
  {
    id: "shortid",
    name: "Short ID",
    description: "Short non-sequential url-friendly unique id",
    generator: () => "S1x8j2d9k",
  },
  {
    id: "objectid",
    name: "Object ID",
    description: "MongoDB-style ObjectId",
    generator: () => "507f1f77bcf86cd799439011",
  },
];
