import my_managers from '../data/my_props.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addManager } from '../utilities';
import { useState } from 'react';

export default function ManagerForm() {
    const [company, setCompany] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [address, setAddress] = useState(null)


    return (
        <div>
            <h3>Add new manager</h3>
            <Form onSubmit={(event) => [
                event.preventDefault(),
                console.log('clicked'),
                addManager(company, phone, email, address),
                setCompany(""),
                setPhone(""),
                setEmail(""),
                setAddress(""),
            ]}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Company Details:</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}