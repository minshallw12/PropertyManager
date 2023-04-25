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

export const calculateMortgage = async(amount, term, rate) => {
    let response = await axios.post('/user/calculator/', {
        'amount': amount,
        'term': term,
        'rate': rate,
    })
    // console.log(response.data, "<-- response in utilities")
    return response.data
}


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


// managers loader
export const getManagers = async() => {
    let response = await axios.get("/user/managers/")
    return response.data.managers
}

// manager details loader
export const getManagerDetails = async(id) => {
    let response = await axios.get(`/user/manager/${id.params.id}`)
    // console.log(response.data.data)
    return response.data.data
} 

//properties loader
export const getProperties = async() => {
    let response = await axios.get("/user/properties/")
    return response.data.properties
}

// property details loader
export const getPropertyDetails = async(id) => {
    let response = await axios.get(`/user/property/${id.params.id}`)
    return response.data.data
}

// delete functionality
export const deleteProperty = async(id) => {
    let response = await axios.delete(`/user/deletemanager/${id}`)
    console.log(response.data)
    return response.data
}