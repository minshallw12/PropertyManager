import { useState } from "react";
import axios from 'axios';


export default function ManagerEditForm({id}) {
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [office_address, setOffice_address] = useState('')
    console.log(company, phone, email, office_address)


    const updateManager = async() => {
        console.log(id, 'id')
        let response = await axios.put(`/user/updatemanager/${id}`, {
            'company':company, 
            'phone':phone, 
            'email':email, 
            'office_address': office_address})
        console.log(response.data)
        return response.data
    }


    return (
        <div className="edit_form_container">
            <h3>Edit info below:</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                updateManager();
                setCompany('');
                setPhone('');
                setEmail('');
                setOffice_address('');
            }}>
                <input type="text" placeholder="company" onChange={(e) => setCompany(e.target.value)}/>
                <input type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="address" onChange={(e) => setOffice_address(e.target.value)}/>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
};