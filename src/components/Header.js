/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Link } from "gatsby";
import { navigate } from "@reach/router";
import MenuIcon from "@material-ui/icons/Menu";
import { Logo } from "@hackoregon/ui-brand";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import HeaderDropdown from "./HeaderDropdown";
// import AboutDropdown from "./AboutDropdown";
import {
  colors,
  smBreak,
  mdBreak,
  xsBreak,
  focusBorder,
  maxContentWidth,
  noHover
} from "../_Theme/UpdatedBrandTheme";

const headerHeight = "70px";
const headerContainer = css`
  background-color: ${colors.primary.hex};
  border-bottom: 0 solid ${colors.plumLight.hex};
  z-index: 100;
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

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const goTo = path => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <div css={headerContainer}>
      <div css={headerGrid}>
        <div css={[logoContainer]}>
          <Link to="/" css={noHover}>
            <Logo type="standardLogoInverted" />
          </Link>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-self: end;
            max-width: 600px;
            width: 45vw;
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
            onClick={() => {
              navigate("#events");
            }}
          >
            <h3
              css={css`
                color: white;
                margin: 0;
              `}
            >
              Events
            </h3>
          </button>
          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
            onClick={() => {
              navigate("#apply");
            }}
          >
            <AnchorLink to="/#join">
              <h3
                css={css`
                  color: white;
                  margin: 0;
                `}
              >
                Join Us
              </h3>
            </AnchorLink>
          </button>

          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
          >
            {" "}
            <AnchorLink to="/#projects">
              <h3
                css={css`
                  color: white;
                  margin: 0;
                `}
              >
                Projects
              </h3>
            </AnchorLink>
          </button>

          <button
            type="button"
            className="headerButton"
            css={css`
              margin: 0;
            `}
            onClick={() => {
              goTo("/about/");
            }}
          >
            <h3
              css={css`
                color: white;
                margin: 0;
              `}
            >
              About
            </h3>
          </button>
          {/* <AboutDropdown goTo={goTo} /> */}
        </div>

        <button
          css={css`
            display: flex;
            flex-direction: column;
            justify-self: end;
            justify-content: center;
            background: none;
            border: none;
            height: max-content;
            align-self: center;
            border-radius: 5px;
            color: white;

            ${focusBorder}

            ${mdBreak} {
              display: none;
            }
          `}
          type="button"
          onClick={toggleDropdown}
        >
          <MenuIcon
            css={css`
              font-size: 2.5rem;
            `}
          />
        </button>
      </div>
      <HeaderDropdown
        open={dropdownOpen}
        headerHeight={headerHeight}
        goTo={goTo}
      />
    </div>
  );
};

export default Header;
