import React, {useReducer, useEffect, useState} from 'react';
import {Button, Container} from "../../styles";

const LOADING = 'LOADING';
const OK = 'OK';
const FAIL = 'FAIL';

// const reducer = (state, {type, payload}) => {
//   // This reducer needs to handle the state of the request, if it is loading, fetched or failed
//   return state
// };

const initialState = {
  data: null,
  isLoading: true,
  isError: false
};

function useFetchData(movieNumber: number) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // make and http call to this address : `https://swapi.co/api/films/${movieNumber}`
  // and make sure that you handle the loading, fetched and error state
  return {data: {title: 'title', director: 'director', opening_crawl: 'crawl'}, isLoading: false, isError: false}
}

export const Exercise6 = () => {
  const [movieNumber, setMovieNumber] = useState(1);
  const {data, isLoading, isError} = useFetchData(movieNumber);
  if (isLoading) {
    return <Container>Fetching movie {movieNumber}</Container>
  }
  if (isError) {
    return <Container>
      <h1>This movie ({movieNumber}) does not exist!</h1>
      <Button onClick={() => setMovieNumber(Math.floor(Math.random() * 10))}>Fetch new movie!</Button>
    </Container>
  }
  return (
    <Container>
      <h1> {data.title}</h1>
      <h2>{data.director}</h2>
      <p>{data.opening_crawl}</p>
      <Button onClick={() => setMovieNumber(Math.floor(Math.random() * 10))}>Fetch new movie!</Button>
    </Container>
  )
};


