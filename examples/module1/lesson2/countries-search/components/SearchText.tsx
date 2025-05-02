import { debounce } from 'es-toolkit';
import React, { useEffect } from 'react';
import { useCallback, useState } from 'react';
import type { FilterType } from '../types/FilterType';

interface SearchTextProp {
  searchText: string;
  setSearchText: (term: string) => void;
  filterType: FilterType;
}

export const SearchText = ({
  searchText,
  setSearchText,
  filterType,
}: SearchTextProp) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchText);

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setSearchText(value);
    }, 500),
    [setSearchText]
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSearchTerm(newValue); // Update immediately for UI responsiveness
    debouncedSetSearchTerm(newValue); // Debounced update to parent state
  };

  useEffect(() => {
    setLocalSearchTerm(searchText); // Sync local state if parent updates it
  }, [searchText]);

  return (
    <div className="mb-4">
      <label className="flex flex-col">
        Search text
        <input
          className="w-full p-2 border"
          type="text"
          placeholder={`Search by country's ${filterType}...`}
          value={localSearchTerm} // ✅ Use local state here
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
