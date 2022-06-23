import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import openSocket from "socket.io-client";



function App() {

  const [customerStatus, setStatus] = useState('loading');

  useEffect(() => {
    handleFetch();
    const socket = openSocket("https://customeralert.herokuapp.com/");
    socket.on("status has changed", () => {
      setStatus(!customerStatus);
    });
    });

  function handleFetch() {
    axios({
      url: "https://customeralert.herokuapp.com/",
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      setStatus(res.data);
      // console.log(res.data.data);
    });
  }

//   function renderElement(){
//     if(customerStatus) return <h1>customers are waiting</h1>
//     else return <h1>No customers are waiting</h1>;
//  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {customerStatus}
        </p>

      </header>
    </div>
  );
}

export default App;
