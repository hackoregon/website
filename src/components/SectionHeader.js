/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { lgCardBreak, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";

const SectionHeader = ({
  title,
  subtitle,
  summary,
  big,
  wideContent,
  shrinkToColumn,
  center
}) => (
  <div
    css={css`
      display: grid;
      margin: 0 auto;
      width: 100%;
      max-width: ${wideContent ? "1100px" : "1100px"};
      padding: ${wideContent ? "0 40px" : ""};
      justify-content: ${center ? "center" : "start"};

      ${lgCardBreak} {
        max-width: 900px;
        ${shrinkToColumn ? "width: max-content;" : ""}
      }

      ${smBreak} {
        padding: ${wideContent ? "0" : "0 10px"};
        justify-content: center;
      }

      ${xsBreak} {
        padding: 0 20px;
        width: auto;
      }
    `}
  >
    {title && (
      <h2
        className={big ? "h-1" : "h-2"}
        css={css`
          max-width: 600px;
          margin-top: 0;
        `}
      >
        {title}
      </h2>
    )}
    {subtitle && (
      <h3
        className={big ? "h-2" : "h-3"}
        css={css`
          margin-top: -20px;
          max-width: 600px;
        `}
      >
        {subtitle}
      </h3>
    )}
    {summary && (
      <div
        css={css`
          max-width: 600px;
        `}
      >
        {documentToReactComponents(summary)}
      </div>
    )}
  </div>
);

export default SectionHeader;
