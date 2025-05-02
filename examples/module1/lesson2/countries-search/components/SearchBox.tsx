import type { FilterType } from '../types/FilterType';
import type { SortOrder } from '../types/SortOrder';
import { FilterOption } from './FilterOption';
import { SearchText } from './SearchText';
import { SortOption } from './SortOption';
interface SearchBoxProps {
  sortOrder: SortOrder;
  setSortOrder: (term: string) => void;
  searchText: string;
  setSearchText: (term: string) => void;
  filterType: FilterType;
  setFilterType: (term: string) => void;
}
export const SearchBox = ({
  searchText,
  setSearchText,
  sortOrder,
  setSortOrder,
  filterType,
  setFilterType,
}: SearchBoxProps) => {
  return (
    <>
      <div>
        <SearchText
          searchText={searchText}
          setSearchText={setSearchText}
          filterType={filterType}
        />
        <SortOption sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <FilterOption filterType={filterType} setFilterType={setFilterType} />
      </div>
    </>
  );
};
