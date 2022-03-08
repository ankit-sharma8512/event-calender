import styled from 'styled-components';

import React from 'react'

function Screen() {
    return (
        <Container>
            <h1>Hi Ankit,</h1>
            <p>Welcome to your daily event calendar. Be more engaging & personalised than ever before. We'll help you in <strong>Tracking Upcoming Events, Scheduling Meetings & Creating New Event!</strong></p>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 30%;
    border-radius: 16px 16px 0px 0px;
    padding: 16px;
    padding-right:38px ;
    z-index: 2;

    h1{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #4A4A4A;
    }

    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        color: #4A4A4A;
        margin-top: 8px;
        strong{
            font-family: Lato;
        }
    }
`;

export default Screen;
