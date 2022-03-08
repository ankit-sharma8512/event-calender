import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import addImg from "../../assets/Calender/add.png";

// Add Button Component to open Add Event Interface

function AddButton() {
    const navigate = useNavigate();
    return (
        <Add onClick={() => navigate("add")}><img src={addImg} alt="" /></Add>
    )
}

const Add = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FF6A3D;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default AddButton