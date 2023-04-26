import { useState, useEffect } from "react";
import { getManagers } from "../utilities";
import axios from 'axios';



export default function PropertyEditForm({id}) {
    const [address, setAddress] = useState(null)
    const [city, setCity] =  useState(null)
    const [state, setState] = useState(null)
    const [square_feet, setSquare_feet] = useState(null)
    const [purchase_cost, setPurchase_cost] = useState(null)
    const [current_income, setCurrent_income] = useState(null)
    const [current_upkeep, setCurrent_upkeep] = useState(null)
    const [manager, setManager] = useState(null)
    const [portfolio_id, setPortfolio_id] = useState(1)
    const [managersList, setManagersList] = useState([])
    console.log(address, city, state, square_feet, purchase_cost, current_income, current_upkeep, manager, portfolio_id)

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

    // helper function creates an instance from the manager selector
    function getInstance(int,lst) {
        for (let i=0; i<lst.length; i++) {
            console.log(lst[i].id)
            if (lst[i].id === int) {
                console.log(lst[i])
                return lst[i]
            } else {
                console.log('instance failed')
            }
        }
    }
    

    const updateProperty = async() => {
        console.log(id, 'id')
        let response = await axios.put(`/user/updateproperty/${id}`, {
            'address':address, 
            'city':city, 
            'state':state, 
            'square_feet': square_feet,
            'purchase_cost': purchase_cost,
            'current_income': current_income,
            'current_upkeep': current_upkeep,
            'manager': manager
        })
        return response.data
    }

    return (
        <div className="edit_form_container">
            <h3>Edit info below:</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                updateProperty();
                setAddress(""),
                setCity(""),
                setState(""),
                setSquare_feet(""),
                setPurchase_cost(""),
                setCurrent_income(""),
                setCurrent_upkeep(""),
                setManager("")
            }}>
                <input type="text" placeholder="address" onChange={(e) => setAddress(e.target.value)}/>
                <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)}/>
                <input type="text" placeholder="state" onChange={(e) => setState(e.target.value)}/>
                <input type="text" placeholder="square_feet" onChange={(e) => setSquare_feet(e.target.value)}/>
                <input type="text" placeholder="purchase_cost" onChange={(e) => setPurchase_cost(e.target.value)}/>
                <input type="text" placeholder="current_income" onChange={(e) => setCurrent_income(e.target.value)}/>
                <input type="text" placeholder="current_upkeep" onChange={(e) => setCurrent_upkeep(e.target.value)}/>
                <select type="dropdown" placeholder="manager" onChange={(e) => setManager(getInstance(e.target.value, managersList))}>
                    <option>Choose a Property Manager</option>
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