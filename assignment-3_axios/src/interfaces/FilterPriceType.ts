export type FilterPriceType = "From high to low" | "From low to high" | "";

export interface PriceType {
  filter: FilterPriceType;
  onSelectPrice: (filter: FilterPriceType) => void;
}
