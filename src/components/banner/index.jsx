import Effect from "../../components/effect";
import { Link } from "react-router-dom";
import "./style.css";

export default function Banner({
  links,
  title,
  description,
  button,
  background,
}) {
  return (
    <div
      id="banner"
      style={{
        backgroundImage: `#00100f, url(${background})`,
      }}
    >
      <div
        id="bannerContainer"
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          #00100f 23.79%,
          rgba(0, 16, 15, 0.72) 100%
        ), url(${background})`,
        }}
      >
        <Effect left="20%" top="25%" />
        <Effect className="inActiveEffect" left="70%" top="35%" />
        <div id="context">
          <div className="link">
            <Link to="/">Главная</Link>
            <span> / </span>
            <Link className="active" to="/club-cards">
              {links.link1}
            </Link>
            {links.link2 && (
              <>
                <span> / </span>
                <Link className="active" to="/club-cards">
                  {links.link2}
                </Link>
              </>
            )}
          </div>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <button className="btn">{button}</button>
        </div>
      </div>
    </div>
  );
}
