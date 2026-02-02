import { item } from "./Items";
import "./Masik.css";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";

export default function Masik() {
  const navigate = useNavigate();
  const [useMasonry, setUseMasonry] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setUseMasonry(window.innerWidth <= 1024);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    480: 2
  };

  const renderItem = (itm, i) => (
    <div
      key={i}
      className={`masik-item masik-item--w${itm.width} masik-item--h${itm.height} ${itm.content?.compact ? 'compact-item' : ''}`}
      onClick={() => itm.link && navigate(itm.link)}
      style={{ cursor: itm.link ? "pointer" : "default" }}
    >
      {itm.type === "image" ? (
        <img src={itm.src} alt="" />
      ) : (
        <div
          className={`masik-content ${itm.content.bgClass} layout-${itm.content.layout} ${itm.content.compact ? 'compact' : ''}`}
        >
          <h2>{itm.content.title}</h2>
          {itm.content.subtitle && <p>{itm.content.subtitle}</p>}
          {itm.content.lines && (
            <div>
              {itm.content.lines.map((line, idx) => (
                <p key={idx}>{line || '\u00A0'}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <article className="masik-main">
      {useMasonry ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masik-masonry"
          columnClassName="masik-masonry-column"
        >
          {item.map((itm, i) => renderItem(itm, i))}
        </Masonry>
      ) : (
        <div className="masik-grid">
          {item.map((itm, i) => renderItem(itm, i))}
        </div>
      )}
    </article>
  );
}