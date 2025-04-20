import { useState } from "react";
import PropTypes from "prop-types";
import "./HorizontalGallery.css";

export default function HorizontalGallery({
  items,
  height = "200px",
  width = "auto",
  scrollbarColor = "#ccc",
  onImageClick,
}) {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const openFullscreen = (index) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const navigateFullscreen = (direction) => {
    if (fullscreenIndex !== null) {
      const newIndex =
        (fullscreenIndex + direction + items.length) % items.length;
      setFullscreenIndex(newIndex);
    }
  };

  return (
    <>
      <div className="horizontal-gallery" style={{ height, "--scrollbar-color": scrollbarColor }}>
        {items.map((item, index) => (
          <img
            key={index}
            src={item.original}
            alt={`Imagen ${index + 1}`}
            className="gallery-image"
            style={{ height, width }}
            onClick={() => {
              openFullscreen(index);
              if (onImageClick) onImageClick(item);
            }}
          />
        ))}
      </div>

      {fullscreenIndex !== null && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <span className="fullscreen-close" onClick={closeFullscreen}>
            ×
          </span>
          <button
            className="fullscreen-nav fullscreen-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateFullscreen(-1);
            }}
          >
            ‹
          </button>
          <img
            src={items[fullscreenIndex].original}
            alt={`Imagen ${fullscreenIndex + 1}`}
            className="fullscreen-img"
          />
          <button
            className="fullscreen-nav fullscreen-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateFullscreen(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

HorizontalGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
    })
  ).isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  scrollbarColor: PropTypes.string,
  onImageClick: PropTypes.func,
};