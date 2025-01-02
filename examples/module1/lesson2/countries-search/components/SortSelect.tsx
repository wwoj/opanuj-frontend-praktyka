import type { SortType } from '../types/SortType';

export function SortSelect({
  sortType,
  setSortType,
}: {
  sortType: string;
  setSortType: (type: SortType) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value as SortType);
  };
  return (
    <div className="mb-4">
      <label className="mr-2">
        Sort By:
        <select value={sortType} onChange={handleChange} className="border p-2">
          <option value="alphabetical">Alphabetical</option>
          <option value="population">Population</option>
        </select>
      </label>
    </div>
  );
}
