import React from "react";
import { observer } from 'mobx-react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import styles from './currentValue.module.css'

export const CurrentValue = () => {
    const [info, setInfo] = React.useState([]);
    const [input, setInput] = React.useState(0);
    const [from, setFrom] = React.useState("usd");
    const [to, setTo] = React.useState("rub");
    const [options, setOptions] = React.useState(['']);
    const [output, setOutput] = React.useState(0);

    React.useEffect(() => {
        Axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
       .then((res) => {
          setInfo(res.data[from]);
        })
      }, [from]);

    console.log(info);

    React.useEffect(() => {
        setOptions(Object.keys(info));
        convert();
      }, [info])

      function convert() {
        let rate = info[to];
        setOutput(input * rate);
      }
    

    const parse = Object.entries(info)


    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <h1>Current Value</h1>
                <div>
                <h3>Select a coin from the list and find out the equivalent to others</h3>
                <div className={styles.split}>
                    Select coin :  
                    <div className={styles.dropStyle}>
                    <Dropdown
                        options={options} 
                        onChange={(e) => { setFrom(e.value) }}
                        value={from} placeholder="From" />
                    </div>
                </div>
                <div className={styles.option}>
                    {parse.map(([key,value]) => (
                        <div>1 {from} = {value} {key}</div>
                        ))}
                </div>
                </div>
            </div>
        </div>
    );
};
