import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import redBox from "./../../assets/Events/eventd-box-red.png";
import yellowBox from "./../../assets/Events/eventd-box-yellow.png";
import videoIcon from "./../../assets/Events/video-icon.png";
import AvatarStack from './AvatarStack';

const DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// EventLong component which prints details of the event specified by EventDescription
// Calls the delete event method on EventDescription when time of the event is reached

function EventLong(props) {
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

    const day = (moment(props.time).isSame(moment(), "day")) ? "Today," :
        (moment(props.time).isSame(moment().add(1, "d"), "day") ? "Tommorrow," :
            moment(props.time).format("YYYY") + " " + MonthNames[moment(props.time).month()] + ",")

    // Prints dummy number for now
    return (
        <div style={{ marginTop: "10px" }}>
            <Header><span>{day}</span> {DayNames[moment(props.time).day()]} {moment(props.time).format("DD")}</Header>
            <Entry>
                <Time>
                    <span>{moment(props.time).format("hh:mma")}</span>
                    <span>{timeLeft}</span>
                </Time>
                {
                    props.color === "red" && <RedBox>
                        <Text>{props.title}</Text>
                        <AvatarStack />
                        {props.location && <NumberBox>
                            <img src={videoIcon} alt={"Call"} /><span> 123 456 7890</span>
                        </NumberBox>}

                    </RedBox>
                }
                {
                    props.color === "yellow" && <YellowBox>
                        <Text>{props.title}</Text>
                        <AvatarStack />
                        {props.location && <NumberBox>
                            <img src={videoIcon} alt={"Call"} /><span> 123 456 7890</span>
                        </NumberBox>}

                    </YellowBox>
                }

            </Entry>
        </div>
    )
}

const Header = styled.div`
    font-size:14px;
    color:#4a4a4a ;
    span{
        font-weight:900 ;
    }
`;

const Entry = styled.div`
    display: flex;
    width: 320px;
    height:77px ;
    margin-top:11px ;
    align-items:flex-start ;
    justify-content: space-between;
`;

const Time = styled.div`
    height:100% ;
    width:51px ;
    margin-right: 10px;
    span{
        font-family:'Times New Roman', Times, serif ;
        font-size: 0.8125rem;
        display:block ;
        margin-top:3px ;
        color: #4a4a4a;
        :nth-child(1){
            font-weight:bold;
        }
    }
`;

const Box = styled.div`
    height:100% ;
    width: 268px;
    background-repeat:no-repeat ;
    background-position:center ;
    background-size:contain ;
    padding:7px 12px;
`;

const RedBox = styled(Box)`
background-image :url(${redBox});
`;
// eslint-disable-next-line
const YellowBox = styled(Box)`
    background-image :url(${yellowBox});
`;

const Text = styled.h4`
    color:#4a4a4a;
    font-size:0.8125rem ;
    font-family: 'Lato', sans-serif;
`;

const NumberBox = styled.span`
    display:flex ;
    align-items:center ;
    margin-top: 5px;
    span{
        color:#4a4a4a;
        font-size:0.625rem ;
        font-family: 'Lato', sans-serif;
    }
    img{
        height: 14px;
        margin-right:4px ;
    }
`;

export default EventLong