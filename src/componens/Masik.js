import { item } from "./Items";
import "./Oldal.css";
import "./Item.css";

export default function Masik() {
  return (
    <article className="main">
      <div className="grid">
        {item.map((item, i) => (
          <div className={`grid-item grid-item--width${item.width} grid-item--height${item.height} ${item.content?.compact ? 'compact-item' : ''}`} key={i}>
            {item.type === "image" ? (
              <div >
                <img src={item.src} alt="" />
              </div>
            ) : (
            <div className={`custom-content ${item.content.bgClass} layout-${item.content.layout} ${item.content.static ? 'is-static' : ''}`}>
              <h2>{item.content.title}</h2>
              {item.content.subtitle && <p>{item.content.subtitle}</p>}
            </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
