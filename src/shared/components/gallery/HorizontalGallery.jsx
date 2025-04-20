import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./horizontalGallery.css";

export default function HorizontalGallery({
  items,
  height = "200px",
  width = "auto",
  scrollbarColor = "#ccc",
  onImageClick,
}) {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullscreenIndex !== null) {
        if (e.key === "ArrowLeft") {
          navigateFullscreen(-1);
        } else if (e.key === "ArrowRight") {
          navigateFullscreen(1);
        } else if (e.key === "Escape") {
          closeFullscreen();
        }
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullscreenIndex]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe hacia la izquierda
      navigateFullscreen(1);
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe hacia la derecha
      navigateFullscreen(-1);
    }

    // Reiniciar valores de touch
    setTouchStartX(0);
    setTouchEndX(0);
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
        <div className="fullscreen-overlay" 
          onClick={closeFullscreen} 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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