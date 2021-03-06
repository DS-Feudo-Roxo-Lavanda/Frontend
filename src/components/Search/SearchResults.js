import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  if (!results || !results.length) return null;
  
  const showList = results.map((show) => {
      const {
        id,
        name,
        title,
        poster_path,
        overview,
        release_date,
        first_air_date,
        vote_average,
        media_type,
      } = show;

      

      return (
        <li
          key={id}
          onClick={() => {
            navigate("/Details", {
              state: {
                id: id,
                name: name,
                title: title,
                poster: poster_path,
                overview: overview,
                date: release_date,
                serie_date: first_air_date,
                vote: vote_average,
                isMovie: media_type === "movie",
                show,
              },
            })
          }}
        >
          {title}{name}
        </li>
      );
    }
  );

  console.log(results);
  return (
    <div className="search-results">
      <ul>{showList}</ul>
    </div>
  );
};
export default SearchResults;
