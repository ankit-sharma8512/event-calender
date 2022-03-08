import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import eventBoxRed from "./../../assets/Events/event-box-red.png";
import eventBoxGreen from "./../../assets/Events/event-box-green.png";
import eventBoxYellow from "./../../assets/Events/event-box-yellow.png";
import AvatarStack from './AvatarStack';
import moment from 'moment';

// EventShort component which prints details of the event specified by UpcomingEvents
// Calls the delete event method on UpcomingEvents when time of the event is reached

function EventShort(props) {
    const [timeLeft, setTimeLeft] = useState("");

    // Updates the remaining time of the event called every 10s
    function changeTime() {
        const tt = (moment(props.time).diff(moment(), "days") > 0 ? moment(props.time).diff(moment(), "days") + "d" : "") +
            (moment(props.time).diff(moment(), "hours") % 24 > 0 ? moment(props.time).diff(moment(), "hours") % 24 + "h" : "") +
            (moment(props.time).diff(moment(), "minutes") % 60 > 0 ? moment(props.time).diff(moment(), "minutes") % 60 + "m" : "");
        setTimeLeft(tt);
    }

    useEffect(() => {
        changeTime();
        const id = setInterval(() => {
            changeTime();
            if (moment(props.time).diff(moment(), "minutes") <= 0) {
                props.delete(props.title, props.time);
                clearInterval(id);
            }

        }, 10000);
        if (moment(props.time).diff(moment(), "minutes") <= 0) {
            props.delete(props.title, props.time);
            clearInterval(id);
        }
        return () => clearInterval(id);
        //eslint-disable-next-line
    }, []);

    return (
        <>
            {props.color === "red" && <RedBox>
                <Text>{props.title}</Text>
                <AvatarStack />
                <Time>{moment(props.time).format("hh:mm a") + " "}
                    <span>{timeLeft}</span>
                </Time>
            </RedBox>}

            {props.color === "yellow" && <YellowBox>
                <Text>{props.title}</Text>
                <AvatarStack />
                <Time>{moment(props.time).format("hh:mm a") + " "}
                    <span>{timeLeft}</span>
                </Time>
            </YellowBox>}

            {props.color === "green" && <GreenBox>
                <Text>{props.title}</Text>
                <AvatarStack />
                <Time>{moment(props.time).format("hh:mm a") + " "}
                    <span>{timeLeft}</span>
                </Time>
            </GreenBox>}
        </>
    )
}

const Box = styled.div`
    flex-shrink:0;
    flex-basis:136px ;
    height:77px;
    background-repeat:no-repeat;
    border-radius:16px;
    margin-right: 9px;
    padding:7px 12px;
    `;

const RedBox = styled(Box)`
background-image :url(${eventBoxRed});
`;

const YellowBox = styled(Box)`
    background-image :url(${eventBoxYellow});
    `;

const GreenBox = styled(Box)`
    background-image :url(${eventBoxGreen});
    `;

const Text = styled.h4`
    color:#4a4a4a;
    font-size:0.8125rem ;
    font-family: 'Lato', sans-serif;
`;

const Time = styled.h4`
    color:#4a4a4a;
    font-size:0.75rem ;
    font-family: 'Lato', sans-serif;
    margin-top: 6px;
    span{
        color:#898989;
        font-size:0.625rem ;
        font-family: 'Lato', sans-serif;
        font-weight:400 ;
    }
`;

export default EventShort