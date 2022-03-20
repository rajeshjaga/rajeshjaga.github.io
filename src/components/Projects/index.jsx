import React, { useEffect } from "react";
import useFetch from "../../Api";
import Card from "../card";
const Projects = () => {
  let repoData = useFetch("https://api.github.com/users/rajeshjaga/repos");
  if (repoData.data !== null && repoData.data !== undefined) {
    let { data } = repoData.data;
    return (
      <>
        <h1>check console</h1>
        {data.map((item) => {
          return (
            <div className="flex flex-wrap">
              <Card data={item} />
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>loading</h1>;
  }
};
export default Projects;
