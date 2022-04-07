import React from "react";
import { observer } from 'mobx-react';
import { Axios } from "axios";

export const CurrentValue = observer(() => {
    const [info, setInfo] = React.useState([]);
    const [from, setFrom] = React.useState("usd");

    // React.useEffect(() => {
    //     Axios.get(
    //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
    //     .then((res) => {
    //         setInfo(res.data);
    //   })
    // },[])

    console.log(info);
    

    const parse = Object.entries(info)


    return (
        <div>
            <h1>Current Value</h1>
            <div>
                {parse.map(([key,value]) => (
                <div>{key} = {value}</div>
                ))}
            </div>
        </div>
    );
});
