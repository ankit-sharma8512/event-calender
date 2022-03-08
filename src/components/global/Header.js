import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import backArrow from "../../assets/Calender/back-arrow.png";
import { useNavigate } from 'react-router-dom';

const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Header Component for Calender and Events Components

function Header(props) {
    const navigate = useNavigate();
    const year = props.year;
    const [month, setMonth] = useState(MonthNames[props.month - 1]);

    function handleMonthChange(e) {
        if (props.mount === "C")
            setMonth(e.target.value);
        else
            navigate("/calender");
    }

    useEffect(() => {
        const isMonth = m => m === month;
        if (props.changeMonth)
            props.changeMonth(MonthNames.findIndex(isMonth));
        //eslint-disable-next-line
    }, [month])

    // Function to head back to home page
    function goBack() {
        navigate("/");
    }

    return (
        <Container>
            <Year><img src={backArrow} alt="<" onClick={goBack} /><span>{year}</span></Year>
            <MonthButton value={month} onChange={handleMonthChange}>
                {MonthNames.map((item, i) => <option key={item} value={item} >{item}</option>)}
            </MonthButton>
            <Avatar />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 71px;
    display: flex;
    align-items: center;
    padding: 28px 20px;
`;

const Year = styled.div`
    display: inline;
    height: 24px;
    font-size: 14px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        margin-left: 8px;
        font-size:0.875rem ;
    }
`;

const MonthButton = styled.select`
    width: 110px;
    height: 28px;
    background-color: #2B4047;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 0.875rem;
    color: white;
    margin-left: 6px;
    outline: none;
    padding: 0px 10px ;
`;

const Avatar = styled.div`
    width:24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ddd;
    margin-left: auto;
`;

export default Header