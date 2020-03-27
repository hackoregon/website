/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import { smBreak, lgCardBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";

const DefaultTitleAreaContent = ({ subtitle, title, wideContent }) => {
  return (
    <GridSingle
      containerStyle={css`
        width: 100%;
        padding: 0;
      `}
      wideContent={wideContent}
    >
      <h2
        css={css`
          max-width: 700px;
          margin: 0;
          ${lgCardBreak} {
            max-width: 600px;
          }

          ${smBreak} {
            max-width: 500px;
          }

          ${xsBreak} {
            max-width: 400px;
          }
        `}
      >
        {subtitle || ""}
      </h2>
      <h1
        css={css`
          display: grid;
          margin: 0;
          justify-self: right;
          align-self: end;
        `}
      >
        {title || ""}
      </h1>
    </GridSingle>
  );
};

DefaultTitleAreaContent.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  wideContent: PropTypes.bool
};

export default DefaultTitleAreaContent;
