import logo from "./logo.png";
import robot from "./images/_1d96304a-6037-4ab3-825c-d20f9e7fe754-removebg-preview.png"
import { Connector, useMqttState, useSubscription } from "mqtt-react-hooks";
import React, { useState, useEffect } from "react";
import "./App.css";
import Status from "./components/status";
import DataAGV from "./components/DataAGV";
import AGVList from "./components/AGVList";
import "bootstrap/dist/css/bootstrap.min.css";

const Children = () => {
  const { client } = useMqttState();
  const { message } = useSubscription([
    AGVList[0].topicPub,
    AGVList[0].topicOnline,
    AGVList[0].topicWifi,
    AGVList[0].topicVoltage,
    AGVList[0].topicPosition,
  ]);

  function buttonCallBack(value) {
    // if (value.mc_dex === 1) {
    //   client.publish("/dash", value);
    // }
    //client.publish("/dash", value);
    // client.publish("/send", 'hi');
  }

  return (
    <>
      <div align="center" className="App">
      <img className="App-logo" src={logo} style={{
        marginTop: "50px"
      }}/>
        <div className="App-body">
          <img src={robot} style={{
            position: "absolute",
            width: "200px",
            top: "40px",
            right: "120px"
          }}/>
          <DataAGV> VB={buttonCallBack} Select </DataAGV>
          <Status />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <Connector
      // brokerUrl="ws://localhost:8083/mqtt"
      // brokerUrl="ws://192.168.0.121:8083/mqtt"
      // brokerUrl="ws://172.19.11.38:8083/mqtt"
      brokerUrl="ws://172.30.1.9:8083/mqtt"
      options="{username: 'rtai', password:'rtai'}"
    >
      <Children />
    </Connector>
  );
}

export default App;
