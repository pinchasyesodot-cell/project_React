export type FilterSortType =
  | "From price high to low"
  | "From price low to high"
  | "From rating high to low"
  | "From rating low to high"
  | "";

export interface SortType {
  filter: FilterSortType;
  onSelectSort: (filter: FilterSortType) => void;
}
