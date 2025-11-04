import { defineField, defineType } from "sanity";

export const instructorTypes = defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
    }),
  ],
});
