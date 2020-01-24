import React from "react";
import styled from "styled-components";

const CardContainerContainer = styled.div`
    display: flex;
    flex-flow: row-wrap;

`

const CardContainer = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid skyblue;
    color: #C0A080;
    margin: 10px 6%;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background: lightgrey;
`

const StarWarsCard = props => {
    return (
            <CardContainer>
                <h1>{props.data.name}</h1>
                <h2>DOB: {props.data.birth_year}</h2>
                {/* <h4>Description</h4> */}
                <p>Hair: {props.data.hair_color}<br></br> Eyes: {props.data.eye_color}<br></br> Gender: {props.data.gender}<br></br></p>
                <p>Stared in: {props.data.films.length} Films</p>
            </CardContainer>
    )
}

export default StarWarsCard;