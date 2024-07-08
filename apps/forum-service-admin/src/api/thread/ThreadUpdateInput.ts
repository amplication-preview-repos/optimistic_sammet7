import { PostUpdateManyWithoutThreadsInput } from "./PostUpdateManyWithoutThreadsInput";

export type ThreadUpdateInput = {
  title?: string | null;
  content?: string | null;
  author?: string | null;
  posts?: PostUpdateManyWithoutThreadsInput;
};
