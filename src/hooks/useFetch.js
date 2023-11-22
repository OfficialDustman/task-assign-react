import { useEffect, useState } from "react";

function useFetch(url, method, data) {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
        method: method || 'GET',
        body: method && data ? data : undefined,
    })
    .then(response => response.json())
    .then(data => {
        setFetchData(data);
        setLoading(false);
    })
    .catch(error => {
        setError(error);
        setLoading(false);
    });
  }, [url, method, data]);

  const refetch = () => {
    setLoading(true);
    fetch(url, {
        method: method || 'GET',
        body: method && data ? data : undefined,
    })
    .then(response => response.json())
    .then(data => {
        setFetchData(data);
        setLoading(false);
    })
    .catch(error => {
        setError(error);
        setLoading(false);
    });
  };

  return { fetchData, loading, error, refetch };
}

export default useFetch;
// import useFetch from '../../../hooks/useFetch';

    // const { fetchData } = useFetch(
    //     "http://localhost/repos/task-assign/api/user/confirmUser.php",
    //     'POST',
    //     formData
    // );