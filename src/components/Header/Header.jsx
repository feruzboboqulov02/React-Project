import { useState } from 'react';
import logo from '/public/logo-name.svg';
import './Header.css';
 
export default function Header(){
    const [now,setNow] = useState(new Date());
    setInterval(() => {
        setNow(new Date());
    }, 1000);
    return(
    <header>
        {/* <h3>university</h3> */}
        <img src={logo} alt="Result" />
        <span>The time is: {now.toLocaleTimeString()}</span>
      </header>
  )
}