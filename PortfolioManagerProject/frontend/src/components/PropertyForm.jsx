import { useState, useEffect } from 'react';
import { addProperty, getManagers } from '../utilities';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PropertyForm({ onNewProperty }) {
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
    console.log(street, city, state, square_feet, purchase_cost, current_income, current_upkeep, manager, portfolio_id, managersList)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newProperty = await addProperty(
          street,
          city,
          state,
          square_feet,
          purchase_cost,
          current_income,
          current_upkeep,
          manager,
          portfolio_id
        );
        onNewProperty(newProperty);
        setStreet("");
        setCity("");
        setState("");
        setSquare_feet("");
        setPurchase_cost("");
        setCurrent_income("");
        setCurrent_upkeep("");
        setManager("");
      };

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

  return (
    <div>
        <h3>Add new property</h3>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formStreet" onChange={(event) => setStreet(event.target.value)}>
                <Form.Label>Enter Property Details:</Form.Label>
                <Form.Control type="text" placeholder="Street" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity" onChange={(event) => setCity(event.target.value)}>
                <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formState" onChange={(event) => setState(event.target.value)}>
                <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSqft" onChange={(event) => setSquare_feet(event.target.value)}>
                <Form.Control type="number" placeholder="No. SQFT" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCost" onChange={(event) => setPurchase_cost(event.target.value)}>
                <Form.Control type="text" placeholder="Purchase cost" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIncome" onChange={(event) => setCurrent_income(event.target.value)}>
                <Form.Control type="number" placeholder="Current Income" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUpkeep" onChange={(event) => setCurrent_upkeep(event.target.value)}>
                <Form.Control type="number" placeholder="Current Upkeep cost ($)" />
            </Form.Group>
            <Form.Select aria-label="Default select example" onChange={(event) => setManager(event.target.value)}>
                <option>Choose a Property Manager</option>
                {
                    managersList.map(({id, company}) => (
                        <option value={id}>{company}</option>
                    ))
                }
            </Form.Select> 
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
   
  );
}