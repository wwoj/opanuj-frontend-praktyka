import type { FilterType } from '../types/FilterType';
export function SearchValue({
  filterType,
  searchText,
  setSearchText,
}: {
  filterType: FilterType;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <input
        className="w-full p-2 border"
        type="test"
        placeholder={`Search by country's ${filterType}...`}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
