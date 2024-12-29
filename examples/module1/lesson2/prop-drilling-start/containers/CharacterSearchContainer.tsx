import { useState } from 'react';
import { CharacterList } from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { sortCharacters } from '../utils/sortCharacters';
import { NameField } from '../components/NameField';
import GenderSelect from '../../container-components/components/GenderSelect';
import SortSelect from '../components/SortSelect';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = useCharacterSearch(name, gender);
  const [sortOption, setSortOption] = useState('');

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <SearchForm>
        <NameField name={name} setName={setName} />
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
