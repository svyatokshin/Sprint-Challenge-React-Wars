import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import styled from "styled-components";

const CardContainerContainer = styled.div`
    display: flex;
    flex-flow: wrap;

`

export default function StarWars(props) {
    const[person, setPerson] = useState([]);
    const[numberInput, setNumberInput] = useState(0)
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                setPerson(response.data.results); 
                
                
                // const persons = response.data;
                console.log("this is the response from useEffect: ", response.data.results);
            })
            .catch(error => {
                console.log("This is StarWars error: ", error);
            });
    }, [numberInput]);

    return (
        <CardContainerContainer>
            {/* <StarWarsCard 
            key={person.name}
            data={person}
            /> */}
            {person.map(data => {
                return <StarWarsCard data={data} key={data.name} />
             })}
        </CardContainerContainer>
    );
}