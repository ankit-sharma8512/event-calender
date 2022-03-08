import React from 'react'
import styled from 'styled-components';
import arrow from "../../assets/Home/go-arrow.png";
import { useNavigate } from 'react-router-dom';

function Button() {
    const navigate = useNavigate();

    function goToCalender() {
        navigate("/calender");
    }

    return (
        <Container onClick={() => goToCalender()}>
            <img src={arrow} alt="Go" />
        </Container>
    )
}

const Container = styled.div`
    width:136px;
    height:136px;
    border-radius: 50%;
    background: #FF6A3D;
    position: absolute;
    bottom: -68px;
    right: -68px;
    z-index: 3;
    img{
        margin-top: 33px;
        margin-left: 33px;
    }
;
`;

export default Button