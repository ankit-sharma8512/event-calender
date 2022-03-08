import React, { useEffect, useState } from 'react'
import moment from 'moment';
import styled from 'styled-components'
import EventShort from './EventShort';
const color = ["red", "yellow", "green"];

// Prints All the Events that falls in a time period of 3 days

function UpcomingEvents(props) {
    const [count, setCount] = useState(0);
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem("events"));
        const list = temp.filter((item) => {
            return moment(item.time).diff(moment(), "days") < 3;
        })
        setEventList(list.sort(({ time: a }, { time: b }) => moment(a).diff(moment(b))));
        setCount(list.length);
    }, [props.refresh]);

    // Function to delete an event when called by the EventShort component
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
        <Container>
            <h1>Upcoming Events {count !== 0 ? `(${count})` : ""}</h1>
            <ScrollView>
                {eventList.length === 0 && <Text>No Upcoming Events </Text>}
                {eventList.map((item, i) => <EventShort key={`a${i}`} color={color[i % 3]} title={item.title} time={item.time} delete={deleteEvent} />)}
            </ScrollView>
        </Container>
    )
}

const Container = styled.div`
    h1{
        font-weight: bold;
        font-size: 0.875rem;
        color: #4a4a4a;
    }
`;

const ScrollView = styled.div`
    margin-top:14px ;
    display: flex;
    width:100% ;
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
    width:0 ;
}
`;

const Text = styled.p`
    font-size: 0.625rem;
    color: #4a4a4a ;
    font-family:Lato,sans-serif ;
`;
export default UpcomingEvents;