import my_managers from '../data/my_props.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ManagerForm() {

    return (
        <div>
            <h3>Add new manager</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Company Details:</Form.Label>
                    <Form.Control type="text" placeholder="Street" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}