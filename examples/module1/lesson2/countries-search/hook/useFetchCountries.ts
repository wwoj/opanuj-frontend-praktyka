import { useEffect, useState } from 'react';
import {
  fetchAllCountries,
  fetchCountriesByCapital,
  fetchCountriesByCurrency,
  fetchCountriesByLanguage,
  fetchCountriesByName,
} from '../api/apiClient';
import type { Country } from '../types/Countries';
import type { FilterType } from '../types/FilterType';

const useFetchCountries = (searchTerm: string, filterType: FilterType) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStrategies = {
      name: fetchCountriesByName,
      currency: fetchCountriesByCurrency,
      language: fetchCountriesByLanguage,
      capital: fetchCountriesByCapital,
      default: fetchAllCountries,
    };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log('🚀 ~ fetchData ~ searchTerm:', searchTerm);
        console.log('🚀 ~ fetchData ~ filterType:', filterType);
        const fetchFn =
          searchTerm === ''
            ? fetchAllCountries
            : fetchStrategies[filterType] ?? fetchStrategies.default;

        // warning due to that not all are set!
        const data = await fetchFn(searchTerm);
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
  }, [searchTerm, filterType]);

  console.log('todo', countries);
  return {
    countries,
    isLoading,
    error,
  };
};

export default useFetchCountries;
