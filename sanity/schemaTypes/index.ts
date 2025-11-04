import { type SchemaTypeDefinition } from "sanity";
import { courseTypes } from "./courseTypes";
import { moduleTypes } from "./moduleTypes";
import { lessonTypes } from "./lessonTypes";
import { instructorTypes } from "./instructorTypes";
import { blockContent } from "./blockContent";
import { studentTypes } from "./studentTypes";
import { enrollmentTypes } from "./enrollmentTypes";
import { categoryTypes } from "./categoryTypes";
import { lessonCompletionTypes } from "./lessonCompletionTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    courseTypes,
    moduleTypes,
    lessonTypes,
    instructorTypes,
    blockContent,
    studentTypes,
    enrollmentTypes,
    categoryTypes,
    lessonCompletionTypes,
  ],
};

export * from "./courseTypes";
export * from "./moduleTypes";
export * from "./lessonTypes";
export * from "./instructorTypes";
export * from "./studentTypes";
export * from "./enrollmentTypes";
export * from "./categoryTypes";
export * from "./lessonCompletionTypes";
