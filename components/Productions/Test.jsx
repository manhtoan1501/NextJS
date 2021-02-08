import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    product: {
        display: "inline",
        borderRadius: 2,
        "&:hover": {
            boxShadow: "2px 2px 8px 2px #aaa",
        },
    },
}));

const times = [
    {
        time: '1',
        messages: [
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
        ],
    },
    {
        time: '2',
        messages: [
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' }, { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' }, { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' }, { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
        ],
    },
    {
        time: '3',
        messages: [
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
        ],
    },
    {
        time: '4',
        messages: [
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
        ],
    },
    {
        time: '5',
        messages: [
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
            { message: 'message' }, { message: 'message' },
        ],
    },
];

const Test = (props) => {
    const myRef = React.useRef();
    const [newValue, setNewValue] = React.useState(true);
    const [heigthState, setHeight] = React.useState(0);
    const [timeState, setTimeState] = React.useState('0');
    const [index, setIndex] = React.useState(0);
    const onwheel = (e, _index, time) => {
        if (_index !== index) {
            setIndex(index);
        }
        console.log('time >>>>>>>> ', time, ' index ', _index);
        setTimeState(time);
        // const heightItem = document.getElementById(index).clientHeight;
        // const { top, bottom, height, left, right, width, x, y } = myRef.current.getBoundingClientRect();
    };

    return (
        <div
            id='kkkkkk'
            style={{ margin: '0 auto', display: 'inline-block', textAlign: 'center', backgroundColor: '#aaa' }}
        >
            <h1
                style={{
                    padding: 10, textAlign: 'center', alignItems: 'center',
                    alignContent: 'center', position: 'fixed',
                    top: 0, marginLeft: 200, height: 40,
                    borderRadius: 20, width: 250, backgroundColor: 'orange',
                }}
            >
                {timeState}
            </h1>
            {times.map((item, index) => {
                const { time, messages } = item;
                return (
                    <div id={index} key={index} ref={myRef} onWheel={(e) => onwheel(e, index, time)}>
                        <h1
                            style={{
                                padding: 10, marginLeft: 200, height: 40,
                                width: 250, borderRadius: 20, backgroundColor: 'white'
                            }}
                        >
                            {time}
                        </h1>
                        {messages.map((element, count) => {
                            const { message } = element;
                            return (
                                <div key={count}>
                                    <h2>{message}</h2>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Test;