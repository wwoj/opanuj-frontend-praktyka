import type { SortOrder } from '../types/SortOrder';

interface SortOptionProps {
  sortOrder: SortOrder;
  setSortOrder: (term: string) => void;
}
export const SortOption = ({ sortOrder, setSortOrder }: SortOptionProps) => {
  return (
    <div className="mb-4">
      <label className="mr-2">
        Sort By:
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border h-7 mt-1"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="population">Population</option>
        </select>
      </label>
    </div>
  );
};
