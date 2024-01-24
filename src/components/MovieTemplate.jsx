import MovieList from "./MovieList";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";

const MovieTemplate = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const getMovieList = async () => {
    const data = await axios.get("https://yts.mx/api/v2/list_movies.json", {
      params: {
        limit: limit,
        page: page,
      },
    });
    // console.log(data);
    setMovieList(data.data.data.movies);
  };
  let totPage = Math.floor(58523 / limit) + 1;
  // console.log(totPage);
  useEffect(() => {
    getMovieList();
  }, [page, limit]);
  const DropDownList = [
    { id: 0, number: 20 },
    { id: 1, number: 30 },
    { id: 2, number: 50 },
  ];
  const changeLimit = (limit) => {
    setLimit(limit);
    console.log(limit);
  };
  return (
    <Wrap>
      <Container>
        <button onClick={() => setPage(1)}>첫 페이지</button>
        <button onClick={() => setPage((prev) => prev - 1)}>&lt;</button>
        <span>{page}</span>
        <button
          onClick={
            page < totPage
              ? () => setPage((prev) => prev + 1)
              : () => setPage(page)
          }
        >
          &gt;
        </button>
        <button onClick={() => setPage(totPage)}>끝 페이지</button>
        <MovieList movieList={movieList} />
      </Container>
      {/* <DropDownWrap> */}
      <DropDown children={DropDownList} changeLimit={changeLimit} />
      {/* </DropDownWrap> */}
    </Wrap>
  );
};
export default MovieTemplate;

const Container = styled.div`
  width: 800px;
  margin-left: 80px;
  > button {
    background-color: transparent;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-right: 5px;
    padding: 5px 5px auto auto;
    height: 25px;
  }
  > span {
    margin-right: 5px;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;
// const DropDownWrap = styled.div`
//   border: 1px solid gray;
//   padding: 10px 10px 10px 10px;
//   border-radius: 5px;
//   width: 250px;
//   height: 30px;
// `;
