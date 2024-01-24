const agvList = [
    {
        id: 0,
        name: "AGV No 1",
        txtLeft: "Start",
        txtRight: "Stop",
        topicPub: "/dash",
        topicOperate: "/Info/AGVNo1/operate",
        topicOnline: "/Info/AGVNo1/online",
        topicWifi: "/Info/AGVNo1/wifi",
        topicVoltage: "/Info/AGVNo1/battery",
        topicPosition: "/Info/AGVNo1/position",
    }
    ,
    {
        id: 1,
        name: "AGV No 2",
        txtLeft: "Start",
        txtRight: "Stop",
        topicPub: "/command/AGVNo2",
        topicOperate: "/Info/AGVNo2/operate",
        topicOnline: "/Info/AGVNo2/online",
        topicWifi: "/Info/AGVNo2/wifi",
        topicVoltage: "/Info/AGVNo2/battery",
        topicPosition: "/Info/AGVNo2/position",
    }
    ,
    {
        id: 2,
        name: "AGV No 3",
        txtLeft: "Start",
        txtRight: "Stop",
        topicPub: "/command/AGVNo3",
        topicOperate: "/Info/AGVNo3/operate",
        topicOnline: "/Info/AGVNo3/online",
        topicWifi: "/Info/AGVNo3/wifi",
        topicVoltage: "/Info/AGVNo3/battery",
        topicPosition: "/Info/AGVNo3/position",
    }
];

export default agvList;