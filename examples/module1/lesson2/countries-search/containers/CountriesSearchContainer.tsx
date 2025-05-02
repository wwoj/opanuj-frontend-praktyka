import { fetchCountries } from '../api/apiClinet';
import { useState, useEffect } from 'react';
import { SearchBox } from '../components/SearchBox';

import { useFetchCountries } from '../hooks/useFetchCountries';

import Loader from '../components/Loader';
import { CountryList } from '../components/CountryList';
import React from 'react';
import type { FilterType } from '../types/FilterType';
import type { SortOrder } from '../types/SortOrder';
import ErrorBoundary from '../components/ErrorBoundary';
import { SearchText } from '../components/SearchText';
import { SearchValue } from '../components/SearchValue';
import Pagination from '../components/Pagination';

const CountriesSearchContainer = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [searchText, setSearchText] = useState<string>('');
  const [filterType, setFilterType] = useState<FilterType>('name');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;
  const { countries, isLoading, error } = useFetchCountries(
    searchText,
    filterType
  );

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [searchText, filterType, sortOrder]);

  const sortedCountries = React.useMemo(() => {
    if (!countries) return [];
    const sorted = [...countries];
    if (sortOrder === 'alphabetical') {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOrder === 'population') {
      sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    }
    return sorted;
  }, [countries, sortOrder]);

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderContent = () => {
    if (error) return <div className="text-red-500">{error}</div>;
    if (isLoading) return <Loader />;

    return (
      <>
        <CountryList countries={currentCountries} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </>
    );
  };
  return (
    <main className="container mx-auto py-4">
      <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <ErrorBoundary>{renderContent()}</ErrorBoundary>
    </main>
  );
};

export default CountriesSearchContainer;
