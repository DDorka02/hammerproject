import "./Oldal.css";
import "./Item.css";
import { items } from "./Item";
import { useNavigate } from "react-router-dom";
import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';

const Oldal = () => {
  const navigate = useNavigate();
  const [useMasonry, setUseMasonry] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setUseMasonry(window.innerWidth <= 1024);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    480: 2
  };

  const renderItems = () => (
    items.map((item, i) => (
      <div
        className={`grid-item grid-item--width${item.width} grid-item--height${item.height} ${item.content?.compact ? 'compact-item' : ''}`}
        key={i}
      >
        {item.type === "image" ? (
          <div className="image-container" onClick={() => item.link && navigate(item.link)} style={{ cursor: item.link ? "pointer" : "default" }}>
            <img src={item.src} alt="" />
            {item.overlay && (
              <div className="image-overlay">
                <div className="image-overlay-content">
                  <div className="image-overlay-text">{item.overlay}</div>
                  {item.subtitle && (
                    <div className="image-overlay-subtitle">{item.subtitle}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={`custom-content ${item.content.bgClass} layout-${item.content.layout} ${item.content.compact ? 'compact' : ''} ${item.content.bgImage ? 'has-bg-image' : ''} ${item.content.static ? 'is-static' : ''}`} style={item.content.bgImage ? { '--bg-image': `url(${item.content.bgImage})` } : {}}>
            <h2>{item.content.title}</h2>
            {item.content.subtitle && <p>{item.content.subtitle}</p>}
            {item.content.lines && (
              <div>
                {item.content.lines.map((line, idx) => (<p key={idx}>{line || '\u00A0'}</p>))}
              </div>
            )}
          </div>
        )}
      </div>
    ))
  );

  return (
    <article className="main">
      <div className="logo-overlay">
        <img src="/kepek/logo.png" alt="Logo" />
      </div>
      
      {useMasonry ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {renderItems()}
        </Masonry>
      ) : (
        <div className="grid">
          {renderItems()}
        </div>
      )}
    </article>
  );
};

export default Oldal;