import MovieCard from "./MovieCard";
import styled from "styled-components";

const MovieList = ({ movieList }) => {
  // const { background_image, title, runTime, year } = movieList;
  console.log(movieList);
  return (
    <>
      <ListWrap>
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            imgUrl={movie.background_image}
            title={movie.title}
            runTime={movie.runTime}
            year={movie.year}
          />
        ))}
      </ListWrap>
    </>
  );
};

export default MovieList;

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
