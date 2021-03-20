import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
function App() {
  const [imagesRendered, updateImagesRendered] = useState([]);
  function renderImages(responseData) {
    const imagesArray = responseData.map((imageObject) => {
      console.log(imageObject);
      const imageUrl = imageObject.download_url;
      return (
        <div className="col-sm-12 col-md-4 col-lg-4 my-4">
          <img src={imageUrl} className="mb" width="250" height="150" />
        </div>
      );
    });
    updateImagesRendered(imagesArray);
  }
  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=9"
    );

    renderImages(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h3>
        <strong>Photographers showcase</strong>
      </h3>

      <div className="row">{imagesRendered}</div>
    </div>
  );
}

export default App;
