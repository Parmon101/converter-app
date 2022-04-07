import * as React from 'react';
import { BasicButton } from '../../ui/BasicButton';
import styles from './home.module.css';
import Dropdown from 'react-dropdown';
import Axios from 'axios';

export const Home = () => {
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
    
    
  React.useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])

  function convert() {
    let rate = info[to];
    setOutput(input * rate);
  }

  function flip() {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className={(styles.wrapper)}>
        <div className={styles.blockTop}>
            <div className={styles.amountBlock}>
                <h3>Amount</h3>
                <input 
                type="text" 
                placeholder="Enter the amount" 
                onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className={styles.middleBlock}>
                <div className={styles.from}>
                    <h3>From</h3>
                    <Dropdown 
                        options={options} 
                        onChange={(e) => { setFrom(e.value) }}
                        value={from} placeholder="From" 
                        />
                </div>
                <div>
                    <BasicButton 
                        handleClick={() => { flip()}}
                        color="red"
                    >
                        {`<===>`}
                    </BasicButton>
                </div>
                <div className={styles.to}>
                    <h3>To</h3>
                    <Dropdown 
                        options={options} 
                        onChange={(e) => {setTo(e.value)}} 
                        value={to} placeholder="To" />
                </div>
            </div>
        </div>
        <div className={styles.blockBottom}>
            <h2>Converted Amount:</h2>
            <div className={styles.button}>
                <BasicButton
                    handleClick={() => ''}
                    color="red"
                    >
                    Convert
                </BasicButton>
            </div>
            <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
        </div>
    </div>
)}
