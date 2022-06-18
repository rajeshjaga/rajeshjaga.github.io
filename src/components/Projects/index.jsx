import React, { useEffect } from "react";
import useFetch from "../../Api";
import Card from "../card";

const Projects = () => {
  let repoData = useFetch("https://api.github.com/users/rajeshjaga/repos");

  if (repoData.loading === true) {
    return (
      <>
        <h1>check console</h1>
        <h1>loading</h1>;
      </>
    );
  } else {
    return (
      <>
        <div>Data is here</div>
        {console.log(repoData.data)}
      </>
      /* {data.map((item) => {
          return (
            <div className="flex flex-wrap">
              <Card data={item} />
            </div>
          );
        })} */
    );
    {
      console.log(data);
    }
  }
};

export default Projects;
