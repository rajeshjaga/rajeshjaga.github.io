import { useState, useEffect } from "react";
import Axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchedData = () => {
    Axios(url)
      .then((res) => {
        setData(res);
        setLoading(!loading);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchedData();
  }, []);
  return { loading, error, data };
};

export default useFetch;
