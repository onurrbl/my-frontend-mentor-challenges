import {React, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CountryContext } from '../Contexts/CountryContxt'

const DetailCountry = () => {
    let params = useParams()
    const {Countries, isLoading} = useContext(CountryContext)
    console.log(Countries[params.country_id]);
    // console.log(Countries[params.country_id].languages.map((language)=> {return (<p key={3}>{language}</p>) }))
    return (
        isLoading ? 'loading' :
        <section className='w-full'>
                <div>
                <button> Back </button>
                </div>
                    <img src={ Countries[params.country_id].flag} alt="" />
                    <div>
                    <h1>{ Countries[params.country_id].name }</h1>
                        <div>
                           <p>Native Name: <span> &nbsp;{Countries[params.country_id].nativeName}</span></p> 
                           <p>Population: <span> &nbsp;{Countries[params.country_id].population}</span></p>
                           <p>Region: <span> &nbsp;{Countries[params.country_id].region}</span></p>
                           <p>Sub Region: <span> &nbsp;{Countries[params.country_id].subregion}</span></p>
                           <p>Capital: <span> &nbsp; {Countries[params.country_id].capital}</span></p>
                           <p>Top Level Domain: <span> &nbsp; {Countries[params.country_id].topLevelDomain}</span></p>
                           <p>Currencies: <span>&nbsp; {Countries[params.country_id].currencies.map((currency)=> {return (<p key={3}>{currency.name},</p>) })}</span></p>
                        <p>Languages: <span> &nbsp; {Countries[params.country_id].languages.map((language)=> {return (<p key={3}>{language.name},</p>) })}</span></p> 
                        </div>
                        <div>
                            <h1>Border Countries:</h1>
                            <div>
                            { Countries[params.country_id].borders ? Countries[params.country_id].borders.map((border) => {
                             return(<button key={2}>{border.name} &nbsp;</button>) 

                            }) : ''

                            }
   
                            </div>
                        </div>
                    </div>
            </section>
    )
}

export default DetailCountry
