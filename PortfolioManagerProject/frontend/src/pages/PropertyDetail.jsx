import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function PropertyDetails() {
    const data = JSON.parse(useLoaderData())

    return (
        <div className="propertydetail_container center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.street}</Card.Title>
                    <Card.Subtitle>{data.city}, {data.state}</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">{data.square_feet} sqft</Card.Text>
                    <Card.Text >Purchased for: ${data.purchase_cost}</Card.Text>
                    <Card.Text>Monthly income: ${data.current_income}</Card.Text>
                    <Card.Text>Monthly cost: ${data.current_upkeep}</Card.Text>
                    <Card.Text>Monthly profit: ${data.current_income-data.current_upkeep}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}