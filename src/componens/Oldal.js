import "./Oldal.css";
import "./Item.css";
import { items } from "./Item";
import { useNavigate } from "react-router-dom";
import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';

const Oldal = () => {
  const navigate = useNavigate();
  const [useMasonry, setUseMasonry] = useState(true);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [navActivated, setNavActivated] = useState(false);
  const [currentLang] = useState("EN");

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

  const languages = [
    { code: "EN", name: "ENGLISH" },
    { code: "DE", name: "GERMAN" },
    { code: "HU", name: "HUNGARIAN" },
    { code: "CZ", name: "CZECH" },
    { code: "SK", name: "SLOVAK" }
  ];

  // Changed: now shows all items on mobile, not filtering out width 4
  const masonryItems = useMasonry ? items : items;

  const handleLanguageClick = () => {
    if (!navActivated) {
      setNavActivated(true); 
    } else {
      setLangMenuOpen(!langMenuOpen); 
      setNavMenuOpen(false);
    }
  };

  const handleNavClick = () => {
    setNavMenuOpen(!navMenuOpen);
    setLangMenuOpen(false);
  };

  const closeLangMenu = () => setLangMenuOpen(false);
  const closeNavMenu = () => setNavMenuOpen(false);

  const handleNavItemClick = (page) => {
    if (page === "HOME") navigate("/");
    closeNavMenu();
  };

  const renderItem = (item, i) => {
    return (
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
            className={`custom-content ${item.content.bgClass} layout-${item.content.layout} ${item.content.compact ? 'compact' : ''} ${item.content.bgImage ? 'has-bg-image' : ''} ${item.content.static ? 'is-static' : ''}`}
            style={item.content.bgImage ? { '--bg-image': `url(${item.content.bgImage})` } : {}}
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
    );
  };

  return (
    <article className="main">

      <div className={`nav-controls ${navActivated ? 'active' : ''}`}>
        {!navActivated && (
          <div className="logo-center">
            <img src="/kepek/logo.png" alt="Hammer Agency" />
          </div>
        )}

        <button className="lang-trigger" onClick={handleLanguageClick}>
          {currentLang} ∨
        </button>

        {navActivated && !langMenuOpen && (
          <div className="logo-nav">
            <img src="/kepek/logo.png" alt="Hammer Agency" />
          </div>
        )}

        <button
          className={`hamburger-btn ${navActivated ? 'visible' : ''}`}
          onClick={handleNavClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {langMenuOpen && (
        <div className="lang-menu-overlay">
          <div className="lang-menu-content">
            <button className="close-btn" onClick={closeLangMenu}>CLOSE</button>
            <ul className="lang-list">
              {languages.map((lang) => (
                <li key={lang.code} className={currentLang === lang.code ? 'active' : ''}>
                  {lang.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {navMenuOpen && (
        <div className="nav-menu-overlay">
          <button className="close-nav-btn" onClick={closeNavMenu}>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-list">
            <li onClick={() => handleNavItemClick("HOME")}>HOME</li>
            <li onClick={() => handleNavItemClick("PORTFOLIO")}>PORTFOLIO</li>
            <li onClick={() => handleNavItemClick("CLIENTS")}>CLIENTS</li>
            <li onClick={() => handleNavItemClick("CONTACT")}>CONTACT</li>
          </ul>
        </div>
      )}

      {useMasonry ? (
        <>


          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
          >
            {masonryItems.map((item, i) => renderItem(item, i))}
          </Masonry>
        </>
      ) : (
        <div className="grid">
          {items.map((item, i) => renderItem(item, i))}
        </div>
      )}
    </article>
  );
};

export default Oldal;