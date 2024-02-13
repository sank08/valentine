import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const query = new URLSearchParams(window.location.search);
  const token = query.get('token')
  const [isClicked, setClick] = useState();
  const setEnvolope = () => {
    setClick(!isClicked);
    setTimeoutBit(false);
  }
  const [timeoutBit, setTimeoutBit] = useState();
  useEffect(() => {
    setTimeout(() => {
      setTimeoutBit(true);
    }, 15000);
  }, [])
  return (
    <Heart name={token} isClicked={isClicked} setEnvolope={setEnvolope} timeoutBit={timeoutBit} />
  );
}

function Heart(props) {
  let name = props.name ? props.name : "From Sank8";
  return (
    <div className="container" onClick={props.setEnvolope}>
      {
        (!props.isClicked && props.timeoutBit) && <span className='t-l'>Do Something... open the envelope</span>
      }

      <div className={`valentines ${props.isClicked ? "open" : "close"}`}>
        <div className={`envelope ${props.isClicked ? "glow" : ""}`}></div>
        <div className="front"></div>
        <div className="card">
          <div className="text">Happy<br /> Valentine's<br /> Day! <br /><span>{name}</span></div>
        </div>
      </div>
      <div className="hearts">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default App;
