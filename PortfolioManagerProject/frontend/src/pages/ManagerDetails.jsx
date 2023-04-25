import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { updateManager } from "../utilities";

export default function ManagerDetails() {
    const data = JSON.parse(useLoaderData())
    console.log(data, 'my data')
    const [editFlag, setEditFlag] = useState(false)
    const [formData, setFormData] = useState({
        company: data.company,
        phone: data.phone,
        email: data.email,
        address: data.office_address
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await updateManager(data.id, formData) // <-- this data.id is undefined. BUG HERE!
        setEditFlag(false)
    }
    return (
        <div className="details_panel center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.company}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data.phone}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{data.email}</Card.Subtitle>
                    <Card.Text>{data.office_address}</Card.Text>
                    {
                        !editFlag? <button onClick={() => setEditFlag(true)}>Edit Item</button> : 
                        <div>
                            <h3>Edit info below:</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="company" onChange={handleInputChange}/>
                                <input type="text" placeholder="phone" onChange={handleInputChange}/>
                                <input type="text" placeholder="email" onChange={handleInputChange}/>
                                <input type="text" placeholder="address" onChange={handleInputChange}/>
                                <button type='submit'>Update</button>
                            </form>
                            
                        </div>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}