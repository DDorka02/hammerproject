import { item } from "./Items";
import "./Oldal.css";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';

export default function Masik() {
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
    item.map((item, i) => (
      <div 
        className={`grid-item grid-item--width${item.width} grid-item--height${item.height} ${item.content?.compact ? 'compact-item' : ''}`} 
        key={i}
        onClick={() => item.link && navigate(item.link)}
        style={{ cursor: item.link ? "pointer" : "default" }}
      >
        {item.type === "image" ? (
          <div>
            <img src={item.src} alt="" />
          </div>
        ) : (
          <div className={`custom-content ${item.content.bgClass} layout-${item.content.layout} ${item.content.static ? 'is-static' : ''}`}>
            <h2>{item.content.title}</h2>
            {item.content.subtitle && <p>{item.content.subtitle}</p>}
          </div>
        )}
      </div>
    ))
  );

  return (
    <article className="main">
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
}