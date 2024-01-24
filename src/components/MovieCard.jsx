import styled from "styled-components";

const MovieCard = ({ imgUrl, title, runTime, year }) => {
  return (
    <>
      <Movie>
        <img src={imgUrl} width="147.7px" height="220px" />
        <div>{title}</div>
        <div>{runTime}</div>
        <div>{year}</div>
      </Movie>
    </>
  );
};

export default MovieCard;

const Movie = styled.li`
  width: 160px;
  list-style-type: none;
`;
