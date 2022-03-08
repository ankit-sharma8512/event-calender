import React from 'react';
import styled from 'styled-components';

// Prints an dummy Avatar Stack
// Can be modified later to print actual Avatar Stack

function AvatarStack() {
    return (
        <HorizontalStack>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
        </HorizontalStack>
    )
}

const HorizontalStack = styled.div`
    display: flex;
    list-style-type: none;
    margin: auto;
    padding:0px;
    flex-direction: row;
    margin-top:3px ;
`;

const Avatar = styled.div`
    width:24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: -14px;
    &:first-child{
        margin-left:0 ;
    }
    &:nth-child(2n){
        background-color:white ;
    }
    &:nth-child(2n+1){
        background-color:#bbbbbb ;
    }
`;

export default AvatarStack