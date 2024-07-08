import { SortOrder } from "../../util/SortOrder";

export type ThreadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
};
