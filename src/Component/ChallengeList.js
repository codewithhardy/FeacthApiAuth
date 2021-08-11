import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Challenge from "./Challenge";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJhZG1pbiIsInVzZXJfbmFtZSI6ImFkbWluM0BnbWFpbC5jb20iLCJ1aWQiOiI2MTBiY2QwYWIwYWMwMjVmZDlkNTAwYTUiLCJpYXQiOjE2Mjg2Njc0OTAsImV4cCI6MTYzMTI1OTQ5MCwiaXNzIjoiYWJjZCJ9.EoFJeWNoQ1eR9Z58DcQIKdGp8VXo2DW47TcFy_yYzjA";

const apiUrl = "http://174.138.21.74:8000/admin/challenge/";

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

function ChallengeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      const request = await authAxios.get(`${apiUrl}`);
      setData(request.data.results);
      console.warn(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default ChallengeList;
