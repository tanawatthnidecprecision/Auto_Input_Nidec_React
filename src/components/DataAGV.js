// import logoAGV from '../../src/icon/AGVcrop.png';
// import logoAGVhook from '../../src/icon/AGVhook.png';
// import logoBattery from '../../src/icon/charger.png';
// import logoDoor from '../../src/icon/door.png';
// import iconWiFi from '../../src/icon/iconWiFi.png';
// import iconPosition from '../../src/icon/iconPosition.png';
// import iconBattery from '../../src/icon/iconBattery.png';
// import iconCommand from '../../src/icon/iconCommand.png';
import 'antd/dist/antd.min.css';
import Button from 'react-bootstrap/Button';
import manual from './manual.png';
// import Button from '@mui/material/Button';
// import React, { useState } from 'react'
// import ReactHookSelect from 'react-hook-select'
// import SelectSearch, { fuzzySearch } from "react-select-search";
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
// import Select from 'react-select'
// import { useMqttState } from 'mqtt-react-hooks';
import { Connector, useMqttState, useSubscription } from 'mqtt-react-hooks';
// import React, { Component } from 'react'
import Select from 'react-select';
// import { Placeholder } from 'react-bootstrap';
// import TimePicker from 'react-time-picker';
import { TimePicker } from 'antd';
// import { styled } from '@mui/material/styles';
// import { Card, Stack, Link, Container, Typography } from '@mui/material';
import moment from 'moment';


 
import 'react-datepicker/dist/react-datepicker.css';


  


