import { useEffect } from 'react'
import './App.css'

import SideSection from "./sections/side-section/side-section.component";
import MainCard from './components/main-card/main-card.component';
import { useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, setSearchField } from './redux/character/character.actions';

function App() {
  const dispatch = useDispatch();

  useEffect( ()=>{
      try {
        dispatch(fetchDataStart());

        const fetchCharacters = async () => {
          const response = await fetch(
            "https://rickandmortyapi.com/api/character"
          );
          const charactersData = await response.json();
          dispatch(fetchDataSuccess(charactersData.results))
          // console.log(charactersData.results)
        }

        fetchCharacters();
      } catch (error) {
        dispatch(fetchDataFailure(error))
      }

  }, [dispatch]);

  // Create a handle change function to get and update searchfield state
  const handleChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <>
      <div className='App'>
      <SideSection handleChange={handleChange}/>
      <MainCard />
      </div>
        
    </>
  )
}

export default App
