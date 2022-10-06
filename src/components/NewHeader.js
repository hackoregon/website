/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { navigate, Link } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import {
  colors,
  smBreak,
  xsBreak,
  maxContentWidth,
  noHover
} from "../_Theme/UpdatedBrandTheme";

const headerHeight = "70px";
const headerContainer = css`
  z-index: 100;
  margin-top: 20px;
`;
const headerGrid = css`
  height: ${headerHeight};
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  padding: 0 2rem;
  ${xsBreak} {
    padding: 0 1rem;
  }
  ${maxContentWidth}
`;
const logoContainer = css`
  a {
    img {
      height: 60px !important;
      margin-top: 8px;
    }
  }
`;

const NewHeader = () => {
  const goTo = path => {
    navigate(path);
  };

  return (
    <div css={headerContainer}>
      <div css={headerGrid}>
        <div css={[logoContainer]}>
          <Link to="/" css={noHover}>
            <Logo type="standardLogo" />
          </Link>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-self: end;
            max-width: 800px;
            width: 60vw;
            justify-content: space-between;
            align-content: center;

            ${smBreak} {
              display: none;
            }
          `}
        >
          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
          >
            <AnchorLink to="/#about">
              <div style={{ display: "flex" }}>
                <ArrowRightIcon
                  style={{
                    fontSize: 60,
                    marginLeft: "30px",
                    marginRight: "-10px"
                  }}
                  htmlColor={colors.purple.hex}
                />
                <h3
                  style={{
                    color: colors.primary.hex,
                    marginTop: "14px"
                  }}
                >
                  About
                </h3>
              </div>
            </AnchorLink>
          </button>

          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
          >
            <AnchorLink to="/#programs">
              <div style={{ display: "flex" }}>
                <ArrowRightIcon
                  style={{
                    fontSize: 60,
                    marginLeft: "30px",
                    marginRight: "-10px"
                  }}
                  htmlColor={colors.pink.hex}
                />
                <h3
                  style={{
                    color: colors.primary.hex,
                    marginTop: "14px"
                  }}
                >
                  Programs
                </h3>
              </div>
            </AnchorLink>
          </button>

          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
          >
            <AnchorLink to="/about">
              <div style={{ display: "flex" }}>
                <ArrowRightIcon
                  style={{
                    fontSize: 60,
                    marginLeft: "30px",
                    marginRight: "-10px"
                  }}
                  htmlColor={colors.yellow.hex}
                />
                <h3
                  style={{
                    color: colors.primary.hex,
                    marginTop: "14px"
                  }}
                >
                  Team
                </h3>
              </div>
            </AnchorLink>
          </button>

          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
            onClick={() => {
              goTo("/#apply");
            }}
          >
            <div style={{ display: "flex" }}>
              <ArrowRightIcon
                style={{
                  fontSize: 60,
                  marginLeft: "30px",
                  marginRight: "-10px"
                }}
                htmlColor={colors.green.hex}
              />
              <h3
                style={{
                  color: colors.primary.hex,
                  marginTop: "14px"
                }}
              >
                Get Involved
              </h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
