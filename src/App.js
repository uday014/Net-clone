import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Top /> */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="TopRated" fetchURL={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchURL={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchURL={requests.fetchComedyMovies} />
      <Row title="HorrorMovie" fetchURL={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchURL={requests.fetchDocumantaries} />
    </div>
  );
};

export default App;
