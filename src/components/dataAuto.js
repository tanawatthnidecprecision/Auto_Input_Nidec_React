// import logoAGV from '../../src/icon/AGVcrop.png';
// import logoAGVhook from '../../src/icon/AGVhook.png';
// import logoBattery from '../../src/icon/charger.png';
// import logoDoor from '../../src/icon/door.png';
// import iconWiFi from '../../src/icon/iconWiFi.png';
// import iconPosition from '../../src/icon/iconPosition.png';
// import iconBattery from '../../src/icon/iconBattery.png';
// import iconCommand from '../../src/icon/iconCommand.png';
import "antd/dist/antd.min.css";
import Button from "react-bootstrap/Button";
// import Button from '@mui/material/Button';
// import React, { useState } from 'react'
// import ReactHookSelect from 'react-hook-select'
// import SelectSearch, { fuzzySearch } from "react-select-search";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
// import Select from 'react-select'
// import { useMqttState } from 'mqtt-react-hooks';
import { Connector, useMqttState, useSubscription } from "mqtt-react-hooks";
// import React, { Component } from 'react'
import Select from "react-select";
import { Placeholder } from "react-bootstrap";
// import TimePicker from 'react-time-picker';
import { TimePicker } from "antd";

import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

var int = 0;
export default function DataAuto() {
  const [myArray, setMyArray] = useState([]);
  const [prod_name, setProd_name] = useState([]);
  const [model, setModel] = useState([]);
  const [room_list, setRoom] = useState([]);
  const [room, setRoom_room] = useState([]);
  const [shift, setShift] = useState("");
  const [mc_id, setMc_id] = useState("");
  const [mc_index, setMc_index] = useState("");
  const [prod, setProd] = useState("");
  const [line_no, setLine_no] = useState("");
  const [line, setLine] = useState("");
  const [mc, setMc] = useState("");
  const [m_c, setM_c] = useState("");
  const [time_table, setTime_table] = useState([]);
  const [table_time, setTable_time] = useState("");
  const [sTime, setTime] = useState("");

  var start_t_time = 0;

  const locale = "fr";
  const [today, setDate] = React.useState(new Date());

  const [searches, setSearches] = useState([]);
  const [start, setStart] = useState([]);
  const [t_time1, sett_time1] = useState("");
  const [t_time2, sett_time2] = useState("");
  const [t_time3, sett_time3] = useState("");
  const [t_time4, sett_time4] = useState("");
  const [t_time5, sett_time5] = useState("");
  const [t_time6, sett_time6] = useState("");
  const [t_time7, sett_time7] = useState("");
  const [t_time8, sett_time8] = useState("");
  const [t_time9, sett_time9] = useState("");
  const [t_time10, sett_time10] = useState("");
  const [t_time11, sett_time11] = useState("");
  const [t_time12, sett_time12] = useState("");

  const [t_time13, sett_time13] = useState("");
  const [t_time14, sett_time14] = useState("");
  const [t_time15, sett_time15] = useState("");
  const [t_time16, sett_time16] = useState("");
  const [t_time17, sett_time17] = useState("");
  const [t_time18, sett_time18] = useState("");
  const [t_time19, sett_time19] = useState("");
  const [t_time20, sett_time20] = useState("");
  const [t_time21, sett_time21] = useState("");
  const [t_time22, sett_time22] = useState("");
  const [t_time23, sett_time23] = useState("");
  const [t_time24, sett_time24] = useState("");

  const [t_time25, sett_time25] = useState("");
  const [t_time26, sett_time26] = useState("");
  const [t_time27, sett_time27] = useState("");
  const [t_time28, sett_time28] = useState("");
  const [t_time29, sett_time29] = useState("");
  const [t_time30, sett_time30] = useState("");
  const [t_time31, sett_time31] = useState("");
  const [t_time32, sett_time32] = useState("");
  const [t_time33, sett_time33] = useState("");
  const [t_time34, sett_time34] = useState("");
  const [t_time35, sett_time35] = useState("");
  const [t_time36, sett_time36] = useState("");

  const [t_time37, sett_time37] = useState("");
  const [t_time38, sett_time38] = useState("");
  const [t_time39, sett_time39] = useState("");
  const [t_time40, sett_time40] = useState("");
  const [t_time41, sett_time41] = useState("");
  const [t_time42, sett_time42] = useState("");
  const [t_time43, sett_time43] = useState("");
  const [t_time44, sett_time44] = useState("");
  const [t_time45, sett_time45] = useState("");
  const [t_time46, sett_time46] = useState("");
  const [t_time47, sett_time47] = useState("");
  const [t_time48, sett_time48] = useState("");

  const [target_va, setTarget] = useState("");
  const [mc_mc_at, setMc_mc_at] = useState("");
  const [work_time, setWork_time] = useState("");

  const [index_con, setIndex_con] = useState("");
  const [id_config, setId_config] = useState("");

  const [index_his, setIndex_his] = useState("");
  const [id_history, setId_history] = useState("");

  // const [selectedOption, setSelectedOption] = useState(null);

  const [visible, setVisible] = React.useState(false);
  const [visible_select, setVisible_select] = React.useState(false);
  const [showText, setShowText] = useState(false);
  const [time_value, setValue] = useState(null);
  const [value, onChange] = useState("10:00");

  // const [keep, setKeep] = React.useState(
  //     localStorage.getItem('myValueInLocalStorage') || ''
  //   );

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  var cal_tar_work = Math.floor(target_va / work_time);
  var min_diff_sum = "";
  var minutes_diff = 0;
  let send_target = [];
  var min_sum = 0;
  for (let i = 0; i < start.length; i++) {
    var time_start = start[i].start_time;
    var time_stop = start[i].stop_time;

    // var time_str = time.getTime();
    // var start_str = time_start.getTime();

    if (i > 0) {
      var time_start_diff = start[i - 1].start_time;
      var time_stop_diff = start[i - 1].stop_time;
      var diff_diff = moment
        .utc(
          moment(time_stop_diff, "HH:mm:ss").diff(
            moment(time_start_diff, "HH:mm:ss")
          )
        )
        .format("HH:mm:ss");
      var b = diff_diff.split(":"); // split it at the colons

      // Hours are worth 60 minutes.

      minutes_diff = minutes_diff + +b[0] * 60 + +b[1];

    }

    if (time_start < time && time_stop > time) {
      var diff = moment
        .utc(moment(time, "HH:mm:ss").diff(moment(time_start, "HH:mm:ss")))
        .format("HH:mm:ss");
      var a = diff.split(":");

      // Hours are worth 60 minutes.

      var minutes = +a[0] * 60 + +a[1];

      if (i > 0) {
        min_sum = minutes + minutes_diff;
      } else {
        min_sum = minutes;
      }

      //var minutes = (+a[0]) * 60 + (+a[1]);

      var time_diff = Math.floor(min_sum * cal_tar_work);
    }
  }
  send_target.push([
    time_diff,
    mc_mc_at.value,
    model.value,
    m_c.value,
    index_con[0],
  ]);

  const onChangetime = (time) => {
    setValue(time);
  };
  const options = [
    { value: "D", label: "D" },
    { value: "C", label: "C" },
  ];
  const format = "HH:mm";

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [term, setTerm] = useState(false);
  //const [selectedOption, setSelectedOption] = useState(null);
  // var technologyList = [];
  // var prod = [];

  const { client } = useMqttState();
  const { message } = useSubscription([
    "/prod_group",
    "/prod_name",
    "/room",
    "/line_no",
    "/mc",
    "/time_table",
    "/start_stop_time",
    "/target",
    "/working_time",
    "/mc_at",
    "/mc_index",
    "/index_config",
    "/index_his",
  ]);

  // const { product } = useSubscription([
  //     '/prod_name',

  // ]);

  // const { room } = useSubscription([
  //     '/room',

  // ]);

  const [input_time, setInput_time] = useState({
    name_time: "",
  });

  const [input, setInput] = useState({
    count: "",
    shift: "",
    select_prod: "",
    target: "",
  });
  // const handleChange = e => {
  //     setShift(e.target)
  // }

  //const [myArrays, setMyarrays] = React.useState('Lens Shutter');
  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    const value = target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleChange_time = (e) => {
    const { target } = e;
    const { name } = target;
    const value = target.value;
    setInput_time({
      ...input_time,
      [name]: value,
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      input: input,
      prod: prod,
      shift: shift,
      room: room,
      line: line,
      m_c: m_c,
      model: model,
      table_time: table_time,
      mc_index: mc_index,
      index_con: index_con[0].index + 1,
    };

    const json = JSON.stringify(data);
    console.clear();
    client.publish("/dash", JSON.stringify(json));
  }

  function onSubmit_time(time) {
    time.preventDefault();

    const data_time = {
      input_time: input_time,
      t_time1: t_time1,
      t_time2: t_time2,
      t_time3: t_time3,
      t_time4: t_time4,
      t_time5: t_time5,
      t_time6: t_time6,
      t_time7: t_time7,
      t_time8: t_time8,
      t_time9: t_time9,
      t_time10: t_time10,
      t_time11: t_time11,
      t_time12: t_time12,

      t_time13: t_time13,
      t_time14: t_time14,
      t_time15: t_time15,
      t_time16: t_time16,
      t_time17: t_time17,
      t_time18: t_time18,
      t_time19: t_time19,
      t_time20: t_time20,
      t_time21: t_time21,
      t_time22: t_time22,
      t_time23: t_time23,
      t_time24: t_time24,

      t_time25: t_time25,
      t_time26: t_time26,
      t_time27: t_time27,
      t_time28: t_time28,
      t_time29: t_time29,
      t_time30: t_time30,
      t_time31: t_time31,
      t_time32: t_time32,
      t_time33: t_time33,
      t_time34: t_time34,
      t_time35: t_time35,

      t_time36: t_time36,
      t_time37: t_time37,
      t_time38: t_time38,
      t_time39: t_time39,
      t_time40: t_time40,
      t_time41: t_time41,
      t_time42: t_time42,
      t_time43: t_time43,
      t_time44: t_time44,
      t_time45: t_time45,
      t_time46: t_time46,
      t_time47: t_time47,
      t_time48: t_time48,
    };

    const time_time = [
      { time: t_time1 },
      { time: t_time2 },
      { time: t_time3 },
      { time: t_time4 },
      { time: t_time5 },
      { time: t_time6 },
      { time: t_time7 },
      { time: t_time8 },
      { time: t_time9 },
      { time: t_time10 },
      { time: t_time11 },
      { time: t_time12 },

      { time: t_time13 },
      { time: t_time14 },
      { time: t_time15 },
      { time: t_time16 },
      { time: t_time17 },
      { time: t_time18 },
      { time: t_time19 },
      { time: t_time20 },
      { time: t_time21 },
      { time: t_time22 },
      { time: t_time23 },
      { time: t_time24 },

      { time: t_time25 },
      { time: t_time26 },
      { time: t_time27 },
      { time: t_time28 },
      { time: t_time29 },
      { time: t_time30 },
      { time: t_time31 },
      { time: t_time32 },
      { time: t_time33 },
      { time: t_time34 },
      { time: t_time35 },

      { time: t_time36 },
      { time: t_time37 },
      { time: t_time38 },
      { time: t_time39 },
      { time: t_time40 },
      { time: t_time41 },
      { time: t_time42 },
      { time: t_time43 },
      { time: t_time44 },
      { time: t_time45 },
      { time: t_time46 },
      { time: t_time47 },
      { time: t_time48 },
    ];

    Object.filter = (obj, predicate) =>
      Object.fromEntries(Object.entries(obj).filter(predicate));

    const json_time = JSON.stringify(data_time);
    console.clear();
    var filtered = Object.filter(data_time, ([name, time]) => time != "");
    var filtered_time = Object.filter(time_time, ([name, time]) => time != "");

    //แยกarray time before push to array again
    let result = [];
    for (let i = 0; i < time_time.length; i++) {
      if (time_time[i].time != "") {
        if (result[i] < "19.45") {
          const s = "D";
        } else {
          const s = "C";
        }
        result.push(time_time[i]);
      }
    }
    let result_time = [];
    var cal = result.length / 2;
    for (let i = 0; i < cal; i++) {
      result_time.push([input_time, result[i], result[i + cal]]);
    }

    client.publish("/config", JSON.stringify(result_time));
  }

  function onSubmit_time_update(time) {
    time.preventDefault();

    const data_time = {
      input_time: input_time,
      t_time1: t_time1,
      t_time2: t_time2,
      t_time3: t_time3,
      t_time4: t_time4,
      t_time5: t_time5,
      t_time6: t_time6,
      t_time7: t_time7,
      t_time8: t_time8,
      t_time9: t_time9,
      t_time10: t_time10,
      t_time11: t_time11,
      t_time12: t_time12,

      t_time13: t_time13,
      t_time14: t_time14,
      t_time15: t_time15,
      t_time16: t_time16,
      t_time17: t_time17,
      t_time18: t_time18,
      t_time19: t_time19,
      t_time20: t_time20,
      t_time21: t_time21,
      t_time22: t_time22,
      t_time23: t_time23,
      t_time24: t_time24,

      t_time25: t_time25,
      t_time26: t_time26,
      t_time27: t_time27,
      t_time28: t_time28,
      t_time29: t_time29,
      t_time30: t_time30,
      t_time31: t_time31,
      t_time32: t_time32,
      t_time33: t_time33,
      t_time34: t_time34,
      t_time35: t_time35,

      t_time36: t_time36,
      t_time37: t_time37,
      t_time38: t_time38,
      t_time39: t_time39,
      t_time40: t_time40,
      t_time41: t_time41,
      t_time42: t_time42,
      t_time43: t_time43,
      t_time44: t_time44,
      t_time45: t_time45,
      t_time46: t_time46,
      t_time47: t_time47,
      t_time48: t_time48,
    };

    const time_time = [
      { time: t_time1 },
      { time: t_time2 },
      { time: t_time3 },
      { time: t_time4 },
      { time: t_time5 },
      { time: t_time6 },
      { time: t_time7 },
      { time: t_time8 },
      { time: t_time9 },
      { time: t_time10 },
      { time: t_time11 },
      { time: t_time12 },

      { time: t_time13 },
      { time: t_time14 },
      { time: t_time15 },
      { time: t_time16 },
      { time: t_time17 },
      { time: t_time18 },
      { time: t_time19 },
      { time: t_time20 },
      { time: t_time21 },
      { time: t_time22 },
      { time: t_time23 },
      { time: t_time24 },

      { time: t_time25 },
      { time: t_time26 },
      { time: t_time27 },
      { time: t_time28 },
      { time: t_time29 },
      { time: t_time30 },
      { time: t_time31 },
      { time: t_time32 },
      { time: t_time33 },
      { time: t_time34 },
      { time: t_time35 },

      { time: t_time36 },
      { time: t_time37 },
      { time: t_time38 },
      { time: t_time39 },
      { time: t_time40 },
      { time: t_time41 },
      { time: t_time42 },
      { time: t_time43 },
      { time: t_time44 },
      { time: t_time45 },
      { time: t_time46 },
      { time: t_time47 },
      { time: t_time48 },
    ];

    Object.filter = (obj, predicate) =>
      Object.fromEntries(Object.entries(obj).filter(predicate));

    const json_time = JSON.stringify(data_time);
    console.clear();
    var filtered = Object.filter(data_time, ([name, time]) => time != "");
    var filtered_time = Object.filter(time_time, ([name, time]) => time != "");

    //แยกarray time before push to array again
    let result = [];
    for (let i = 0; i < time_time.length; i++) {
      if (time_time[i].time != "") {
        if (result[i] < "19.45") {
          const s = "D";
        } else {
          const s = "C";
        }
        result.push(time_time[i]);
      }
    }
    let result_time = [];
    var cal = result.length / 2;
    for (let i = 0; i < cal; i++) {
      result_time.push([input_time, result[i], result[i + cal]]);
    }
    client.publish("/config2", JSON.stringify(result_time));
  }

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      //setSeconds(seconds => seconds + 1);
      if (time_diff != undefined) {
        client.publish("/in_target", JSON.stringify(send_target));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //         localStorage.setItem( 'afavoriteflavor', 'vanilla' ); // set item
  // // localStorage.removeItem( 'favoriteflavor'); // remove item
  useEffect(() => {
    if (message !== undefined) {
      switch (message.topic) {
        case "/prod_group":
          setMyArray(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/prod_name":
          setProd_name(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/room":
          setRoom(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/line_no":
          setLine_no(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/mc":
          setMc(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/time_table":
          setTime_table(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/mc_index":
          setMc_mc_at(JSON.parse(message.message));
      }
      if (mc_mc_at.value == mc_index.value) {
        switch (message.topic) {
          case "/start_stop_time":
            setStart(JSON.parse(message.message));
            localStorage.setItem("start_stop", JSON.stringify(start));
            start_t_time = start;
        }
      }
      switch (message.topic) {
        case "/target":
          setTarget(JSON.parse(message.message));
          localStorage.setItem("target_va", JSON.stringify(target_va));
      }
      switch (message.topic) {
        case "/working_time":
          setWork_time(JSON.parse(message.message));
          localStorage.setItem("work_time", JSON.stringify(work_time));
      }
      switch (message.topic) {
        case "/mc_at":
          setMc_id(JSON.parse(message.message));
      }
      switch (message.topic) {
        case "/index_config":
          setIndex_con(JSON.parse(message.message));
      }
    }
  }, [message]);

  return (
    <div>
      <div>
        <div className="LabelInfo">
          <h5>Input configuration</h5>
        </div>
        <div className="AGVdata">
          <div className="AGVControlInfo">
            <div className="AGVControl">
              <div className="panelControl">
                <div className="Panelbutton">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label for="exampleInputPassword1" className="label_name">
                        M/c No.
                      </label>
                      <Select
                        className="select"
                        placeholder="Mc no."
                        onChange={(e) => {
                          setMc_index(e);
                        }}
                        name="mc_id"
                        type="select"
                        options={mc_id}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Room
                      </label>
                      <Select
                        className="select"
                        placeholder="Room"
                        onChange={(e) => {
                          setRoom_room(e);
                        }}
                        name="room"
                        type="select"
                        options={room_list}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Group
                      </label>
                      <Select
                        className="select"
                        name="select_prod"
                        placeholder="Product"
                        onChange={(e) => {
                          setProd(e);
                        }}
                        type="select"
                        options={myArray}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Model
                      </label>
                      <Select
                        className="select"
                        placeholder="Model"
                        onChange={(e) => {
                          setModel(e);
                        }}
                        name="prod_name"
                        type="select"
                        options={prod_name}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Shift
                      </label>
                      <Select
                        className="select"
                        placeholder="Shift"
                        onChange={(e) => {
                          setShift(e);
                        }}
                        name="shift"
                        type="select"
                        options={options}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Time table
                      </label>
                      <Select
                        className="select"
                        placeholder="Select "
                        onChange={(e) => {
                          setTable_time(e);
                        }}
                        name="time_tab"
                        type="select"
                        options={time_table}
                      />

                      <Button
                        variant="secondary"
                        className="ref"
                        onClick={() => setShowText(!showText)}
                      >
                        Ref
                      </Button>
                      {/* <button onClick={() => setShowText(!showText)}>Toggle Text</button> */}
                      {showText && (
                        <div>
                          <form>
                            <div>
                              <label
                                for="exampleInputPassword1"
                                className="label_name"
                              >
                                Name :
                              </label>
                              <input
                                type="name_time"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder="name"
                                onChange={handleChange_time}
                                name="name_time"
                              />
                              <label className="day">Day</label>
                              <table class="table-name">
                                <td>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time1(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time2(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time3(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time4(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time5(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time6(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time7(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time8(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time9(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time10(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time11(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time12(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time25(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time26(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time27(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time28(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time29(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time30(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time31(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time32(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time33(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time34(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time35(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time36(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                </td>
                              </table>

                              <label className="day">Night</label>
                              <table class="table-name">
                                <td>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time13(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time14(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time15(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time16(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time17(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time18(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time19(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time20(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time21(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time22(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time23(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time24(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time37(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time38(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time39(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time40(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time41(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time42(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time43(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time44(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time45(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time46(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time47(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                  <div>
                                    <TimePicker
                                      class="select-time"
                                      format={format}
                                      onChange={(time, timeString) => {
                                        sett_time48(timeString);
                                      }}
                                      size="small"
                                    />
                                  </div>
                                </td>
                              </table>
                            </div>

                            <div></div>
                            <div></div>
                            <div></div>

                            <div className="select-time">
                              <Button
                                variant="outline-info"
                                type="button"
                                onClick={onSubmit_time}
                              >
                                ADD
                              </Button>{" "}
                              <Button
                                variant="outline-info"
                                type="button"
                                onClick={onSubmit_time_update}
                              >
                                Edit/Update
                              </Button>
                            </div>
                          </form>
                        </div>
                      )}

                      <label for="exampleInputPassword1" className="label_name">
                        M/C No.
                      </label>
                      <Select
                        className="select"
                        placeholder="M/C"
                        onChange={(e) => {
                          setM_c(e);
                        }}
                        name="mc"
                        type="select"
                        options={mc}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Line_no
                      </label>
                      <Select
                        className="select"
                        placeholder="Ex.A0,A1"
                        onChange={(e) => {
                          setLine(e);
                        }}
                        name="line_no"
                        type="select"
                        options={line_no}
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Resp_person
                      </label>
                      <input
                        type="resp_person"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" Resp_person"
                        onChange={handleChange}
                        name="resp_person"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Target
                      </label>
                      <input
                        type="target"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" Target"
                        onChange={handleChange}
                        name="target"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Start count
                      </label>
                      <input
                        type="st_count"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder="start count"
                        onChange={handleChange}
                        name="st_count"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Counter
                      </label>
                      <input
                        type="count"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" Count"
                        onChange={handleChange}
                        name="count"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Take time
                      </label>
                      <input
                        type="take_time"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" Take_time"
                        onChange={handleChange}
                        name="take_time"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Working time
                      </label>
                      <input
                        type="working_time"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" Working_time"
                        onChange={handleChange}
                        name="working_time"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Operator Q'ty
                      </label>
                      <input
                        type="operator"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" 1"
                        onChange={handleChange}
                        name="operator"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        STD Time(Min)
                      </label>
                      <input
                        type="std_time"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" 00"
                        onChange={handleChange}
                        name="std_time"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Defective limit
                      </label>
                      <input
                        type="defective"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" 1"
                        onChange={handleChange}
                        name="defective"
                      />

                      <label for="exampleInputPassword1" className="label_name">
                        Take Time Old
                      </label>
                      <input
                        type="std_old"
                        className="form-control"
                        class="input-control"
                        id="exampleInputPassword1"
                        placeholder=" 00"
                        onChange={handleChange}
                        name="std_old"
                      />
                    </div>
                    <div className="form-check mb-0.5"></div>
                    <Button
                      type="submit"
                      variant="success"
                      className="btn btn-primary"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<DataAGV />, rootElement)
// export default dataAGV;
