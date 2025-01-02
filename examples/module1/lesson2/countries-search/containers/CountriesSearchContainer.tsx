import React, { useEffect, useState } from 'react';
import { Searchtext } from '../components/SearchText';
import { FilterSelect } from '../components/FilterSelect';
import { SortSelect } from '../components/SortSelect';
import type { FilterType } from '../types/FilterType';
import type { SortType } from '../types/SortType';
import useFetchCountries from '../hook/useFetchCountries';
import { CountryList } from '../components/CountryList';
import ErrorBoundary from '../components/ErrorBoundary';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';

const CountriesSearchContainer = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [filterType, setFilterType] = useState<FilterType>('name');
  const [sortType, setSortType] = useState<SortType>('alphabetical');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  const { countries, isLoading, error } = useFetchCountries(
    searchText,
    filterType
  );

  const sortedCountriesArray = React.useMemo(() => {
    if (!countries) return [];
    const sorted = [...countries];
    if (sortType === 'alphabetical') {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortType === 'population') {
      sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    }

    return sorted;
  }, [countries, sortType]);

  const totalPages = Math.ceil(sortedCountriesArray.length / itemsPerPage);

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [searchText, filterType, sortType]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountriesArray.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderFetchResponse = () => {
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
    <>
      <div className="container mx-auto py-4">
        <h1>{filterType}</h1>
        <Searchtext
          filterType={filterType}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <div className="flex flex-row gap-4">
          <FilterSelect filterType={filterType} setFilterType={setFilterType} />
          <SortSelect sortType={sortType} setSortType={setSortType} />
        </div>
        <ErrorBoundary>{renderFetchResponse()}</ErrorBoundary>
      </div>
    </>
  );
};

export default CountriesSearchContainer;
