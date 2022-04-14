export type Page<T> = {
  entries: T[];
  count: number;
  totalCount: number;
};
export type Filter = {
  count: number;
  page: number;
};
