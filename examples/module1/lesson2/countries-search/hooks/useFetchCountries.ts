import { useState, useEffect, useRef } from 'react';
import {
  fetchCountries,
  fetchCountriesByCapital,
  fetchCountriesByCurrenct,
  fetchCountriesByLanguage,
  fetchCountriesByName,
} from '../api/apiClinet';

import type { Country } from '../types/Country';
import type { FilterType } from '../types/FilterType';

export const useFetchCountries = (
  searchText: string,
  filterType: FilterType
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState(<Country[]>[]);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false); // flag to prevent double fetch
  useEffect(() => {
    const fetchStrategies = {
      name: fetchCountriesByName,
      currency: fetchCountriesByCurrenct,
      language: fetchCountriesByLanguage,
      capital: fetchCountriesByCapital,
      default: fetchCountries,
    };

    const fetchData = async () => {
      setError(null);
      setIsLoading(true);

      try {
        console.log('🚀 ~ fetchData ~ searchTerm:', searchText);
        const fetchFn =
          searchText === ''
            ? fetchCountries
            : (fetchStrategies[filterType] ?? fetchStrategies.default);

        const data = await fetchFn(searchText);
        setCountries(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchText, filterType]);

  return {
    countries,
    isLoading,
    error,
  };
};
