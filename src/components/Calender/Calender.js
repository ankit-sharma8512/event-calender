import React, { useState } from 'react'
import styled from 'styled-components';
import moment from 'moment';
import Header from '../global/Header';
import DayName from '../global/DayName';
import Month from './Month';
import UpcomingEvents from '../EventItems/UpcomingEvents';
import AddButton from '../global/AddButton';
import { Outlet, useNavigate } from 'react-router-dom';

const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Component to show dates of current month and later ones of the current year
// Single month is shown using Month component

// SwipeLine (small line on top of white container) is used to swap between Calender and Events

function Calender() {
    const navigate = useNavigate();
    const [currMonth, setCurrMonth] = useState(moment().month());
    // eslint-disable-next-line
    const [currYear, setCurrYear] = useState(moment().year());
    const [ref, setRef] = useState(0);
    const months = [...Array(11 - currMonth).keys()];

    // Change current month if the user changes it in the Header component
    // and change the Calender months accordingly
    function changeMonth(month) {
        setCurrMonth(month);
    }

    // Refresh the UpcomingEvents component when required
    function refresh() {
        setRef(ref + 1);
    }

    return (
        <>
            <Background />
            <Container>
                <Header changeMonth={changeMonth} month={currMonth + 1} year={currYear} mount="C" />
                <DayName />
                <Month month={currMonth + 1} year={currYear} />
                {months.map(item => {
                    return <div key={`1a${item + 1}`}>
                        <MonthHeading>{MonthNames[currMonth + item + 1]}</MonthHeading>
                        <Month month={currMonth + item + 2} year={currYear} />
                    </div>
                })}
                <div style={{ height: "200px" }}></div>

                <EventBox>
                    <SwipeLine onClick={() => navigate("/events")} />
                    <UpcomingEvents refresh={ref} />
                </EventBox>
                <AddButton />
                <Outlet context={refresh} />
            </Container>
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

const MonthHeading = styled.div`
            font-size: 1.25rem;
            font-size:20px;
            font-weight: 700;
            color: white;
            margin-top: 32px;
            margin-left: 31px;
`;

const EventBox = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 22%;
    background-color: white;
    border-radius: 16px 16px 0px 0px;
    z-index: 2;
    padding: 20px;
`;

const SwipeLine = styled.div`
    height:2px ;
    width: 35px;
    position:absolute;
    top: 8px;
    left:163px ;
    background-color:#dadada;
`;


export default Calender;