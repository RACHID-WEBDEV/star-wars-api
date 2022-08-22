/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getSingleMovie } from "../redux/moviesActions";
import HeroSection from "../component/HeroSection";
import DataTable from "react-data-table-component";
import AnimateArrow from "../component/AnimateArrow";
import Spinner from "../component/Spinner";
import columns from "../component/data/TableHeader";
import Skeleton from "../component/Skeleton";

function Home(props) {
  const [selectedMovie, setSelectedMovie] = useState("");
  let tempMovies = useRef();
  let dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies);
  const selectedData = useSelector((state) => state.movies.selected_movie);
  const { isLoading, movies } = moviesData;

  function getAllMovies() {
    dispatch(fetchMovies());
  }

  tempMovies.current = getAllMovies;

  useEffect(() => {
    tempMovies.current();
  }, [props]);

  function handleMovieSelect(e) {
    // console.log("Selected movie", e.target.value);
    const movieSel = e.target.value;
    setSelectedMovie(movieSel);
    dispatch(getSingleMovie(e.target.value));
  }

  const getFimsLists = (allmovies) => {
    const moviesList = allmovies
      ? Object.keys(allmovies).map((key) => ({
          name: allmovies[key]["title"],
        }))
      : "";

    return moviesList ? (
      <>
        <div className="mb-1">
          <div className="relative z-0 mb-2 w-full group">
            <select
              onChange={(e) => handleMovieSelect(e)}
              value={selectedMovie}
              className="block mt-1  appearance-none transition ease-in-out focus:outline-none focus:ring-0 peer py-3 px-4 w-full text-base lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
            >
              <option value="">Select The Best Of Star War Movies</option>
              {moviesList.map((movie, key) => (
                <option key={key} value={key}>
                  {movie.name}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                width={12}
                height={8}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
              >
                <path
                  d="m1 1.5 5 5 5-5"
                  stroke="#000000"
                  strokeWidth={1.667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <AnimateArrow />
        </div>
      </>
    ) : (
      <Spinner />
    );
  };

  const renderMovieTable = (data) => {
    console.log("Selected data films = ", data);
    return data.map((movie, index) => {
      return movie;
    });
  };

  return (
    <div className="App">
      <HeroSection>{getFimsLists(movies.results)}</HeroSection>
      <>
        {selectedData && !isLoading ? (
          <div className="p-3 lg:p-10 bg-black">
            <div className="max-w-6xl flex flex-col items-center ">
              <h1 className="text-gray-100 text-left text-3xl mb-1">
                <b>Movie Title :</b> {selectedData.title}
              </h1>
              <div className="max-w-3xl ">
                <marquee
                  behavior="scroll"
                  scrollamount={7}
                  width="100%"
                  direction="left"
                >
                  <h4 className="text-gray-100 text-xl mb-3">
                    {selectedData.opening_crawl}
                  </h4>
                </marquee>
              </div>
            </div>

            <div className="flex items-center justify-center py-8">
              <div className="max-w-5xl rounded shadow overflow-x-auto">
                <div className="w-full lg:min-w-[1024px]">
                  <DataTable
                    title="Characters In Movie :"
                    columns={columns}
                    data={renderMovieTable(selectedData?.characters)}
                    defaultSortFieldId={2}
                    sortIcon={
                      <svg
                        className="text-white ml-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="450px"
                    highlightOnHover
                    pointerOnHover
                    striped
                    // selectableRows
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
      </>
    </div>
  );
}

export default Home;
