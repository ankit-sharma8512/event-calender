import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import closeButon from "./../../assets/AddEvent/close-button.png"
import peopleIcon from "./../../assets/AddEvent/people.png";
import clockIcon from "./../../assets/AddEvent/clock.png";
import locationIcon from "./../../assets/AddEvent/location.png";
import agendaIcon from "./../../assets/AddEvent/agenda.png";
import arrow from "./../../assets/AddEvent/right.png";

// Component for adding an event to the routine
// Done by Controlled Comonents for-
// Title: Title of the event
// People: Specified People (only text)
// Time: Time of the Event
// Location: Location of the Event (only text)
// Agenda: Agenda of the event (only text)

function AddEvent(props) {
    const navigate = useNavigate();
    const [showPeople, setShowPeople] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showAgenda, setShowAgenda] = useState(false);

    const [title, setTitle] = useState("");
    const [people, setPeople] = useState("");
    const [time, setTime] = useState(moment().format(moment.HTML5_FMT.DATETIME_LOCAL));
    const [location, setLocation] = useState("");
    const [agenda, setAgenda] = useState("");

    const refresh = useOutletContext();

    // function to add the event to localStorage 'events' array
    function Add() {
        if (!title || title === "") {
            setTitle("Required");
            return;
        }
        const eventObj = {
            title,
            people,
            time,
            location,
            agenda
        };
        let currEvents = JSON.parse(localStorage.getItem("events"));
        if (!currEvents)
            currEvents = [];
        currEvents.push(eventObj);
        localStorage.setItem("events", JSON.stringify(currEvents));
        refresh();
        navigate(-1);
    }

    return (
        <>
            <Background />
            <Container>
                <AddHeader> <CloseButton onClick={() => navigate(-1)} src={closeButon} />New Event <span style={{ marginLeft: "auto", fontFamily: "Lato,sans-serif", fontSize: "0.875rem" }} onClick={Add}>Add</span></AddHeader>

                <Input placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <Wrapper >
                    <OptionHeader onClick={() => setShowPeople(!showPeople)}><img src={peopleIcon} alt="" />{"Invite People"} <img style={{ marginLeft: "auto" }} src={arrow} alt="" /></OptionHeader>
                    {showPeople && <OptionInput type="text" placeholder={"Invite People"} value={people} onChange={(e) => setPeople(e.target.value)} />}
                </Wrapper>
                <Wrapper>
                    <OptionHeader onClick={() => setShowTime(!showTime)}><img src={clockIcon} alt="" />{"Time"} <img style={{ marginLeft: "auto" }} src={arrow} alt="" /></OptionHeader>
                    {showTime && <OptionInput type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />}
                </Wrapper>

                <Wrapper>
                    <OptionHeader onClick={() => setShowLocation(!showLocation)}><img src={locationIcon} alt="" />{"Location"} <img style={{ marginLeft: "auto" }} src={arrow} alt="" /></OptionHeader>
                    {showLocation && <OptionInput type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />}
                </Wrapper>

                <Wrapper>
                    <OptionHeader onClick={() => setShowAgenda(!showAgenda)}><img src={agendaIcon} alt="" />{"Agenda"} <img style={{ marginLeft: "auto" }} src={arrow} alt="" /></OptionHeader>
                    {showAgenda && <OptionInput type="text" placeholder='Agenda' value={agenda} onChange={(e) => setAgenda(e.target.value)} />}
                </Wrapper>

            </Container>
        </>
    )
}

const Background = styled.div`
    position: fixed;
    top:0;
    width:100% ;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
`;

const Container = styled.div`
    background-color:white ;
    width:100% ;
    border-radius: 16px 16px 0 0;
    height:61% ;
    padding:2px 18px;
    position:fixed ;
    bottom: 0;
    z-index:4 ;
    overflow-y:scroll ;
`;

const CloseButton = styled.img`
    height:12px ; 
    margin-right:10px ;
`;

const AddHeader = styled.div`
    display:flex ;
    align-items:center ;
    color: #4a4a4a ;
    font-weight: bold ;
    width:100% ;
    font-size: 1rem ;
    border-bottom: 1px solid #ddd ;
    padding:15px 0px ;
    background-color:white ;
`
const Input = styled.input`
    margin-top: 15px;
    width:100% ;
    height: 40px;
    outline:none ;
    border:none ;
    border-radius: 16px;
    padding: 16px ;
    font-family: Lato,sans-serif ;
    font-size: 0.75rem ;
    color: #444 ;
    background-color: #ddd ;
`;

const Wrapper = styled.div`
     border-bottom: 1px solid #ddd ;
     padding: 10px 0 ;
`;

const OptionHeader = styled.div`
    padding: 10px 0 ;
    font-family: Lato,sans-serif ;
    font-size: 12px ;
    font-weight: 700 ;
    color: #4a4a4a ;
    display:flex ;
    align-items:center ;
    img{
        margin-right:10px ;
    }
`;

const OptionInput = styled.input`
    width:100% ;
    height: 30px;
    outline:none ;
    border:none ;
    border-radius: 12px;
    padding: 10px ;
    font-family: Lato,sans-serif ;
    font-size: 0.7rem ;
    color: #444 ;
    background-color: #ddd ;
`;

export default AddEvent