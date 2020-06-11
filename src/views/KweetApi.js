import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";


const KweetApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  const { getIdTokenClaims } = useAuth0();

  const callApi = async () => { 
    try {
      const token = await getTokenSilently();
      const idToken = await getIdTokenClaims();

      console.log("Id token: " + idToken.sub);
      const response = await fetch("http://localhost:7000/kweet-api/kweet",{
        headers: {
          'Authorization': `Bearer ${idToken.__raw}`
        }
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>KweetApi API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default KweetApi;
