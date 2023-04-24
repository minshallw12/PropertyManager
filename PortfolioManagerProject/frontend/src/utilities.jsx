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
// this return a list of managers on the managers tab
export const getManagers = async() => {
    let response = await axios.get("/user/managers/")
    return response.data.managers
}