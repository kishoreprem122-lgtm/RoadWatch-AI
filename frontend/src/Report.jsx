import { useState } from "react";
import "./Report.css";

function Report() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationMessage, setLocationMessage] = useState("");
  const [damageType, setDamageType] = useState("Auto Detect");

  function handleImageChange(event) {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  }

  function getLocation() {
    if (!navigator.geolocation) {
      setLocationMessage(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    setLocationMessage("Getting your location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({
          latitude: latitude,
          longitude: longitude,
        });

        setLocationMessage(
          "Location detected successfully!"
        );
      },
      (error) => {
        console.log(error);

        setLocationMessage(
          "Unable to get your location. Please allow location access."
        );
      }
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/reports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            damageType: damageType,
            latitude: location
              ? location.latitude
              : null,
            longitude: location
              ? location.longitude
              : null,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error(error);

      alert(
        "Unable to submit report. Please make sure the backend is running."
      );
    }
  }

  return (
    <div className="report-page">
      <div className="report-container">

        <h1>Report Road Damage</h1>

        <p className="report-description">
          Upload a photo of the road problem and
          help us make roads safer.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Image Upload */}
          <div className="upload-section">

            <h3>Road Image</h3>

            <label className="upload-button">
              📷 Choose Image

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

            {image && (
              <div className="image-preview">
                <img
                  src={image}
                  alt="Road preview"
                />
              </div>
            )}

          </div>

          {/* Damage Type */}
          <div className="form-group">

            <label>Damage Type</label>

            <select
              value={damageType}
              onChange={(event) =>
                setDamageType(event.target.value)
              }
            >
              <option>Auto Detect</option>
              <option>Pothole</option>
              <option>Road Crack</option>
              <option>Uneven Road</option>
              <option>Broken Pavement</option>
            </select>

          </div>

          {/* Location */}
          <div className="location-box">

            <h3>📍 Location</h3>

            <p>
              Your location will be detected automatically.
            </p>

            <button
              type="button"
              className="location-button"
              onClick={getLocation}
            >
              📍 Get My Location
            </button>

            {location && (
              <div className="coordinates">

                <p>
                  <strong>Latitude:</strong>{" "}
                  {location.latitude}
                </p>

                <p>
                  <strong>Longitude:</strong>{" "}
                  {location.longitude}
                </p>

              </div>
            )}

            {locationMessage && (
              <p className="location-message">
                {locationMessage}
              </p>
            )}

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit-button"
          >
            Submit Report
          </button>

        </form>

      </div>
    </div>
  );
}

export default Report;