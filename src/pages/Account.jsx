import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="hidden sm:block absolute w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef8-0b026ec133fe/IN-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className=" bg-black/60 fixed left-0 top-0 w-full h-[550px]"></div>
        <h1 className="text-white absolute top-[20%] left-4 text-5xl">
          My Favourite
        </h1>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
