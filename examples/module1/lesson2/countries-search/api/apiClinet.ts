import type { Country } from '../types/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/all`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('No countries found.');
    }
    throw new Error('Failed to fetch all countries.');
  }

  const data: Country[] = await response.json();
  return data;
}

/**
 * Fetches countries by name.
 * @param name - The country name to search for (e.g., 'Germany').
 * @returns Promise resolving to an array of Country objects.
 */

async function fetchCountriesByName(name: string): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/name/${name}?fullText=false`);

  if (!response.ok) {
    throw new Error(
      generateErrorMessage('name', name, response.status === 404)
    );
  }

  const data: Country[] = await response.json();
  return data;
}

/**
 * Fetches countries by name.
 * @param name - The country name to search for (e.g., 'Germany').
 * @returns Promise resolving to an array of Country objects.
 */

async function fetchCountriesByLanguage(language: string): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/lang/${language}`);

  if (!response.ok) {
    throw new Error(
      generateErrorMessage('language', language, response.status === 404)
    );
  }

  const data: Country[] = await response.json();
  return data;
}

/**
 * Fetches countries by name.
 * @param name - The country name to search for (e.g., 'Germany').
 * @returns Promise resolving to an array of Country objects.
 */

async function fetchCountriesByCurrenct(currency: string): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/currency/${currency}`);

  if (!response.ok) {
    throw new Error(
      generateErrorMessage('currency', currency, response.status === 404)
    );
  }

  const data: Country[] = await response.json();
  return data;
}

/**
 * Fetches countries by name.
 * @param name - The country name to search for (e.g., 'Germany').
 * @returns Promise resolving to an array of Country objects.
 */

async function fetchCountriesByCapital(capital: string): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/capital/${capital}`);

  if (!response.ok) {
    throw new Error(
      generateErrorMessage('capital', capital, response.status === 404)
    );
  }

  const data: Country[] = await response.json();
  return data;
}
/**
 * Generates consistent error messages for API responses
 * @param type - The type of search (e.g., 'name', 'capital')
 * @param value - The search value
 * @param isNotFound - Whether this is a 404 error
 * @returns Formatted error message
 */
function generateErrorMessage(
  type: string,
  value: string,
  isNotFound: boolean
): string {
  if (isNotFound) {
    return `No countries found with ${type}: ${value}.`;
  }
  return `Failed to fetch countries by ${type}: ${value}.`;
}

export {
  fetchCountriesByName,
  fetchCountriesByLanguage,
  fetchCountriesByCurrenct,
  fetchCountriesByCapital,
};
