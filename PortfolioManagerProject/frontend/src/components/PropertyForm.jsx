import my_managers from '../data/my_props.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function PropertyForm() {


  return (
    <div>
        <h3>Add new property</h3>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Property Details:</Form.Label>
                <Form.Control type="text" placeholder="Street" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="No. SQFT" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Current Income" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Current Upkeep cost ($)" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Choose a Property Manager</option>
                {/* <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
                {
                    my_managers.map(({id, company, contact_name}) => (
                        <option value={id}>{contact_name}{company}</option>
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