/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import {
  smBreak,
  lgCardBreak,
  xsBreak,
  h2Subtitle,
  colors
} from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";

const DefaultTitleAreaContent = ({ subtitle, title }) => {
  return (
    <GridSingle
      containerStyle={css`
        width: 100%;
        padding: 0;
      `}
      wideContent
    >
      <h2
        css={css`
          max-width: 700px;
          margin: 0;
          color: ${colors.subdued.hex};
          ${lgCardBreak} {
            max-width: 600px;
          }

          ${smBreak} {
            max-width: 500px;
          }

          ${xsBreak} {
            max-width: 400px;
          }

          ${h2Subtitle}
        `}
      >
        <div>
          <span
            css={css`
              line-height: 1.4;
              ${!subtitle && `color: ${colors.primary.hex}`}
            `}
          >
            {subtitle ||
              "Building knowledge systems that hold value in the public interest"}
          </span>
        </div>
      </h2>
      <h1
        css={css`
          display: grid;
          margin: 0;
          justify-self: right;
          align-self: end;
          color: ${colors.subdued.hex};
        `}
      >
        {title || ""}
      </h1>
    </GridSingle>
  );
};

DefaultTitleAreaContent.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default DefaultTitleAreaContent;
