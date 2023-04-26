import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ManagerEditForm from "../components/ManagerEditForm";

export default function ManagerDetails() {
    const {id} = useParams();
    console.log(id)
    const data = JSON.parse(useLoaderData())
    console.log(data, 'data loaded to ManagerDetails')
    const [editFlag, setEditFlag] = useState(false)

    return (
        <div className="details_panel center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.company}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data.phone}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{data.email}</Card.Subtitle>
                    <Card.Text>{data.office_address}</Card.Text>
                    {
                        !editFlag ? <button onClick={() => setEditFlag(true)}>Edit Item</button> : <ManagerEditForm id = {id}/>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}