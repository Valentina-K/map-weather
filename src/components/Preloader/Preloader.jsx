import "./Preloader.css";
export const Preloader = () => {
  return (
    <div className="wrap2">
      <div className="boxcube2">
        <div
          className="boxfront face1"
          style={{ backgroundColor: "rgb(198, 191, 30)" }}
        >
          ☀
        </div>
        <div
          className="boxback face1"
          style={{ backgroundColor: "rgb(198, 191, 30)" }}
        >
          ☀
        </div>
        <div
          className="boxtop face1"
          style={{ backgroundColor: "rgb(198, 191, 30)" }}
        >
          ☀
        </div>
        <div
          className="boxbottom face1"
          style={{ backgroundColor: "rgb(198, 191, 30)" }}
        >
          ☀
        </div>
        <div
          className="boxleft face1"
          style={{ backgroundColor: "rgb(198, 191, 30)" }}
        >
          <div className="face2"></div>☀
        </div>
        <div
          className="boxright face1"
          style={{ backgroundColor: "rgb(198, 191, 30)" }}
        >
          <div className="face2"></div>☀
        </div>
      </div>
    </div>
  );
};
