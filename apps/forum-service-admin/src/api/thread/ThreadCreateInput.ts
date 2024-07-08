import { PostCreateNestedManyWithoutThreadsInput } from "./PostCreateNestedManyWithoutThreadsInput";

export type ThreadCreateInput = {
  title?: string | null;
  content?: string | null;
  author?: string | null;
  posts?: PostCreateNestedManyWithoutThreadsInput;
};