var int = 0;
export default function DataAGV() {
    const [myArray, setMyArray] = useState([]);
    const [prod_name, setProd_name] = useState([]);
    const [prod_name1, setProd_name1] = useState([]);
    const [model, setModel] = useState([]);
    const [room_list, setRoom] = useState([]);
    const [room, setRoom_room] = useState([]);
    const [shift, setShift] = useState('');
    const [mc_id, setMc_id] = useState('');
    const [section_code, setSectionCode] = useState('');
    const [mc_index, setMc_index] = useState('');
    const [prod, setProd] = useState('');
    const [line_no, setLine_no] = useState('');
    const [line, setLine] = useState('');
    const [mc, setMc] = useState('');
    const [m_c, setM_c] = useState('');
    const [time_table, setTime_table] = useState([]);
    const [time_start_fil, setTime_start] = useState([]);
    const [time_stop_fil, setTime_stop] = useState([]);
    const [table_time, setTable_time] = useState('');
    const [sTime, setTime] = useState('');

    const [select_time, setSelect_time] = useState('');
    //const [t_time2, sett_time2] = useState('');

    var start_t_time = 0;

    const locale = 'fr';
    const [today, setDate] = React.useState(new Date());
    
    const [searches, setSearches] = useState([])
    const [start, setStart] = useState([])
    const [t_time1, sett_time1] = useState('');
    const [t_time2, sett_time2] = useState('');
    const [t_time3, sett_time3] = useState('');
    const [t_time4, sett_time4] = useState('');
    const [t_time5, sett_time5] = useState('');
    const [t_time6, sett_time6] = useState('');
    const [t_time7, sett_time7] = useState('');
    const [t_time8, sett_time8] = useState('');
    const [t_time9, sett_time9] = useState('');
    const [t_time10, sett_time10] = useState('');
    const [t_time11, sett_time11] = useState('');
    const [t_time12, sett_time12] = useState('');

    const [t_time13, sett_time13] = useState('');
    const [t_time14, sett_time14] = useState('');
    const [t_time15, sett_time15] = useState('');
    const [t_time16, sett_time16] = useState('');
    const [t_time17, sett_time17] = useState('');
    const [t_time18, sett_time18] = useState('');
    const [t_time19, sett_time19] = useState('');
    const [t_time20, sett_time20] = useState('');
    const [t_time21, sett_time21] = useState('');
    const [t_time22, sett_time22] = useState('');
    const [t_time23, sett_time23] = useState('');
    const [t_time24, sett_time24] = useState('');

    const [t_time25, sett_time25] = useState('');
    const [t_time26, sett_time26] = useState('');
    const [t_time27, sett_time27] = useState('');
    const [t_time28, sett_time28] = useState('');
    const [t_time29, sett_time29] = useState('');
    const [t_time30, sett_time30] = useState('');
    const [t_time31, sett_time31] = useState('');
    const [t_time32, sett_time32] = useState('');
    const [t_time33, sett_time33] = useState('');
    const [t_time34, sett_time34] = useState('');
    const [t_time35, sett_time35] = useState('');
    const [t_time36, sett_time36] = useState('');

    const [t_time37, sett_time37] = useState('');
    const [t_time38, sett_time38] = useState('');
    const [t_time39, sett_time39] = useState('');
    const [t_time40, sett_time40] = useState('');
    const [t_time41, sett_time41] = useState('');
    const [t_time42, sett_time42] = useState('');
    const [t_time43, sett_time43] = useState('');
    const [t_time44, sett_time44] = useState('');
    const [t_time45, sett_time45] = useState('');
    const [t_time46, sett_time46] = useState('');
    const [t_time47, sett_time47] = useState('');
    const [t_time48, sett_time48] = useState('');

    const [target_va, setTarget] = useState('');
    const [mc_mc_at, setMc_mc_at] = useState('');
    const [work_time, setWork_time] = useState('');

    const [index_con, setIndex_con] = useState('');
    const [id_config, setId_config] = useState('');

    const [index_his, setIndex_his] = useState('');
    const [id_history, setId_history] = useState('');

    // const [selectedOption, setSelectedOption] = useState(null);
    
    const [visible, setVisible] = React.useState(false);
    const [visible_select, setVisible_select] = React.useState(false);
    const [showText, setShowText] = useState(false);
    const [time_value, setValue] = useState(null);
    const [value, onChange] = useState('10:00');

    //Selected time
    const [value_st1, setValueSt1] = useState('');
    const [value_st2, setValueSt2] = useState('');
    const [value_st3, setValueSt3] = useState('');
    const [value_st4, setValueSt4] = useState('');
    const [value_st5, setValueSt5] = useState('');
    const [value_st6, setValueSt6] = useState('');
    const [value_st7, setValueSt7] = useState('');
    const [value_st8, setValueSt8] = useState('');
    const [value_st9, setValueSt9] = useState('');
    const [value_st10, setValueSt10] = useState('');
    const [value_st11, setValueSt11] = useState('');
    const [value_st12, setValueSt12] = useState('');
    const [value_st13, setValueSt13] = useState('');
    const [value_st14, setValueSt14] = useState('');
    const [value_st15, setValueSt15] = useState('');
    const [value_st16, setValueSt16] = useState('');
    const [value_st17, setValueSt17] = useState('');
    const [value_st18, setValueSt18] = useState('');
    const [value_st19, setValueSt19] = useState('');
    const [value_st20, setValueSt20] = useState('');
    const [value_st21, setValueSt21] = useState('');
    const [value_st22, setValueSt22] = useState('');
    const [value_st23, setValueSt23] = useState('');
    const [value_st24, setValueSt24] = useState('');
    const [value_st25, setValueSt25] = useState('');
    const [value_st26, setValueSt26] = useState('');
    const [value_st27, setValueSt27] = useState('');
    const [value_st28, setValueSt28] = useState('');
    const [value_st29, setValueSt29] = useState('');
    const [value_st30, setValueSt30] = useState('');
    const [value_st31, setValueSt31] = useState('');
    const [value_st32, setValueSt32] = useState('');
    const [value_st33, setValueSt33] = useState('');
    const [value_st34, setValueSt34] = useState('');
    const [value_st35, setValueSt35] = useState('');
    const [value_st36, setValueSt36] = useState('');
    const [value_st37, setValueSt37] = useState('');
    const [value_st38, setValueSt38] = useState('');
    const [value_st39, setValueSt39] = useState('');
    const [value_st40, setValueSt40] = useState('');
    const [value_st41, setValueSt41] = useState('');
    const [value_st42, setValueSt42] = useState('');
    const [value_st43, setValueSt43] = useState('');
    const [value_st44, setValueSt44] = useState('');
    const [value_st45, setValueSt45] = useState('');
    const [value_st46, setValueSt46] = useState('');
    const [value_st47, setValueSt47] = useState('');
    const [value_st48, setValueSt48] = useState('');
    
    // const [keep, setKeep] = React.useState(
    //     localStorage.getItem('myValueInLocalStorage') || ''
    //   );

    // React.useEffect(() => {
    //     const timer = setInterval(() => { // Creates an interval which will update the current data every minute
    //     // This will trigger a rerender every component that uses the useDate hook.
    //     setDate(new Date());
    //   }, 60 * 1000);
    //   return () => {
    //     clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    //   }
    // }, []);
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric' ,second: 'numeric' });
    // console.log('Now: ',time);
    //console.log(start);
    

    // React.useEffect(() => {
    //     localStorage.setItem('myValueInLocalStorage', keep);
    //   }, [keep]);
    // var targetva = JSON.parse(localStorage.getItem('target_va'));
    // var worktime = JSON.parse(localStorage.getItem('work_time'));
    //   var data_time = JSON.parse(localStorage.getItem('start_stop'));
    //   console.log('target',targetva);
    //   console.log('working_time',worktime); 
    //   console.log('Start_time',data_time);

      var cal_tar_work = Math.floor(target_va/ work_time);
      var min_diff_sum = '';
      var minutes_diff=0;
      let send_target = [];
      var min_sum = 0;
        for (let i = 0; i < start.length; i++) {
            var time_start = start[i].start_time;
            var time_stop = start[i].stop_time;

            // var time_str = time.getTime();
            // var start_str = time_start.getTime();

            if (i > 0) {
                var time_start_diff = start[i-1].start_time;
                var time_stop_diff = start[i-1].stop_time;
                var diff_diff = moment.utc(moment(time_stop_diff,"HH:mm:ss").diff(moment(time_start_diff,"HH:mm:ss"))).format("HH:mm:ss");
                var b = diff_diff.split(':'); // split it at the colons

                // Hours are worth 60 minutes.
                
                minutes_diff = (minutes_diff+(+b[0]) * 60 + (+b[1]));
    
                //console.log(minutes_diff);
            }

            if ((time_start<time)&&(time_stop>time)) {
                var diff = moment.utc(moment(time,"HH:mm:ss").diff(moment(time_start,"HH:mm:ss"))).format("HH:mm:ss");
                console.log('cal',diff);
                var a = diff.split(':'); // split it at the colons

                // Hours are worth 60 minutes.

                var minutes = (+a[0]) * 60 + (+a[1]);

                if (i > 0) {
                    min_sum=minutes+minutes_diff;
                }
                else{
                    min_sum=minutes;
                }

                //var minutes = (+a[0]) * 60 + (+a[1]);
                
    
                // console.log('Minutes',minutes);
                // console.log('Minutes sum',min_sum);
                var time_diff = Math.floor(min_sum* cal_tar_work);
                // console.log('Target is: ',time_diff);
            }
            // console.log('Minutes sum',min_sum);
            // console.log('cal_tar',cal_tar_work);
            // console.log('start',time_start);
            // console.log('stop',time_stop);
            
            
        }
        // var diff_diff = moment.utc(moment('01:30:00',"HH:mm:ss").diff(moment('23:30:00',"HH:mm:ss"))).format("HH:mm:ss");
        // var b = diff_diff.split(':'); // split it at the colons

        // // Hours are worth 60 minutes.
        
        // minutes_diff = (minutes_diff+(+b[0]) * 60 + (+b[1]));
        // console.log('Diff midm=night : ',minutes_diff);
        send_target.push([time_diff,mc_mc_at.value,model.value,m_c.value,index_con[0]]);
        //console.log('Target send',send_target);
        

    const onChangetime = time => {
        setValue(time);
        //console.log(time);
      };
    const options = [
        { value: 'D', label: 'D' },
        { value: 'C', label: 'C' },
      ];
      const format = 'HH:mm';

        // const [email, setEmail] = useState('');
        // const [password, setPassword] = useState('');
        // const [term, setTerm] = useState(false);
        //const [selectedOption, setSelectedOption] = useState(null);
        // var technologyList = [];
        // var prod = [];
        
        const { client } = useMqttState();
        const { message } = useSubscription([
            '/prod_group',
            '/prod_name',
            '/room',
            '/line_no',
            '/mc',
            '/time_table',
            '/start_stop_time',
            '/target',
            '/working_time',
            '/mc_at',
            '/mc_index',
            '/index_config',
            '/index_his',
            '/select_time_table',
            '/prod_code',
            '/mc_id_input',
          ]);

        // const { product } = useSubscription([
        //     '/prod_name',
            
        // ]);

        // const { room } = useSubscription([
        //     '/room',
            
        // ]);
        // client.publish("/send", 0);
        const [input_time, setInput_time] = useState({
            name_time: '',
            
          })

        const [input, setInput] = useState({
          count: '',
          shift: '',
          select_prod: '',
          target:''
        })
        // const handleChange = e => {
        //     setShift(e.target)
        // }

        //const [myArrays, setMyarrays] = React.useState('Lens Shutter');
        const handleChange = e => {
          const { target } = e;
          const { name } = target;
          const value = target.value;
          setInput({
            ...input,
            [name]: value
          })
        }

        const handleChange_time = e => {
            const { target } = e;
            const { name } = target;
            const value = target.value;
            setTable_time(input_time);
            setInput_time({
              ...input_time,
              [name]: value
            })

        }

        // function onChange(time, timeString) {
        //     console.log(time, timeString);
        // }

        // function onChange(time) {
        //     setTime({
        //       startTime: time
        //     })
        //     console.log(sTime);
        //   }
        function linkpdf() {
            return(
            window.open("http://intranets.nidec-copal.co.th/SystemManagement/auto_input_counter_manual.pdf","Auto input manual","resizable,height=800,width=900")
            );
        }
        function onSubmit(e) {
          e.preventDefault()
          console.log('submit value', input)
          const data = {
            input: input,
            prod : prod,
            shift : shift,
            room : room,
            line : line ,
            m_c : m_c,
            model : model,
            table_time : table_time,
            mc_index:mc_index,
            // index_con:0,

            index_con:((index_con[0].index)+1),

        };

        
        const json = JSON.stringify(data);
        console.clear();
        console.log('JSON:',json);
        console.log('data mc_index:',data.mc_index.value);

        if (data.mc_index.label === 1) {
            client.publish('/AutoInput/config_react/1097BD339910', JSON.stringify(json));
        }
        if (data.mc_index.label === 2) {
            client.publish('/AutoInput/config_react/1097BD31EB60', JSON.stringify(json));
        }
        if (data.mc_index.label === 3) {
            client.publish('/AutoInput/config_react/1097BD31E1B4', JSON.stringify(json));
        }
        if (data.mc_index.label === 4) {
            client.publish('/AutoInput/config_react/1097BD31FB90', JSON.stringify(json));
        }
        if (data.mc_index.label === 5) {
            client.publish('/AutoInput/config_react/1097BD337458', JSON.stringify(json));
        }
        if (data.mc_index.label === 6) {
            client.publish('/AutoInput/config_react/1097BD320398', JSON.stringify(json));
        }
        if (data.mc_index.label === 7) {
            client.publish('/AutoInput/config_react/1097BD3205E4', JSON.stringify(json));
        }
        if (data.mc_index.label === 8) {
            client.publish('/AutoInput/config_react/1097BD31EB3C', JSON.stringify(json));
        }
        if (data.mc_index.label === 9) {
            client.publish('/AutoInput/config_react/1097BD334294', JSON.stringify(json));
        }
        if (data.mc_index.label === 10) {
            client.publish('/AutoInput/config_react/1097BD334B08', JSON.stringify(json));
        }
        if (data.mc_index.label === 11) {
            client.publish('/AutoInput/config_react/1097BD31F4F0', JSON.stringify(json));
        }
        if (data.mc_index.label === 12) {
            client.publish('/AutoInput/config_react/1097BD31DB78', JSON.stringify(json));
        }
        if (data.mc_index.label === 13) {
            client.publish('/AutoInput/config_react/1097BD3213E8', JSON.stringify(json));
        }
        if (data.mc_index.label === 14) {
            client.publish('/AutoInput/config_react/1097BD31C668', JSON.stringify(json));
        }
        if (data.mc_index.label === 15) {
            client.publish('/AutoInput/config_react/1097BD31BF34', JSON.stringify(json));
        }
        if (data.mc_index.label === 16) {
            client.publish('/AutoInput/config_react/1097BD345C0C', JSON.stringify(json));
        }
        if (data.mc_index.label === 17) {
            client.publish('/AutoInput/config_react/1097BD32DA3C', JSON.stringify(json));
        }
        if (data.mc_index.label === 18) {
            client.publish('/AutoInput/config_react/1097BD3341B4', JSON.stringify(json));
        }
        if (data.mc_index.label === 19) {
            client.publish('/AutoInput/config_react/1097BD335834', JSON.stringify(json));
        }
        if (data.mc_index.label === 20) {
            client.publish('/AutoInput/config_react/1097BD333DA4', JSON.stringify(json));
        }
        if (data.mc_index.label === 21) {
            client.publish('/AutoInput/config_react/1097BD31E0A8', JSON.stringify(json));
        }
        if (data.mc_index.label === 22) {
            client.publish('/AutoInput/config_react/1097BD334C50', JSON.stringify(json));
        }
        if (data.mc_index.label === 23) {
            client.publish('/AutoInput/config_react/1097BD31CF48', JSON.stringify(json));
        }
        if (data.mc_index.label === 24) {
            client.publish('/AutoInput/config_react/1097BD336548', JSON.stringify(json));
        }
        if (data.mc_index.label === 25) {
            client.publish('/AutoInput/config_react/1097BD31D7A4', JSON.stringify(json));
        }
        if (data.mc_index.label === 26) {
            client.publish('/AutoInput/config_react/1097BD344550', JSON.stringify(json));
        }
        if (data.mc_index.label === 27) {
            client.publish('/AutoInput/config_react/1097BD3301F4', JSON.stringify(json));
        }
        if (data.mc_index.label === 28) {
            client.publish('/AutoInput/config_react/1097BD31CD1C', JSON.stringify(json));
        }
        if (data.mc_index.label === 29) {
            client.publish('/AutoInput/config_react/1097BD33639C', JSON.stringify(json));
        }
        if (data.mc_index.label === 30) {
            client.publish('/AutoInput/config_react/1097BD335C2C', JSON.stringify(json));
        }
        if (data.mc_index.label === 31) {
            client.publish('/AutoInput/config_react/1097BD31CEA0', JSON.stringify(json));
        }
        if (data.mc_index.label === 32) {
            client.publish('/AutoInput/config_react/1097BD32EDF4', JSON.stringify(json));
        }
        if (data.mc_index.label === 33) {
            client.publish('/AutoInput/config_react/1097BD334BA4', JSON.stringify(json));
        }
        if (data.mc_index.label === 34) {
            client.publish('/AutoInput/config_react/1097BD3450F4', JSON.stringify(json));
        }
        if (data.mc_index.label === 35) {
            client.publish('/AutoInput/config_react/1097BD323808', JSON.stringify(json));
        }
        if (data.mc_index.label === 36) {
            client.publish('/AutoInput/config_react/1097BD31C550', JSON.stringify(json));
        }
        if (data.mc_index.label === 37) {
            client.publish('/AutoInput/config_react/1097BD344930', JSON.stringify(json));
        }
        if (data.mc_index.label === 38) {
            client.publish('/AutoInput/config_react/1097BD31CEC4', JSON.stringify(json));
        }
        if (data.mc_index.label === 39) {
            client.publish('/AutoInput/config_react/1097BD323618', JSON.stringify(json));
        }
        if (data.mc_index.label === 40) {
            client.publish('/AutoInput/config_react/1097BD3342D8', JSON.stringify(json));
        }
        if (data.mc_index.label === 41) {
            client.publish('/AutoInput/config_react/1097BD343D40', JSON.stringify(json));
        }
        if (data.mc_index.label === 42) {
            client.publish('/AutoInput/config_react/1097BD321D30', JSON.stringify(json));
        }
        if (data.mc_index.label === 43) {
            client.publish('/AutoInput/config_react/1097BD326848', JSON.stringify(json));
        }
        if (data.mc_index.label === 44) {
            client.publish('/AutoInput/config_react/1097BD333ED4', JSON.stringify(json));
        }
        if (data.mc_index.label === 45) {
            client.publish('/AutoInput/config_react/1097BD31F234', JSON.stringify(json));
        }
        if (data.mc_index.label === 46) {
            client.publish('/AutoInput/config_react/1097BD322810', JSON.stringify(json));
        }
        if (data.mc_index.label === 47) {
            client.publish('/AutoInput/config_react/1097BD31E154', JSON.stringify(json));
        }
        // client.publish('/AutoInput/config_react', JSON.stringify(json));

        }


        function onSubmit_time(time) {
            time.preventDefault()
            // console.log('submit value', input)

            const data_time = {
                input_time: input_time,
                t_time1:t_time1,
                t_time2:t_time2,
                t_time3:t_time3,
                t_time4:t_time4,
                t_time5:t_time5,
                t_time6:t_time6,
                t_time7:t_time7,
                t_time8:t_time8,
                t_time9:t_time9,
                t_time10:t_time10,
                t_time11:t_time11,
                t_time12:t_time12,
                
                t_time13:t_time13,
                t_time14:t_time14,
                t_time15:t_time15,
                t_time16:t_time16,
                t_time17:t_time17,
                t_time18:t_time18,
                t_time19:t_time19,
                t_time20:t_time20,
                t_time21:t_time21,
                t_time22:t_time22,
                t_time23:t_time23,
                t_time24:t_time24,

                t_time25:t_time25,
                t_time26:t_time26,
                t_time27:t_time27,
                t_time28:t_time28,
                t_time29:t_time29,
                t_time30:t_time30,
                t_time31:t_time31,
                t_time32:t_time32,
                t_time33:t_time33,
                t_time34:t_time34,
                t_time35:t_time35,

                t_time36:t_time36,
                t_time37:t_time37,
                t_time38:t_time38,
                t_time39:t_time39,
                t_time40:t_time40,
                t_time41:t_time41,
                t_time42:t_time42,
                t_time43:t_time43,
                t_time44:t_time44,
                t_time45:t_time45,
                t_time46:t_time46,
                t_time47:t_time47,
                t_time48:t_time48,
          };

          const time_time = [
            {time:t_time1},
            {time:t_time2},
            {time:t_time3},
            {time:t_time4},
            {time:t_time5},
            {time:t_time6},
            {time:t_time7},
            {time:t_time8},
            {time:t_time9},
            {time:t_time10},
            {time:t_time11},
            {time:t_time12},
            
            {time:t_time13},
            {time:t_time14},
            {time:t_time15},
            {time:t_time16},
            {time:t_time17},
            {time:t_time18},
            {time:t_time19},
            {time:t_time20},
            {time:t_time21},
            {time:t_time22},
            {time:t_time23},
            {time:t_time24},

            {time:t_time25},
            {time:t_time26},
            {time:t_time27},
            {time:t_time28},
            {time:t_time29},
            {time:t_time30},
            {time:t_time31},
            {time:t_time32},
            {time:t_time33},
            {time:t_time34},
            {time:t_time35},

            {time:t_time36},
            {time:t_time37},
            {time:t_time38},
            {time:t_time39},
            {time:t_time40},
            {time:t_time41},
            {time:t_time42},
            {time:t_time43},
            {time:t_time44},
            {time:t_time45},
            {time:t_time46},
            {time:t_time47},
            {time:t_time48},
          ];

          Object.filter = (obj, predicate) => 
          Object.fromEntries(Object.entries(obj).filter(predicate));

          const json_time = JSON.stringify(data_time);
            console.clear();
          console.log('JSON:',json_time);
          var filtered = Object.filter(data_time, ([name, time]) => time != ''); 
          var filtered_time = Object.filter(time_time, ([name, time]) => time != ''); 
          
            //แยกarray time before push to array again 
            let result = [];
            for (let i = 0; i < time_time.length; i++) {
            if (time_time[i].time != '') {
                if (result[i]<'19.45') {
                    const s='D';
                }
                else{
                    const s='C';
                }
                result.push(time_time[i])
            }}
            let result_time = [];
            var cal = result.length/2;
            for (let i = 0; i < cal; i++) {

                result_time.push([input_time,result[i],result[i+cal]]);
            }

            console.log('Filter:',filtered);
            console.log('Filter_time:',result);
            console.log('Filter_time:',result_time);
            client.publish('/config', JSON.stringify(result_time));
        }

        function onSubmit_time_update(time) {
            time.preventDefault()
            // console.log('submit value', input)

            const data_time = {
                input_time: input_time,
                t_time1:t_time1,
                t_time2:t_time2,
                t_time3:t_time3,
                t_time4:t_time4,
                t_time5:t_time5,
                t_time6:t_time6,
                t_time7:t_time7,
                t_time8:t_time8,
                t_time9:t_time9,
                t_time10:t_time10,
                t_time11:t_time11,
                t_time12:t_time12,
                
                t_time13:t_time13,
                t_time14:t_time14,
                t_time15:t_time15,
                t_time16:t_time16,
                t_time17:t_time17,
                t_time18:t_time18,
                t_time19:t_time19,
                t_time20:t_time20,
                t_time21:t_time21,
                t_time22:t_time22,
                t_time23:t_time23,
                t_time24:t_time24,

                t_time25:t_time25,
                t_time26:t_time26,
                t_time27:t_time27,
                t_time28:t_time28,
                t_time29:t_time29,
                t_time30:t_time30,
                t_time31:t_time31,
                t_time32:t_time32,
                t_time33:t_time33,
                t_time34:t_time34,
                t_time35:t_time35,

                t_time36:t_time36,
                t_time37:t_time37,
                t_time38:t_time38,
                t_time39:t_time39,
                t_time40:t_time40,
                t_time41:t_time41,
                t_time42:t_time42,
                t_time43:t_time43,
                t_time44:t_time44,
                t_time45:t_time45,
                t_time46:t_time46,
                t_time47:t_time47,
                t_time48:t_time48,
          };

          const time_time = [

            //Day_start_time
            {time:t_time1},
            {time:t_time2},
            {time:t_time3},
            {time:t_time4},
            {time:t_time5},
            {time:t_time6},
            {time:t_time7},
            {time:t_time8},
            {time:t_time9},
            {time:t_time10},
            {time:t_time11},
            {time:t_time12},
            
            //Night_start_time
            {time:t_time13},
            {time:t_time14},
            {time:t_time15},
            {time:t_time16},
            {time:t_time17},
            {time:t_time18},
            {time:t_time19},
            {time:t_time20},
            {time:t_time21},
            {time:t_time22},
            {time:t_time23},
            {time:t_time24},

            //Day_Stop_time
            {time:t_time25},
            {time:t_time26},
            {time:t_time27},
            {time:t_time28},
            {time:t_time29},
            {time:t_time30},
            {time:t_time31},
            {time:t_time32},
            {time:t_time33},
            {time:t_time34},
            {time:t_time35},

            //Night_stop_time
            {time:t_time36},
            {time:t_time37},
            {time:t_time38},
            {time:t_time39},
            {time:t_time40},
            {time:t_time41},
            {time:t_time42},
            {time:t_time43},
            {time:t_time44},
            {time:t_time45},
            {time:t_time46},
            {time:t_time47},
            {time:t_time48},
          ];

          Object.filter = (obj, predicate) => 
          Object.fromEntries(Object.entries(obj).filter(predicate));

          const json_time = JSON.stringify(data_time);
            console.clear();
          console.log('JSON:',json_time);
          var filtered = Object.filter(data_time, ([name, time]) => time != ''); 
          var filtered_time = Object.filter(time_time, ([name, time]) => time != ''); 
          
            //แยกarray time before push to array again 
            let result = [];
            for (let i = 0; i < time_time.length; i++) {
            if (time_time[i].time != '') {
                if (result[i]<'19.45') {
                    const s='D';
                }
                else{
                    const s='C';
                }
                result.push(time_time[i])
            }}
            let result_time = [];
            var cal = result.length/2;
            for (let i = 0; i < cal; i++) {

                result_time.push([input_time,result[i],result[i+cal]]);
            }
            console.log('Filter:',filtered);
            console.log('Filter_time:',result);
            console.log('Filter_time:',result_time);
            
            client.publish('/config2', JSON.stringify(result_time));
        }

        const [seconds, setSeconds] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
              //setSeconds(seconds => seconds + 1);
              if (time_diff != undefined) {
                client.publish('/in_target', JSON.stringify(send_target));
              }
              
              console.log('Send value :',send_target)
            }, 10000);
            return () => clearInterval(interval);
            
          }, []);

