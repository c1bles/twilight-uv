import React from "react";
import { Helmet } from "react-helmet";
function Nopage() {
  return (
    <>
      {!localStorage.getItem("cloakFavicon") && (
        <Helmet>
          <title>404 - Twilight</title>
        </Helmet>
      )}
      <div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="text-2xl">Awh page not found :≺</p>
          <a href="/" className="btn btn-primary mt-5">
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}

export default Nopage;
