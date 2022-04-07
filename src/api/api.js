import * as axios from "axios";

export const getList = () => {
    return axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`) 
}

