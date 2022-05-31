/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  buttonLocalLink
}) => {
  const programImage = image && makeImage(image);
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "auto",
          margin: "20px 0",
          padding: "20px",
          background: "#EEE",
          boxShadow: "6px 6px 0px #ccc"
        }}
      >
        <div>{programImage}</div>
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
          {button && buttonLocalLink && (
            <Link
              to={`${buttonLocalLink}`}
              className="btn-pink"
              style={{
                marginTop: "2rem"
              }}
            >
              <p>{button}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramAreaBlock;
