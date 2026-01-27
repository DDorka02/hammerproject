import "./Sor.css";

// Items tömb itt van most
export const items = [
  { src: "/kepek/first.png", col: 3, row: 2, fit: "contain"},
  { src: "/kepek/second.png", col: 1, row: 1, fit: "contain"},
  { src: "/kepek/third.png", col: 1, row: 1, fit: "contain"},

  { src: "/kepek/create.png", col: 1, row: 2, fit: "contain"},
  { src: "/kepek/print.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/tecnology.png", col: 1, row: 1, fit: "contain" }, 
  { src: "/kepek/phone.png", col: 1, row: 1, fit: "contain" },

  { src: "/kepek/newspaper.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/phone2.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/house.png", col: 1, row: 2, fit: "contain" },
  { src: "/kepek/merch.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/drink.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/buzz.png", col: 1, row: 2, fit: "contain" },
  { src: "/kepek/reserve.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/smink.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/cow.png", col: 1, row: 2, fit: "contain" },
  { src: "/kepek/string.png", col: 3, row: 1, fit: "contain" },

  { src: "/kepek/cash.png", col: 1, row: 1, fit: "contain" }, 
  { src: "/kepek/lelosi.png", col: 2, row: 1, fit: "contain" },
  { src: "/kepek/layers.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/dog.png", col: 1, row: 2, fit: "contain" }, 
  { src: "/kepek/breakfast.png", col: 2, row: 2, fit: "contain" },
  { src: "/kepek/inhouse.png", col: 1, row: 2, fit: "contain" }, 

  { src: "/kepek/ce.png", col: 1, row: 2, fit: "contain" },
  { src: "/kepek/isana.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/stada.png", col: 1, row: 1, fit: "contain" },
  { src: "/kepek/multi.png", col: 1, row: 2, fit: "contain" },
  { src: "/kepek/trusted.png", col: 2, row: 1, fit: "contain" },

  { src: "/kepek/map.png", col: 3, row: 2, fit: "contain" },
  { src: "/kepek/hammer.png", col: 1, row: 2, fit: "contain"}, 
  { src: "/kepek/finish.png", col: 4, row: 1, fit: "contain" },
];

const Sor = ({ src, col, row, fit }) => {
  return (
    <div
      className="grid-item"
      style={{
        gridColumn: `span ${col}`,
        gridRow: `span ${row}`,
      }}
    >
      <img
        src={src}
        alt=""
        className={fit === "contain" ? "contain" : ""}
      />
    </div>
  );
};

export default Sor;