import React from 'react';
import styled from 'styled-components';
import UpcomingEvents from '../EventItems/UpcomingEvents';
import EventDescription from '../EventItems/EventDescription';
import { useNavigate } from 'react-router-dom';

// EventInfo Component to display UpcomingEvents and long run EventDescription 

function EventInfo(props) {
    const navigate = useNavigate();

    return (
        <>
            <EventBox>
                <SwipeLine onClick={() => navigate("/calender")} />
                <UpcomingEvents refresh={props.refresh} />
                <EventDescription refresh={props.refresh} />
            </EventBox>
        </>
    )
}

const EventBox = styled.div`
    background-color:white ;
    width:100% ;
    border-radius: 16px 16px 0 0;
    height:77% ;
    padding:20px;
    position:fixed ;
    bottom: 0;
    overflow:scroll ;
`;

const SwipeLine = styled.div`
    height:2px ;
    width: 35px;
    position:absolute;
    top: 8px;
    left:163px ;
    background-color:#dadada;
`;


export default EventInfo