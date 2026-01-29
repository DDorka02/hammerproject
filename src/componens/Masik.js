import { items } from "./Item";
import { useNavigate } from 'react-router-dom';
import "./Masik.css";

export default function Masik() {
  const navigate = useNavigate();

  return (
    <article className="main">
      <div className="grid2">
        
        {items.map((item, i) => (
          <div
            className={`grid-item grid-item--width${item.width} grid-item--height${item.height} ${item.content?.compact ? 'compact-item' : ''}`}
            key={i}
          >
            {item.type === "image" ? (
              <div
  className="image-container"
  onClick={() => item.link && navigate(item.link)}
  style={{ cursor: item.link ? "pointer" : "default" }}
>
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
<div
  className={`custom-content 
    ${item.content.bgClass} 
    layout-${item.content.layout} 
    ${item.content.compact ? 'compact' : ''} 
    ${item.content.static ? 'is-static' : ''}`}
>
  <h2>{item.content.title}</h2>

  {item.content.subtitle && <p>{item.content.subtitle}</p>}

  {item.content.lines && (
    <div>
      {item.content.lines.map((line, idx) => (
        <p key={idx}>{line || '\u00A0'}</p>
      ))}
    </div>
  )}
</div>


            )}
          </div>
        ))}
      </div>
    </article>
  );
}