//         localStorage.setItem( 'afavoriteflavor', 'vanilla' ); // set item
// // localStorage.removeItem( 'favoriteflavor'); // remove item
let st_t= [];
let stp_t= [];
let mee= [];
useEffect(() => {
    // console.log(product);
    // console.log(room);
if (table_time !== undefined) {
    let st_t= [];
    let stp_t= [];
    let mee= [];
    if (table_time != '') {
        console.log('table_time :',table_time);
        Object.filter = (obj, predicate) => 
            Object.fromEntries(Object.entries(obj).filter(predicate));

      const json_select_time = JSON.stringify(select_time);
      //time_table = undefined;
     
      //var filtered = Object.filter(data_time, ([name, time]) => time != ''); 
      let st_t= [];
      let stp_t= [];
      let mee= [];
      
      for (let i = 0; i < select_time.length; i++) {
          if (table_time.value === select_time[i].period_code ) {
            // let st_t= [];
            // let stp_t= [];
              setTime_start(select_time[i].start_time);
              setTime_stop(select_time[i].stop_time);
              st_t.push(select_time[i].start_time);
              stp_t.push(select_time[i].stop_time);
              
          }

          
    }

    if (st_t.length === 24) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19(moment(st_t[18], "HH:mm", false));
        setValueSt20(moment(st_t[19], "HH:mm", false));
        setValueSt21(moment(st_t[20], "HH:mm", false));
        setValueSt22(moment(st_t[21], "HH:mm", false));
        setValueSt23(moment(st_t[22], "HH:mm", false));
        setValueSt24(moment(st_t[23], "HH:mm", false));

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43(moment(stp_t[18], "HH:mm", false));
        setValueSt44(moment(stp_t[19], "HH:mm", false));
        setValueSt45(moment(stp_t[20], "HH:mm", false));
        setValueSt46(moment(stp_t[21], "HH:mm", false));
        setValueSt47(moment(stp_t[22], "HH:mm", false));
        setValueSt48(moment(stp_t[23], "HH:mm", false));
    }
    if (st_t.length === 23) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19(moment(st_t[18], "HH:mm", false));
        setValueSt20(moment(st_t[19], "HH:mm", false));
        setValueSt21(moment(st_t[20], "HH:mm", false));
        setValueSt22(moment(st_t[21], "HH:mm", false));
        setValueSt23(moment(st_t[22], "HH:mm", false));
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43(moment(stp_t[18], "HH:mm", false));
        setValueSt44(moment(stp_t[19], "HH:mm", false));
        setValueSt45(moment(stp_t[20], "HH:mm", false));
        setValueSt46(moment(stp_t[21], "HH:mm", false));
        setValueSt47(moment(stp_t[22], "HH:mm", false));
        setValueSt48('');
    }
    if (st_t.length === 22) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19(moment(st_t[18], "HH:mm", false));
        setValueSt20(moment(st_t[19], "HH:mm", false));
        setValueSt21(moment(st_t[20], "HH:mm", false));
        setValueSt22(moment(st_t[21], "HH:mm", false));
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43(moment(stp_t[18], "HH:mm", false));
        setValueSt44(moment(stp_t[19], "HH:mm", false));
        setValueSt45(moment(stp_t[20], "HH:mm", false));
        setValueSt46(moment(stp_t[21], "HH:mm", false));
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 21) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19(moment(st_t[18], "HH:mm", false));
        setValueSt20(moment(st_t[19], "HH:mm", false));
        setValueSt21(moment(st_t[20], "HH:mm", false));
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43(moment(stp_t[18], "HH:mm", false));
        setValueSt44(moment(stp_t[19], "HH:mm", false));
        setValueSt45(moment(stp_t[20], "HH:mm", false));
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 20) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19(moment(st_t[18], "HH:mm", false));
        setValueSt20(moment(st_t[19], "HH:mm", false));
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43(moment(stp_t[18], "HH:mm", false));
        setValueSt44(moment(stp_t[19], "HH:mm", false));
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 19) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19(moment(st_t[18], "HH:mm", false));
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43(moment(stp_t[18], "HH:mm", false));
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 18) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18(moment(st_t[17], "HH:mm", false));
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42(moment(stp_t[17], "HH:mm", false));
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 17) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17(moment(st_t[16], "HH:mm", false));
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41(moment(stp_t[16], "HH:mm", false));
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 16) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16(moment(st_t[15], "HH:mm", false));
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40(moment(stp_t[15], "HH:mm", false));
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 15) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15(moment(st_t[14], "HH:mm", false));
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39(moment(stp_t[14], "HH:mm", false));
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 14) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14(moment(st_t[13], "HH:mm", false));
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38(moment(stp_t[13], "HH:mm", false));
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 13) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13(moment(st_t[12], "HH:mm", false));
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37(moment(stp_t[12], "HH:mm", false));
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 12) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12(moment(st_t[11], "HH:mm", false));
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36(moment(stp_t[11], "HH:mm", false));
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 11) {
        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11(moment(st_t[10], "HH:mm", false));
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35(moment(stp_t[10], "HH:mm", false));
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 10) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10(moment(st_t[9], "HH:mm", false));
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34(moment(stp_t[9], "HH:mm", false));
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 9) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9(moment(st_t[8], "HH:mm", false));
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33(moment(stp_t[8], "HH:mm", false));
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 8) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8(moment(st_t[7], "HH:mm", false));
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32(moment(stp_t[7], "HH:mm", false));
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 7) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7(moment(st_t[6], "HH:mm", false));
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31(moment(stp_t[6], "HH:mm", false));
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');
    }
    if (st_t.length === 6) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6(moment(st_t[5], "HH:mm", false));
        setValueSt7('');
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30(moment(stp_t[5], "HH:mm", false));
        setValueSt31('');
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 5) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5(moment(st_t[4], "HH:mm", false));
        setValueSt6('');
        setValueSt7('');
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29(moment(stp_t[4], "HH:mm", false));
        setValueSt30('');
        setValueSt31('');
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 4) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4(moment(st_t[3], "HH:mm", false));
        setValueSt5('');
        setValueSt6('');
        setValueSt7('');
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28(moment(stp_t[3], "HH:mm", false));
        setValueSt29('');
        setValueSt30('');
        setValueSt31('');
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 3) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3(moment(st_t[2], "HH:mm", false));
        setValueSt4('');
        setValueSt5('');
        setValueSt6('');
        setValueSt7('');
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27(moment(stp_t[2], "HH:mm", false));
        setValueSt28('');
        setValueSt29('');
        setValueSt30('');
        setValueSt31('');
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 2) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2(moment(st_t[1], "HH:mm", false));
        setValueSt3('');
        setValueSt4('');
        setValueSt5('');
        setValueSt6('');
        setValueSt7('');
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26(moment(stp_t[1], "HH:mm", false));
        setValueSt27('');
        setValueSt28('');
        setValueSt29('');
        setValueSt30('');
        setValueSt31('');
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }
    if (st_t.length === 1) {

        //day start
        setValueSt1(moment(st_t[0], "HH:mm", false));
        setValueSt2('');
        setValueSt3('');
        setValueSt4('');
        setValueSt5('');
        setValueSt6('');
        setValueSt7('');
        setValueSt8('');
        setValueSt9('');
        setValueSt10('');
        setValueSt11('');
        setValueSt12('');
        setValueSt13('');
        setValueSt14('');
        setValueSt15('');
        setValueSt16('');
        setValueSt17('');
        setValueSt18('');
        setValueSt19('');
        setValueSt20('');
        setValueSt21('');
        setValueSt22('');
        setValueSt23('');
        setValueSt24('');

        // //day stop
        setValueSt25(moment(stp_t[0], "HH:mm", false));
        setValueSt26('');
        setValueSt27('');
        setValueSt28('');
        setValueSt29('');
        setValueSt30('');
        setValueSt31('');
        setValueSt32('');
        setValueSt33('');
        setValueSt34('');
        setValueSt35('');
        setValueSt36('');
        setValueSt37('');
        setValueSt38('');
        setValueSt39('');
        setValueSt40('');
        setValueSt41('');
        setValueSt42('');
        setValueSt43('');
        setValueSt44('');
        setValueSt45('');
        setValueSt46('');
        setValueSt47('');
        setValueSt48('');

    }

    // //Night start
    // setValueSt13(moment(st_t[0], "HH:mm", false));
    // setValueSt14(moment(st_t[1], "HH:mm", false));
    // setValueSt15(moment(st_t[2], "HH:mm", false));
    // setValueSt16(moment(st_t[3], "HH:mm", false));
    // setValueSt17(moment(st_t[4], "HH:mm", false));
    // setValueSt18(moment(st_t[5], "HH:mm", false));
    // setValueSt19(moment(st_t[6], "HH:mm", false));
    // setValueSt20(moment(st_t[7], "HH:mm", false));
    // setValueSt21(moment(st_t[8], "HH:mm", false));
    // setValueSt22(moment(st_t[9], "HH:mm", false));
    // setValueSt23(moment(st_t[10], "HH:mm", false));
    // setValueSt24(moment(st_t[11], "HH:mm", false));




    console.log('Start time :',st_t);
    console.log('Stop time :',stp_t);
    console.log('Select time :',value_st1);
    console.log('Mee :',mee);
    }


}
}, [table_time]);


    useEffect(() => {
        // console.log(product);
        // console.log(room);
    if (message !== undefined) {

        //console.log(message);
      switch (message.topic) {
        case ('/prod_group'):
            setMyArray(JSON.parse(message.message));
            //console.log(myArray);
      }
      switch (message.topic) {
        case ('/prod_name'):
            setProd_name(JSON.parse(message.message));
            //console.log(prod_name);
      }
    //   switch (message.topic) {
    //     case ('/prod_grp'):
    //         setProd_name1(JSON.parse(message.message));
    //         console.log(prod_name1);
    //   }
      switch (message.topic) {
        case ('/room'):
            setRoom(JSON.parse(message.message));
            //console.log(room_list);
      }
      switch (message.topic) {
        case ('/line_no'):
            setLine_no(JSON.parse(message.message));
            //console.log(line_no);
      }
      switch (message.topic) {
        case ('/mc'):
            setMc(JSON.parse(message.message));
            //console.log(mc);
      }
      switch (message.topic) {
        case ('/time_table'):
            setTime_table(JSON.parse(message.message));
            //console.log(time_table);
      }
      switch (message.topic) {
        case ('/mc_index'):
            setMc_mc_at(JSON.parse(message.message));
            //console.log(mc_mc_at);
      }
      //console.log('Mc_mc_at',mc_mc_at.value);
        //console.log('mc_index',mc_index);
      if (mc_mc_at.value == mc_index.value) {
        console.log('Mc_mc_at',mc_mc_at);
        console.log('mc_index',mc_index);
        switch (message.topic) {
            case ('/start_stop_time'):
                setStart(JSON.parse(message.message));
                localStorage.setItem( 'start_stop', JSON.stringify( start ) );
                //console.log('start :',start);
                start_t_time = start;
          }
          //console.log('start :',start);
      }
      //console.log('start :',start);
      switch (message.topic) {
        case ('/target'):
            setTarget(JSON.parse(message.message));
            localStorage.setItem( 'target_va', JSON.stringify( target_va ) );
            //console.log(target_va);
      }
      switch (message.topic) {
        case ('/working_time'):
            setWork_time(JSON.parse(message.message));
            localStorage.setItem( 'work_time', JSON.stringify( work_time ) );
            //console.log(work_time);
      }
    //   switch (message.topic) {
    //     case ('/mc_at'):
    //         setMc_id(JSON.parse(message.message));
    //         //console.log(mc_id);
    //   }
      switch (message.topic) {
        case ('/mc_id_input'):
            setMc_id(JSON.parse(message.message));
            console.log(mc_id);
      }
      switch (message.topic) {
        case ('/index_config'):
            setIndex_con(JSON.parse(message.message));
            //console.log(index_con);
            
      }
      switch (message.topic) {
        case ('/select_time_table'):
            setSelect_time(JSON.parse(message.message));
            //console.log(select_time);
            
      }

    }
  }, [message]);

  const img = {
    marginLeft:"60%",
    cursor: "pointer",
  };

  
    return (
        <div>
        <div>
            <div className="LabelInfo">
                <h3 style={{marginLeft: '10%' }}>Input configuration</h3>
                <img style={img} src={manual} width="100" height="80" size="50" alt="Johnson Pond" onClick={linkpdf}></img>
            </div>
            <div className="manual">
            {/* <button  onClick={linkpdf}
            >Print</button> */}
            
            </div>
      {/* ฺ<Button variant="outline-info" onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Input'}
      </Button>
      {visible && <div> */}
        <div className="AGVdata">
            <div className="AGVControlInfo">
                <div className="AGVControl">
                    {/* <img className="imgIconControl" src={logoAGV}></img> */}
                    <div className="panelControl">
                        <div className="Panelbutton">
                        <form onSubmit={onSubmit}>
                            {/* <div className="form-group">
                            <select onChange={handleChange} name="select" type="select">
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            </div> */}
                            <div className="form-group">
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >M/c No. (หมายเลขเครื่องอินพุต)</label>
                            <Select className="select" placeholder="Mc no."
                            onChange={(e) => {
                            console.log(e);
                            setMc_index(e);
                            }} 
                            name="mc_id" type="select" 
                            options = {mc_id} />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Room (ห้องที่ใช้)</label>
                            <Select className="select" placeholder="Room"
                            onChange={(e) => {
                            console.log(e);
                            setRoom_room(e);
                            }} 
                            name="room" type="select" 
                            options = {room_list} />
                            </div>
                            
                            {/* <select class="select"  onChange={handleChange} name="select_prod" 
                            type="select"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            >
                            {myArray.map(item => {
                                return (<option key={item.prod} value={item.prod}>{item.text}</option>);
                            })}
                            </select> */}

                            {/* <ReactHookSelect
                                label="select"
                                enableMultiple={true}
                                enableSearch={true}
                                placeholder={"choose option"}
                                defaultValue={[]}
                                options={myArray}
                                /> */}
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Group product</label>
                            <Select className="select"  name="select_prod" placeholder="Group"
                            onChange={(e) => {
                                console.log(e);
                                setProd(e);
                                client.publish("/prod_name1", JSON.stringify(e));
                                
                                }}
                            type="select"
                            options = {myArray} />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Model</label>
                            <Select className="select" placeholder="เลือก group ก่อน"
                            onChange={(e) => {
                            console.log(e);
                            setModel(e);
                            }}
                            name="prod_name" type="select" 
                            options = {prod_name} />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Shift (กะ)</label>
                            <Select className="select" placeholder="Shift"
                            onChange={(e) => {
                            console.log(e);
                            setShift(e);
                            }} 
                            name="shift" type="select" 
                            options = {options} />
                            </div>
                            
                            
                            <label for="exampleInputPassword1" className="label_name_tb" >Time table (ตารางเวลา)</label>
                            <Select className="select_tb" placeholder="Select "
                            //onClick={select_time_table}
                            
                            onChange={(e) => {
                            console.log(e);
                            setTable_time(e);

                            }} 
                            name="time_tab" type="select" 
                            options = {time_table} />
                            
                            
                            
                            <Button variant="secondary"  className="ref" onClick={() => setShowText(!showText)}>Ref</Button>
                            
                            {/* <button onClick={() => setShowText(!showText)}>Toggle Text</button> */}
                            {showText && <div>
                                <form  >
                                <div>
                                <label for="exampleInputPassword1" className="label_name-name" >Name :</label>
                                <input
                                    type="name_time"
                                    className="form-control"
                                    class="name-control"
                                    id="exampleInputPassword1"
                                    placeholder="name"
                                    onChange={handleChange_time}
                                    name="name_time"
                                    
                                />
                                <div>
                                <label className="day" >Time table</label>
                                </div>
                                
                                <table align="center" class="table-name">
                                    <td class = "time_select_start">
                                    <div>
                                {/* <TimePicker
                                    onChange={onChange}
                                    value={value}
                                    onChange={(time) => {
                                        console.log(time);
                                        sett_time(time);
                                        }}
                                /> */}
                                {/* {/* <TimePicker class="select-time" format={format} onChange={onChange} size="small"/> */}
                                <TimePicker class="select-time" format={format} value={value_st1} onChange={(time,timeString) => {
                                        console.log('time1',time, timeString);
                                        sett_time1(timeString); 
                                        setValueSt1(time);
                                        }}  size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st2} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time2(timeString);
                                        setValueSt2(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st3} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time3(timeString);
                                        setValueSt3(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st4} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time4(timeString);
                                        setValueSt4(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st5} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time5(timeString);
                                        setValueSt5(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st6} onChange={(time,timeString) => {
                                        console.log(time, timeString); 
                                        sett_time6(timeString);
                                        setValueSt6(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st7} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time7(timeString);
                                        setValueSt7(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st8} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time8(timeString);
                                        setValueSt8(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st9} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time9(timeString);
                                        setValueSt9(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st10} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time10(timeString);
                                        setValueSt10(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st11} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time11(timeString);
                                        setValueSt11(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st12} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time12(timeString);
                                        setValueSt12(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st13} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time13(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st14} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time14(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st15} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time15(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st16} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time16(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st17} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time17(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st18} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time18(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st19} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time19(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st20} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time20(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st21} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time21(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st22} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time22(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st23} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time23(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st24} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time24(timeString);
                                        }} size="small"  />
                                </div>

                                
                                    </td>
                                    <td class = "time_select_start">
                                    <div>
                                {/* <TimePicker
                                    onChange={onChange}
                                    value={value}
                                    onChange={(time) => {
                                        console.log(time);
                                        sett_time(time);
                                        }}
                                /> */}
                                {/* {/* <TimePicker class="select-time" format={format} onChange={onChange} size="small"/> */}
                                <TimePicker class="select-time" format={format} value={value_st25} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time25(timeString);
                                        setValueSt25(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st26} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time26(timeString);
                                        setValueSt26(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st27} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time27(timeString);
                                        setValueSt27(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st28} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time28(timeString);
                                        setValueSt28(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st29} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time29(timeString);
                                        setValueSt29(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st30} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time30(timeString);
                                        setValueSt30(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st31} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time31(timeString);
                                        setValueSt31(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st32} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time32(timeString);
                                        setValueSt32(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st33} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time33(timeString);
                                        setValueSt33(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st34} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time34(timeString);
                                        setValueSt34(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st35} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time35(timeString);
                                        setValueSt35(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st36} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time36(timeString);
                                        setValueSt36(time);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st37} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time37(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st38} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time38(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st39} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time39(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st40} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time40(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st41} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time41(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st42} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time42(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st43} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time43(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st44} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time44(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st45} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time45(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st46} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time46(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st47} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time47(timeString);
                                        }} size="small"  />
                                </div>
                                <div>
                                <TimePicker class="select-time" format={format} value={value_st48} onChange={(time,timeString) => {
                                        console.log(time, timeString);
                                        sett_time48(timeString);
                                        }} size="small"  />
                                </div>
                                
                                    </td>
                                </table>

                                
                                
                                {/* <label className="night" >Night</label> */}
                                </div>
                                
                                <div>
                                
                               {/* <TimePicker class="select-time" format="h:m:s a"  size="small"/> */}
                                </div>
                                <div >
                                
                                

                                
                                </div>
                                
                                <div className="select-time">
                                <Button variant="outline-info" type="button" onClick={onSubmit_time} >
                                ADD
                                </Button> <Button variant="outline-info" type="button" onClick={onSubmit_time_update} >
                                    Edit/Update
                                </Button>
                                </div>
                                </form>
                            </div>} 
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >M/C No. Output (หมายเลขเครื่องเอาท์พุต)</label>
                            <Select className="select" placeholder="M/C"
                            onChange={(e) => {
                            console.log(e);
                            setM_c(e);
                            }} 
                            name="mc" type="select" 
                            options = {mc} />  
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Line (Ex. A0,A1)</label>
                            <Select className="select" placeholder="Ex.A0,A1"
                            onChange={(e) => {
                            console.log(e);
                            setLine(e);
                            }} 
                            name="line_no" type="select" 
                            options = {line_no} />
                            </div>
                            

                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >ผู้รับผิดชอบ</label>
                            <input
                                type="resp_person"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" Resp_person"
                                onChange={handleChange}
                                name="resp_person"
                            />
                            </div>

                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Section code (รหัสแผนก)</label>
                            <input
                                type="section_code"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder="Section Code"
                                onChange={handleChange}
                                name="section_code"
                            />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Target (เป้าหมายในหนึ่งวัน)</label>
                            <input
                                type="target"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" Target"
                                onChange={handleChange}
                                name="target"
                            />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Start count (ค่าเริ่มต้นการนับ)</label>
                            <input
                                type="st_count"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder="start count"
                                onChange={handleChange}
                                name="st_count"
                            />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Counter (การบวกแต่ละครั้ง)</label>
                            <input
                                type="count"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" Count"
                                onChange={handleChange}
                                name="count"
                            />
                            </div>
                            

                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Take time (RU)</label>
                            <input
                                type="take_time"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" Take_time"
                                onChange={handleChange}
                                name="take_time"
                            />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Working time (Min.)</label>
                            <input
                                type="working_time"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" Working_time"
                                onChange={handleChange}
                                name="working_time"
                            />
                            </div>
                            
                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Operator Q'ty</label>
                            <input
                                type="operator"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" 1"
                                onChange={handleChange}
                                name="operator"
                            />
                            </div>
                            

                            <div>
                            <label for="exampleInputPassword1" className="label_name" >STD Time(Min.)</label>
                            <input
                                type="std_time"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" 00"
                                onChange={handleChange}
                                name="std_time"
                            />
                            </div>
                            

                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Defective limit</label>
                            <input
                                type="defective"
                                className="form-control"
                                class="input-control"
                                id="exampleInputPassword1"
                                placeholder=" 1"
                                onChange={handleChange}
                                name="defective"
                            />
                            </div>
                            

                            <div>
                            <label for="exampleInputPassword1" className="label_name" >Take Time Old </label>
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
                            

                            </div>
                            <div className="form-check mb-0.5">
                            {/* <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            /> */}
                            {/* <label className="form-check-label" for="exampleCheck1">
                                Accept term and conditions
                            </label> */}
                            </div>
                            <Button type="submit" variant="success" className="btn btn-primary" >
                            Submit
                            </Button>
                        </form>
                            {/* <Button className="AGVbutton" variant="success" onClick={() => returnData('START')}>
                                START
                            </Button>
                            <Button className="AGVbutton" variant="danger" onClick={() => returnData('STOP')}>
                                STOP
                            </Button>
                            <Button className="AGVbutton" variant="warning" onClick={() => returnData('UTURN')}>
                                U-TURN
                            </Button> */}
                        </div>

                    </div>
                </div>
                
                {/* <div className="HookControl">
                    <img className="imgIconControl" src={logoAGVhook}></img>
                    <div className="panelControl">
                        <div className="Panelbutton">
                            <Button className="AGVbutton" variant="success" onClick={() => returnData('HOOKUP')}>
                                Hook Up
                            </Button>
                            <Button className="AGVbutton" variant="danger" onClick={() => returnData('HOOKDOWN')}>
                                Hook Down
                            </Button>
                        </div>

                    </div>
                </div> */}
            </div>
        </div>
        {/* </div>} */}
        </div>
        {/* <div >
        ฺ<Button className="select-control" variant="outline-info" onClick={() => setVisible_select(!visible)}>
        {visible_select ? 'Hide' : 'Time'}
      </Button>
      {visible_select && <div >
        <TimePicker className="select-time" use12Hours format="h:mm a" Placeholder="select time" />
        <TimePicker className="select-time" use12Hours format="h:mm a" placeholder="select time" />

        </div>}
        </div> */}

        </div>
        
    )
    
};

// const rootElement = document.getElementById('root')
// ReactDOM.render(<DataAGV />, rootElement)
// export default DataAGV;