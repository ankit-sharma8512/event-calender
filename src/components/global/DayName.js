import React from 'react'
import styled from 'styled-components';
const dayName = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Component to print Short Day Names Row

function DayName() {
    return (
        <Row>
            {dayName.map(item => <span key={item} style={{
                width: "34px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "400"
            }}>{item}</span>)}
        </Row>
    )
}

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: white;
    margin-top: 10px;
    font-size: 0.75rem;
`;

export default DayName