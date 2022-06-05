/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import { Link } from "gatsby";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Modal } from "@material-ui/core";
import { colors, xsBreak } from "../_Theme/UpdatedBrandTheme";

const imageStyle = css`
  grid-area: image;
  width: 350px;
  max-width: 40vw;

  ${xsBreak} {
    width: 100%;
    max-width: 400px;
  }
`;

// const contentStyle = css`
//   grid-area: content;
//   display: grid;
//   align-content: center;
// `;

const makeImage = image => (
  <img
    srcSet={image.fluid.srcSet}
    sizes={image.fluid.sizes}
    alt={image.description}
    css={imageStyle}
  />
);

const ProgramAreaBlock = ({
  tagline,
  image,
  summary,
  button,
  // buttonLocalLink,
  extraContentTagline,
  extraContentImage,
  extraContent,
  buttonColor
}) => {
  const programImage = image && makeImage(image);
  const [showDetailPopover, setShowDetailPopover] = useState(false);

  const toggleDetailPopover = () => {
    setShowDetailPopover(!showDetailPopover);
  };

  return (
    <div>
      <Modal id="modal" open={showDetailPopover} onClose={toggleDetailPopover}>
        <div
          css={css`
            color: ${colors.primary.hex};
            background: ${colors.white};
            outline: 0;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -30%);
            width: 70vw;
            padding: 40px;
            display: flex;
            flex-direction: column;
            max-height: 70vh;
            overflow-y: scroll;
          `}
        >
          <h2 style={{ marginLeft: "20px" }}>{extraContentTagline}</h2>
          <div style={{ textAlign: "center" }}>
            {extraContentImage && makeImage(extraContentImage)}
          </div>
          <div style={{ marginTop: "30px", paddingRight: "30px" }}>
            {documentToReactComponents(extraContent && extraContent.json)}
          </div>
        </div>
      </Modal>
      <div
        style={{
          display: "flex",
          height: "auto",
          minHeight: "420px",
          margin: "20px 0",
          padding: "20px",
          background: "#EEE",
          boxShadow: "6px 6px 0px #ccc",
          position: "relative"
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div>{programImage}</div>
          <div
            type="button"
            className={`btn-${buttonColor}`}
            style={{
              marginTop: "2rem",
              position: "absolute",
              bottom: "20px",
              left: "20px"
            }}
            onClick={toggleDetailPopover}
          >
            <p>{button}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            marginTop: "0px"
          }}
        >
          <h3 style={{ color: colors.primary.hex, marginTop: "0px" }}>
            {tagline}
          </h3>
          {summary && (
            <div
              style={{
                fontSize: "14px",
                background: "#fff",
                padding: "0 10px"
              }}
            >
              {documentToReactComponents(summary)}
            </div>
          )}
          {/* {button && buttonLocalLink && (
            <Link
              to={`${buttonLocalLink}`}
              className="btn-pink"
              style={{
                marginTop: "2rem"
              }}
            >
              <p>{button}</p>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProgramAreaBlock;
