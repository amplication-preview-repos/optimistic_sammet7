import { Thread } from "../thread/Thread";
import { Comment } from "../comment/Comment";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  thread?: Thread | null;
  comments?: Array<Comment>;
};
