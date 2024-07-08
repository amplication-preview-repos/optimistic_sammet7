import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  content?: string | null;
  author?: string | null;
  thread?: ThreadWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
};
