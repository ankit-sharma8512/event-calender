import React from 'react';
import styled from 'styled-components';
import coverImg from "../../assets/Home/cal-img.png";

function Cover() {
    return (
        <Image />
    )
}

const Image = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 97%;
    background-image: url(${coverImg});
    background-position: center;
    background-repeat: no-repeat;
`;

export default Cover