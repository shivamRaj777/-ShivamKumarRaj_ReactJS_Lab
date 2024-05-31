import axios from "axios";
//for fetching 
const getDataFromServer=()=>{
    return axios.get("http://localhost:3001/items")
    .then(response=> response.data)
}

//for performing post operation
const postDataToServer=(newExpense)=>{
    return axios.post("http://localhost:3001/items",newExpense,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response=> response.data)
}

export {
    getDataFromServer,
    postDataToServer
}