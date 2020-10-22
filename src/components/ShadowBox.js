/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const ShadowBox = ({
  title,
  MainContent,
  FooterContent,
  Button,
  cardStyle,
  shadowColor,
  wide,
  fullWidth,
  children
}) => {
  return (
    <div
      className="ShadowBox"
      css={css`
        ${wide || FooterContent ? `max-width: 400px;` : ""}
        ${fullWidth ? `max-width: 1100px; margin: 1rem auto;` : ""}
        ${shadowColor ? `box-shadow: 6px 6px 0px rgb(${shadowColor});` : ""}
        ${cardStyle}
      `}
    >
      <div className="ShadowBoxContent">
        {title && (
          <h3
            css={css`
              margin-top: 0;
            `}
          >
            {title}
          </h3>
        )}
        {MainContent}
        {children}
        {Button}
      </div>
      {FooterContent && (
        <div
          className="ShadowBoxFooter"
          css={css`
            ${shadowColor
              ? `
            > ul {
              background-color: rgba(${shadowColor}, .1);
            }
          `
              : ""}
          `}
        >
          {FooterContent}
        </div>
      )}
    </div>
  );
};

ShadowBox.propTypes = {
  title: PropTypes.string,
  MainContent: PropTypes.node,
  FooterContent: PropTypes.node,
  Button: PropTypes.node,
  cardStyle: PropTypes.string, // css
  shadowColor: PropTypes.string, // hex code
  wide: PropTypes.bool,
  fullWidth: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default ShadowBox;
