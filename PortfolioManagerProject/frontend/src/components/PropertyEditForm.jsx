import { useState, useEffect } from "react";
import axios from 'axios';
import my_managers from '../data/my_managers.json'; // will need a loader to get the options for 
import { getManagers } from "../utilities";

export default function PropertyEditForm({id}) { // id is passed in as prop
    const [street, setStreet] = useState(null)
    const [city, setCity] =  useState(null)
    const [state, setState] = useState(null)
    const [square_feet, setSquare_feet] = useState(null)
    const [purchase_cost, setPurchase_cost] = useState(null)
    const [current_income, setCurrent_income] = useState(null)
    const [current_upkeep, setCurrent_upkeep] = useState(null)
    const [manager, setManager] = useState(null)
    const [portfolio_id, setPortfolio_id] = useState(1)
    const [managersList, setManagersList] = useState([])
    console.log(street, city, state, square_feet, purchase_cost, current_income, current_upkeep, manager, portfolio_id)

    useEffect(() => {
        async function fetchManagers() {
          try {
            const response = await getManagers();
            setManagersList(response);
          } catch (error) {
            console.log(error);
          }
        }
        fetchManagers();
      }, []);

    const updateProperty = async() => {
        console.log(id, 'id')
        let response = await axios.put(`/user/updateproperty/${id}`, {'company':company, 'phone':phone, 'email':email, 'office_address': office_address}) // this is undefined
        console.log(response.data)
        return response.data
    }

    return (
        <div className="edit_form_container">
            <h3>Edit info below:</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                updateProperty();
                setStreet(""),
                setCity(""),
                setState(""),
                setSquare_feet(""),
                setPurchase_cost(""),
                setCurrent_income(""),
                setCurrent_upkeep(""),
                setManager("")
            }}>
                <input type="text" placeholder="street" onChange={(e) => setStreet(e.target.value)}/>
                <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)}/>
                <input type="text" placeholder="state" onChange={(e) => setState(e.target.value)}/>
                <input type="text" placeholder="square_feet" onChange={(e) => setSquare_feet(e.target.value)}/>
                <input type="text" placeholder="purchase_cost" onChange={(e) => setPurchase_cost(e.target.value)}/>
                <input type="text" placeholder="current_income" onChange={(e) => setCurrent_income(e.target.value)}/>
                <input type="text" placeholder="current_upkeep" onChange={(e) => setCurrent_upkeep(e.target.value)}/>
                <select type="dropdown" placeholder="manager" onChange={(e) => setManager(e.target.value)}>
                    {
                        managersList.map(({id, company}) => (
                            <option value={id}>{company}</option>
                        ))
                    }
                </select>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
};