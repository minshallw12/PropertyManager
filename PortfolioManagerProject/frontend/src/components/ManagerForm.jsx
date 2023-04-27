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
    console.log(company, phone, email, address)

    return (
        <div>
            <h3>Add new manager</h3>
            <Form onSubmit={(event) => [
                event.preventDefault(),
                addManager(company, phone, email, address),
                setCompany(""),
                setPhone(""),
                setEmail(""),
                setAddress(""),
            ]}>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setCompany(event.target.value)}>
                    <Form.Label>Enter Company Details:</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setPhone(event.target.value)}>
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setEmail(event.target.value)}>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setAddress(event.target.value)}>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}