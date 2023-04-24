import Property from '../components/Property';
import my_props from '../data/my_props.json';
import PropertyForm from '../components/PropertyForm';
import { UserContext } from "../App";
import { useContext } from 'react';

// const portfolio_id = useContext(UserContext);


export default function ListProps() {
console.log(useContext(UserContext))


    return (
        <div className="AddPropForm_container center">
            <div className='head_container'>

            
                <h3>My list of properties</h3>

                <div className="list_container">
                    {
                        my_props.map(({address}) => (
                            <Property address={address}/>
                        ))
                    }
                </div>
                
            </div>
            <PropertyForm/>

        </div>
    )
}