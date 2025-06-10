import logo from '/public/logo-name.svg';
export default function Header(){
    const now = new Date();
    return(
    <header>
        {/* <h3>university</h3> */}
        <img src={logo} alt="Result" />
        <span>The time is: {now.toLocaleTimeString()}</span>
      </header>
  )
}