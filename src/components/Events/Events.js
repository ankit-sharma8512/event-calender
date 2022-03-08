import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import moment from 'moment';
import Header from '../global/Header';
import EventInfo from './EventInfo';
import AddButton from "./../global/AddButton";
import { Outlet } from 'react-router-dom';
const dayName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

//Events Component to show all Upcoming Events and Long Run Events along with the current week of the month

// SwipeLine (small line on top of white container) is used to swap between Calender and Events

function Events() {
    // eslint-disable-next-line
    const [currMonth, setCurrMonth] = useState(moment().month());
    // eslint-disable-next-line
    const [currYear, setCurrYear] = useState(moment().year());
    const [week, setWeek] = useState([]);
    const [ref, setRef] = useState(0);

    // Sets the week as array of current week days(7 days) within DateItem components
    // and also marking today
    function getCurrentWeek() {
        let currentDate = moment();

        let weekStart = currentDate.startOf('isoWeek');
        let days = [];

        for (let i = 0; i <= 6; i++) {
            days.push({ m: moment(weekStart).add(i, 'days').format("M"), d: moment(weekStart).add(i, 'days').format("D") });
        }
        let temp = [];
        for (let i = 0; i < days.length; i++) {
            if (days[i].m !== moment().format("M"))
                temp.push(<DateItem blur key={`a${i}`}><h6>{dayName[i]}</h6><h6>{days[i].d}</h6></DateItem>);
            else {
                if (days[i].d === moment().format("D"))
                    temp.push(<DateItem key={`b${i}`} style={{ backgroundColor: "white", color: "black" }}><h6>{dayName[i]}</h6><h6>{days[i].d}</h6></DateItem>);
                else
                    temp.push(<DateItem key={`c${i}`}><h6>{dayName[i]}</h6><h6>{days[i].d}</h6></DateItem>);
            }
        }
        setWeek(temp);
    }

    useEffect(() => {
        getCurrentWeek();
    }, []);

    // Function to refresh the EventInfo components for getting events
    function refresh() {
        setRef(ref + 1);
    }

    return (
        <>
            <Background />
            <Container>
                <Header changeMonth={null} month={currMonth + 1} year={currYear} mount="E" />
                <Row>
                    {week.map(item => item)}
                </Row>
                <EventInfo refresh={ref} />
                <AddButton />
            </Container>
            <Outlet context={refresh} />
        </>
    )
}

const Background = styled.div`
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: #162B32;
            z-index: -1;
`;
const Container = styled.div`
            width: 100%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
`;

const DateItem = styled.div`
    color: white;
    opacity: ${props => props.blur ? 0.2 : 1.0};
    width: 34px;
    height: 62px;
    border-radius: 50px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: white;
        color: black;
    }

    h6{
        font-size: 0.8rem;
        font-weight:400;
    }
`;


export default Events