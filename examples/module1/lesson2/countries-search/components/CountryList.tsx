import { CountryCard } from './CountryCard';
import type { Country } from '../types/Countries';

export function CountryList({ countries }: { countries: Country[] }) {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}
