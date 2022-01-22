import {React, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CountryContext } from '../Contexts/CountryContxt'
import { useNavigate } from 'react-router-dom'

const DetailCountry = () => {
    let params = useParams()
    const {Countries, isLoading} = useContext(CountryContext)
    const navigate = useNavigate();
    return (
        isLoading ? 'loading' :
        <section className='w-full flex lg:flex-row flex-col flex-wrap '>
                <div className='w-full'>
                <button onClick={() => navigate(-1)} className='rounded bg-vdb2 lg:m-16 m-8 p-3 w-36'><i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;&nbsp;&nbsp; Back </button>
                </div>
                <div className='w-full flex  lg:w-1/2 justify-center'>
                    <img className='w-10/12  h-full' src={ Countries[params.country_id].flag} alt="" />

                </div>
                    <div className='lg:w-1/2 h-12 ml-10 lg:ml-0'>
                    <h1 className='font-bold my-4'>{ Countries[params.country_id].name }</h1>
                        <div className='lg:flex'>
                            <div>
                           <p className='mb-2'>Native Name: <span className='color-gray'> &nbsp;{Countries[params.country_id].nativeName}</span></p> 
                           <p className='mb-2'>Population: <span className='color-gray'> &nbsp;{Countries[params.country_id].population}</span></p>
                           <p className='mb-2'>Region: <span className='color-gray'> &nbsp;{Countries[params.country_id].region}</span></p>
                           <p className='mb-2'>Sub Region: <span className='color-gray'> &nbsp;{Countries[params.country_id].subregion}</span></p>
                           <p className='mb-2'>Capital: <span className='color-gray'> &nbsp; {Countries[params.country_id].capital}</span></p>
                            </div>
                            <div className='lg:ml-32'>
                           <p className='mb-2'>Top Level Domain: <span className='color-gray '> &nbsp; {Countries[params.country_id].topLevelDomain}</span></p>
                           <p className='mb-2 flex  '>Currencies: &nbsp;<span className='color-gray w-1/3 flex '> {Countries[params.country_id].currencies.map((currency)=> {return (<p className='w-full' key={3}>{currency.name},</p>) })}</span></p>
                        <p className='mb-2 flex'>Languages: &nbsp; <span className='color-gray flex '> {Countries[params.country_id].languages.map((language)=> {return (<p key={3}>{language.name},</p>) })}</span></p> 

                            </div>
                        </div>
                        <div className='lg:flex items-center lg: mt-20'>
                            <h1 >Border Countries:</h1>
                            <div>   
                            { Countries[params.country_id].borders ? Countries[params.country_id].borders.map((border) => {
                                console.log(border);
                             return(<button className='rounded bg-vdb2 m-2 p-2' key={2}>{border} &nbsp;</button>) 

                            }) : ''

                            }
   
                            </div>
                        </div>
                    </div>
            </section>
    )
}

export default DetailCountry
