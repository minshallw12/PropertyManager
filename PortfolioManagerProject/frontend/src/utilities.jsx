import axios from 'axios';

export const signUp = async(name, email, password) => {
    let response = await axios.post('/user/signup/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    console.log(response.data.success)
    return response.data.success
}
// calculator utilities
export const calculateMortgage = async(amount, term, rate) => {
    let response = await axios.post('/user/calculator/', {
        'amount': amount,
        'term': term,
        'rate': rate,
    })
    // console.log(response.data, "<-- response in utilities")
    return response.data
}
export const addYearsToDate = (dateStr, num) => {
    let int = parseInt(num)
    let date = new Date(dateStr);
    date.setFullYear(date.getFullYear()+ int);
    let year = date.getFullYear();
    let month = (date.getMonth()+1).toString().padStart(2,'0');
    let day = date.getDate().toString().padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate
};


export const logIn = async(email, password, setUser, setLogInFlag) => {
    let response = await axios.post('/user/login/', {
        'email' : email,
        'password' : password
    })
    setUser(response.data)
    setLogInFlag(true)
}

export const currUser = async() =>{
    let response = await axios.get('/user/curruser/')
    return response.data
}

export const currFlag = async() => {
    let response = await axios.get('/user/currflag/')
    return response.data
}

export const logOut = async(setUser, setLogInFlag) => {
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
        setUser(null)
        setLogInFlag(false)
    }
}

// Create r u d
export const addManager = async(company, phone, email, address) => {
    let response = await axios.post('/user/addmanager/' , {
        'company': company,
        'phone': phone,
        'email' : email,
        'address' : address
    })
    console.log(response.data.success)
    return response.data.success
}

export const addProperty = async(street,city,state,square_feet,purchase_cost,current_income,current_upkeep, manager, portfolio_id) => {
    let response = await axios.post('/user/addproperty/' , {            // breadcrumb to urls
        'street': street,
        'city': city,
        'state' : state,
        'square_feet' : square_feet,
        'purchase_cost': purchase_cost,
        'current_income' : current_income,
        'current_upkeep' : current_upkeep,
        'manager': manager,
        'portfolio_id': portfolio_id
    })
    console.log(response.data.success)
    return response.data.success
}

// c Read u d
export const getManagers = async() => {
    let response = await axios.get("/user/managers/")
    return response.data.managers
}
export const getManagerDetails = async(id) => {
    let response = await axios.get(`/user/manager/${id.params.id}`)
    console.log(response.data, 'ME!!')
    return response.data.data
}
export const getManagerID = async(id) => {
    let response = await axios.get(`/user/manager/${id.params.id}`)
    console.log(response.data, 'ME!!')
    return response.data.id
}
export const getProperties = async() => {
    let response = await axios.get("/user/properties/")
    return response.data.properties
}
export const getPropertyDetails = async(id) => {
    let response = await axios.get(`/user/property/${id.params.id}`)
    return response.data.data
}

// c r Update d
export const updateManager = async(id, company, phone, email, office_address) => {
    console.log(id, 'id')
    let response = await axios.put(`/user/updatemanager/${id.params.id}`, {'company':company, 'phone':phone, 'email':email, 'office_address': office_address}) // this is undefined
    console.log(response.data)
    return response.data
}


// c r u Delete
export const deleteManager = async(id) => {
    let response = await axios.delete(`/user/deletemanager/${id}`)
    console.log(response.data)
    return response.data
}
export const deleteProperty = async(id) => {
    let response = await axios.delete(`/user/deleteproperty/${id}`)
    console.log(response.data)
    return response.data
}