/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { colors, borders } from "../_Theme/UpdatedBrandTheme";

const AboutDropdown = ({ goTo }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      css={css`
        align-items: center;
        display: grid;
        position: relative;
      `}
    >
      <button
        type="button"
        className="headerButton"
        onClick={toggleDropdown}
        css={css`
          display: grid;
          margin: 0;
        `}
      >
        <h3
          css={css`
            color: white;
            margin: 0;
          `}
        >
          About
          {dropdownOpen ? (
            <KeyboardArrowUpIcon
              height={16}
              css={css`
                font-size: 1.5em;
                margin-bottom: -5px;
              `}
            />
          ) : (
            <KeyboardArrowDownIcon
              height={16}
              css={css`
                font-size: 1.5em;
                margin-bottom: -5px;
              `}
            />
          )}
        </h3>
      </button>
      <div
        css={css`
          position: absolute;
          top: ${dropdownOpen ? "37px" : "-2000px"};
          right: -1em;
          background-color: ${colors.primary.hex};
          padding: 0.7em 1em;
          width: max-content;
          border: ${borders.box};
        `}
      >
        <ul>
          <li>
            <button
              tabIndex={`${dropdownOpen ? "0" : "-1"}`}
              type="button"
              className="headerButton"
              onClick={() => {
                goTo("/collaboration/");
              }}
            >
              <h4>Collaboration</h4>
            </button>
          </li>
          <li>
            <button
              tabIndex={`${dropdownOpen ? "0" : "-1"}`}
              type="button"
              className="headerButton"
              onClick={() => {
                goTo("/projects/");
              }}
            >
              <h4>Projects</h4>
            </button>
          </li>
          <li>
            <button
              tabIndex={`${dropdownOpen ? "0" : "-1"}`}
              type="button"
              className="headerButton"
              onClick={() => {
                goTo("/about/");
              }}
            >
              <h4>Organization</h4>
            </button>
          </li>
          <li>
            <a
              className="headerButton"
              href="#contact"
              tabIndex={`${dropdownOpen ? "0" : "1`"}`}
            >
              <h4>Contact</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

AboutDropdown.propTypes = {
  goTo: PropTypes.func
};

export default AboutDropdown;
