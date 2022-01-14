import './App.css';
import './styles/output.css'
import Header from './components/Header';
import SectionMobile from './components/sectionMobile/SectionMobile';
import { Route, Routes } from "react-router-dom";
import {React, useEffect, useState} from 'react';
import { CountryContext } from './components/Contexts/CountryContxt';
import DetailCountry from './components/DetailedCountry/DetailCountry';

function App() {
  const [Countries, setCountries] = useState([]) ;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
            setCountries(result)
            setIsLoading(false)
        },    
      )
      .catch(error => {
          console.log('Error: ', error)
      })
  }, [])
  
  return (
    <>
    <nav className=''>
    <Header></Header>
    </nav>
    <CountryContext.Provider value={{Countries, isLoading}}>
    <Routes>

      <Route path='' element={<SectionMobile> </SectionMobile>} />
      <Route path='/country/:country_id' element={<DetailCountry/>}/>

    </Routes>

    </CountryContext.Provider>

    </>
  );
}

export default App;
