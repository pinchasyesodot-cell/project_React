export type SortOptionType =
  | "price low To High"
  | "price high To Low"
  | "name a To z"
  | "name z To a"
  | "";

export interface ProductFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filterPrice: number;
  setFilterPrice: (value: number) => void;
  sortOption: SortOptionType;
  setSortOption: (value: SortOptionType) => void;
}
