import React from 'react'
import { CountryContext } from '../../Contexts/CountryContxt'
import { SearchFilterContext } from '../../Contexts/SearchAndFilterContext'
import Country from './Country'




const Countries = () => {
    const {Search, Region} = React.useContext(SearchFilterContext)
    // const [searchParam] = useState(["capital", "name"]);
    const {Countries, isLoading} = React.useContext(CountryContext);
    const RegionCountries = Countries.filter((country) => {
        if(Region !== 'ALL'){
            return country.region === Region
        }else{
            return Countries
        }
    })
    // const FilteredCountries = RegionCountries.filter((country) => {
    //     return country.name.search(Search.toLowerCase()) !== -1
    // })

    const FilteredCountries = RegionCountries.filter(country => country.name.match(new RegExp(Search, "i")))
    // const FilteredCountries = Countries.filter((country) => {
    //     return searchParam.some((newCountry) => {
    //         return (country[newCountry]
    //                             .toString()
    //                             .toLowerCase()
    //                             .indexOf(Search.toLowerCase()) > -1)
    //     })
    // })
    return (
        <section className='w-full flex  justify-center  flex-wrap'>
           {
            isLoading ? 'loading' :   <>

            {

                FilteredCountries.map((country,i) => {

                    return <Country country={country} key={country.Id} id={country.Id} />
                })
            }
            </>
               

           }
        </section>
    )
}

export default Countries
