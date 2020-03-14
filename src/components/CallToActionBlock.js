/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import DividerLine from "./DividerLine";
import { colors, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const imageStyle = css`
  width: 400px;
  max-width: 40vw;

  ${xsBreak} {
    width: 100%;
    max-width: 400px;
  }
`;

const contentStyle = css`
  display: grid;
  align-content: center;
`;

const makeImage = image => (
  <img
    srcSet={image.fluid.srcSet}
    sizes={image.fluid.sizes}
    alt={image.description}
    css={imageStyle}
  />
);

const CallToActionBlock = ({
  tagline,
  summary,
  button,
  image,
  reverseLayout,
  big,
  buttonColor,
  dividerColor
}) => {
  const CTAimage = image && makeImage(image);

  return (
    <div>
      <div
        css={css`
          padding: 0 70px;
          ${smBreak} {
            padding: 0 35px;
          }
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-column-gap: 80px;
            width: 100%;
            max-width: 1230px;
            margin: 0 auto;
            align-items: center;

            ${xsBreak} {
              grid-template-columns: auto;
              grid-template-rows: repeat(2, auto);
              grid-row-gap: 80px;
              justify-items: center;
            }
          `}
        >
          {image && reverseLayout && CTAimage}
          <div css={contentStyle}>
            {tagline && (
              <h2
                className={big && "h-1"}
                css={css`
                  margin: 0;
                `}
              >
                {tagline}
              </h2>
            )}
            {summary && (
              <div
                css={css`
                  margin: 40px 0;
                `}
              >
                {documentToReactComponents(summary)}
              </div>
            )}
            {button && (
              <button type="button" className={`btn-${buttonColor}`}>
                <p>{button}</p>
              </button>
            )}
          </div>
          {image && !reverseLayout && CTAimage}
        </div>
      </div>
      <DividerLine
        hexColor={colors[dividerColor].hex}
        cssStyle={css`
          margin-top: -60px;
          transform: ${reverseLayout ? "rotate(10deg)" : "rotate(0deg)"};
          margin-left: ${reverseLayout ? "-14px" : "0px"};
          margin-bottom: -50px;
        `}
      />
      <div
        className="DividerLinePadding"
        css={css`
          border-top: 10px solid ${colors[dividerColor].hex};
          margin-bottom: -40px;
        `}
      />
    </div>
  );
};

export default CallToActionBlock;
