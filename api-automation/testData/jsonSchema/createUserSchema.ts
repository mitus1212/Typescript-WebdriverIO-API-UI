export const createUserResponseSchema = {
  type: "object",
  patternProperties: {
    name: {
      type: "string",
    },
    job: {
      type: "string",
    },
    id: {
      type: "string",
    },
    createdAt: {
      type: "string",
    },
  },
  required: ["name", "job", "id", "createdAt"],
  additionalProperties: false,
};
