import "./Oldal.css";
import Sor, { items } from "./Sor";

const Oldal = () => {
  return (
    <article className="main">
      <div className="grid">
        <div className="logo-overlay">
          <img src="/kepek/logo.png" alt="Logo" />
        </div>
        
        {items.map((item, i) => (
          <Sor 
            key={i}
            src={item.src}
            col={item.col}
            row={item.row}
            fit={item.fit}
          />
        ))}
      </div>
    </article>
  );
};

export default Oldal;