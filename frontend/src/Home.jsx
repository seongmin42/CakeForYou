/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [images, setImages] = useState(null);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const urls = [];
    const reader = new FileReader();
    reader.onload = () => {
      urls.push(reader.result);
      setImages([...images, ...urls]);
    };
    for (let i = 0; i < files.length; i += 1) {
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div className="Home">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
      />
      {images.length > 0 && (
        <Carousel>
          {images.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Uploaded Image ${index}`} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Home;
