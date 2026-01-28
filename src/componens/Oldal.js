import "./Oldal.css";
import "./Item.css";
import { items } from "./Item";

const Oldal = () => {
  return (
    <article className="main">
      <div className="grid">
        <div className="logo-overlay">
          <img src="/kepek/logo.png" alt="Logo" />
        </div>
        
        {items.map((item, i) => (
          <div
            className={`grid-item grid-item--width${item.width} grid-item--height${item.height}`}
            key={i}
          >
            {item.type === "image" ? (
              <img 
                src={item.src} 
                alt="" 
              />
            ) : (
              <div className={`custom-content ${item.content.bgClass} layout-${item.content.layout} ${item.content.wide ? 'wide' : ''}`}>
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
};

export default Oldal;