import { useState } from "react";
import { axiosGet, axiosPost, axiosPatch } from "../lib/axiosUtility";

/**
 * Custom hook for all get requests to the backend server
 * Note, this has replaced previous hook which was limited to executing on mount through a useEffect
 * This caters for useEffect use and user acions such as button click:
 * 
 * 1. e.g. button click:
   
    const {data, getData } = useGetBackendData() 
    const handleAction = async () => {
      await getData({ relativeUri: "/api/auto-fetch" });
    };
  
 * 2. Applied on mount using useEffect:

    const { data, loading, error, getData } = useGetBackendData();
    useEffect(() => {
      getData({ relativeUri: "/api/auto-fetch" }) // Automatically fetch data on mount
    }, [getData]);

  IMPORTANT: THIS IS A HOOK FOR STATE MANAGEMENT, IMMEDIATE ACCESS OF THE 
  DATA FROM THE GETDATA FUNCTION IS NOT GOOD DESIGN.

 */

const useGetBackendData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // note, using an object parameter, which improves readability, allows any order and optional parameters
  const getData = async ({ method = "GET", relativeUri, payload = null }) => {
    if (!relativeUri) {
      throw new Error("A relativeUri must be provided.");
    }

    // console.log("relativeUrl", relativeUri);

    setLoading(true);
    setError(null);
    try {
      let response;
      if (method === "GET") {
        response = await axiosGet(relativeUri);
      } else if (method === "POST") {
        response = await axiosPost(relativeUri, payload); // returns {success,data,msg}
      } else if (method === "PATCH") {
        response = await axiosPatch(relativeUri, payload); // returns {success,data,msg}
        console.log("response", response);
      } else {
        throw new Error(`Unsupported HTTP method ${method}`);
      }
      if (response.success) {
        // console.log(`hook received data for url ${relativeUri}`, response.data);
        setData(response.data);
        return;
      } else {
        setError(response.msg);
        return null; // quick exit, data is stored in other state variable
      }
    } catch (err) {
      setError(err.message);
      console.log("Error in hook", err.message);
      return null; // quick exit, data is stored in other state variable
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getData };
};

export default useGetBackendData;
