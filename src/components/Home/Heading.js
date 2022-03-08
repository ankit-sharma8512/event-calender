import React from 'react'
import styled from 'styled-components';

function Heading() {
    return (
        <Container>
            <h3>Calender </h3><h4>2021</h4>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 3rem;
    margin-left: 1rem;
    *{
        display: inline;
    }
    h3{
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 46px;
        color:#6A777C;;
    }
    h4{
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 46px;
        color: white;
    }
`;

export default Heading