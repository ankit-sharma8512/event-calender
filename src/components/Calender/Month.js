import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

// component to print the dates of the specified month by Calender component

function Month(props) {
    const [dates, setDates] = useState([[]]);

    // Build the 7 column(for week) 2d Grid arranged (starting from monday) for the month
    // dates enclosed in DateItem components and weeks in Row component
    const setDaysOfMonth = () => {
        let date = [];
        const dateObj = moment(`${props.month}-${props.year}`, "MM-YYYY");

        const firstDayInCurrMonth = ((moment(dateObj).startOf("month").format("d") - 1) + 7) % 7;
        const daysInCurrMonth = moment(dateObj).daysInMonth();
        const daysInPrevMonth = moment(`${props.month - 1 === 0 ? 12 : props.month - 1}`, "MM").daysInMonth();
        const start = daysInPrevMonth - firstDayInCurrMonth;

        const today = moment().format("D");
        const currMonth = moment().month() + 1;

        for (let d = start + 1; d <= daysInPrevMonth; d++)
            date.push(<DateItem blur key={`a${d}`}>{d}</DateItem>);

        for (let d = 1; d <= daysInCurrMonth; d++)
            date.push(<DateItem key={`b${d}`} style={d.toString() === today && currMonth === props.month ? { backgroundColor: "white", color: "black" } : {}}>{d}</DateItem>);

        const rem = Math.ceil(date.length / 7) * 7 - date.length;

        for (let d = 1; d <= rem; d++)
            date.push(<DateItem blur key={`c${d}`}>{d}</DateItem>);

        let rows = [];
        let cells = [];
        date.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === date.length - 1) {
                rows.push(cells);
            }
        });
        if (rows[0].length === 0) rows.splice(0, 1);
        setDates(rows);
    }

    useEffect(() => {
        setDaysOfMonth();
        // eslint-disable-next-line
    }, [props]);

    return (
        <>
            {dates.map((item, index) => <Row key={index + 1}>{item.map(i => i)}</Row>)}
        </>
    )
}

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
    margin-top: 16px;
    font-size: 0.75rem;
`;

const DateItem = styled.div`
    color: white;
    opacity: ${props => props.blur ? 0.2 : 1.0};
    font-size: 0.75rem;
    font-weight: 500;
    width: 34px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: white;
        color: black;
    }
`;

export default Month