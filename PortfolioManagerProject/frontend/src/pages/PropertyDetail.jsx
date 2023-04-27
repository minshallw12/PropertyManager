import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import PropertyEditForm from "../components/PropertyEditForm"

export default function PropertyDetails() {
    const {id} = useParams();
    const data = JSON.parse(useLoaderData())
    console.log(data)
    const [editFlag, setEditFlag] = useState(false)

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
                    <Card.Text>Assigned Manager: {data.manager}</Card.Text>
                    {
                        !editFlag ? <button onClick={() => setEditFlag(true)}>Edit Item</button> : <PropertyEditForm id = {id}/>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}