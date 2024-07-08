import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  content?: string | null;
  author?: string | null;
  thread?: ThreadWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
};
