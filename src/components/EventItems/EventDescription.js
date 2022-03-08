import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import EventLong from './EventLong'
const color = ["red", "yellow"];
const DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Prints All the Events that falls in a time period of 7 days
function EventDescription(props) {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem("events"));
        const list = temp.filter((item) => {
            return moment(item.time).diff(moment(), "days") < 8;
        })
        setEventList(list.sort(({ time: a }, { time: b }) => moment(a).diff(moment(b))));
    }, [props.refresh]);

    // Function to delete an event when called by the EventLong component
    function deleteEvent(title, time) {
        const list = eventList.filter((item) => {
            if (item.title === title && item.time === time)
                return false;
            return true;
        })
        localStorage.setItem("events", JSON.stringify(list));
        setEventList(list);
    }

    return (
        <div style={{ marginTop: "12px" }}>
            {eventList.length === 0 && <Header><span>Today,</span> {DayNames[moment().day()]} {moment().format("DD")}<Text>No Events</Text></Header>}
            {eventList.map((item, i) => <EventLong key={`a${i}`} color={color[i % 2]} title={item.title} time={item.time} delete={deleteEvent} location={item.location || "a"} />)}
        </div>
    )
}

const Header = styled.div`
    font-size:14px;
    color:#4a4a4a ;
    margin-top: 20px;
    span{
        font-weight:900 ;
    }
`;

const Text = styled.p`
    font-size: 0.75rem;
    color: #4a4a4a ;
    margin-top: 10px;
    font-family:Lato,sans-serif ;
`;
export default EventDescription