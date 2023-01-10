import React from "react";
import { useParams } from "react-router-dom";
import mockData from "../MOCK_DATA.json";

const MovieDetail = () => {
  const { id } = useParams();

  const movieDetail = mockData.find((movie) => movie.imdbID === id);

  return (
    <div className='container'>
      <div className='movie-detail'>
        <img src={movieDetail.Poster} alt={movieDetail.Title} />

        <div>
          <h3>{movieDetail.Title}</h3>
          <h4>{movieDetail.Year}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper nisl a sapien lobortis, quis
            ornare libero laoreet. Cras malesuada posuere ipsum, sit amet pulvinar lorem facilisis vitae. Suspendisse eu
            pulvinar risus, eu aliquet sapien. Duis non ornare magna, eu vulputate purus. Cras mollis aliquam justo.
            Etiam iaculis rutrum ultrices. Fusce sed leo et nulla commodo porttitor sed vel neque. Mauris vestibulum
            erat ut auctor sagittis. Sed et nulla venenatis ipsum commodo tempus a sit amet felis. Nam ac pharetra nisl.
            Integer mi turpis, consectetur sit amet sagittis semper, volutpat quis mi. Nunc posuere purus vel massa
            pretium, non lobortis augue dictum. Morbi lobortis tortor sit amet lectus volutpat, id euismod neque ornare.
            Aenean porta mattis ante, ut venenatis diam condimentum eget. Proin tristique sapien vel pellentesque
            scelerisque. Integer a erat lacus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
