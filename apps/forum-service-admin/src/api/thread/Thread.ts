import { Post } from "../post/Post";

export type Thread = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  author: string | null;
  posts?: Array<Post>;
};
