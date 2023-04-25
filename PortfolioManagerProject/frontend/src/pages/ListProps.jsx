import Property from '../components/Property';
import my_props from '../data/my_props.json';
import PropertyForm from '../components/PropertyForm';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


export default function ListProps() {
    const properties = useLoaderData();
    const [currProperties, setCurrProperties] = useState(properties)
    console.log(currProperties)

    return (
        <div className="AddPropForm_container center">
            <div className='head_container'>

            
                <h3>My list of properties</h3>

                <div className="list_container">
                    {
                        properties.map(({address}) => (
                            <Property address={address}/>
                        ))
                    }
                </div>
                
            </div>
            <PropertyForm/>

        </div>
    )
}