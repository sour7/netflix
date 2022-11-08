import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Up Comming " fetchUrl={requests.requestUpcomming} />
      <Row rowID="2" title="Tranding " fetchUrl={requests.requestTranding} />
      <Row rowID="3" title="Top Rated " fetchUrl={requests.requestTopRated} />
      <Row rowID="4" title="Horror" fetchUrl={requests.requestHorror} />
    </div>
  );
};

export default Home;
