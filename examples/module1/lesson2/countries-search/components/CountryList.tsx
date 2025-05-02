import { type Country } from '../types/Country';

import { CountryCard } from './CountryCard';
interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {countries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </div>
  );
};
