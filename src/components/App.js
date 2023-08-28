import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.ok) {
          const data = await response.json();
          setDogImage(data.message);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch dog image");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchDogImage();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
 





