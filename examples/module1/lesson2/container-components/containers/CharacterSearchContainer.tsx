import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import type { Character } from '../types/Character';
import { characterSearch } from '../hooks/characterSearch';
import { sortCharacters } from '../utils/sortCharacters';
import { NameInput } from '../components/NameInput';
import { GenderSelect } from '../components/GenderSelect';
import { SortSelect } from '../components/SortSelect';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = characterSearch(name, gender);
  const [sortOption, setSortOption] = useState('');

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <SearchForm>
        <NameInput name={name} setName={setName} />
        <GenderSelect gender={gender} setGender={setGender} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </SearchForm>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
