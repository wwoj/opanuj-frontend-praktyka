import type { FilterType } from '../types/FilterType';
export function FilterSelect({
  filterType,
  setFilterType,
}: {
  filterType: string;
  setFilterType: (type: FilterType) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as FilterType);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">
        Filter By:
        <select
          id="filter"
          value={filterType}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="name">Name</option>
          <option value="language">Language</option>
          <option value="currency">Currency</option>
          <option value="capital">Capital</option>
        </select>
      </label>
    </div>
  );
}
