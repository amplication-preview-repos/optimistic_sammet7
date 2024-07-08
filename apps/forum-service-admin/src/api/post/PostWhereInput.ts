import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  thread?: ThreadWhereUniqueInput;
  comments?: CommentListRelationFilter;
};
