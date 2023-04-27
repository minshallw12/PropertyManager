import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function ManagerDetails() {
    const data = JSON.parse(useLoaderData())

    return (
        <div className="details_panel center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.company}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data.phone}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{data.email}</Card.Subtitle>
                    <Card.Text>{data.office_address}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}