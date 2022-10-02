/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { navigate, Link } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import MenuIcon from "@material-ui/icons/MenuRounded";

import { IconButton, Modal } from "@material-ui/core";
import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  colors,
  smBreak,
  xsBreak,
  noHover,
  mdBreak
} from "../_Theme/UpdatedBrandTheme";

const headerContainer = css`
  z-index: 100;
  margin-top: 20px;
  display: flex;
`;
const headerGrid = css`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  ${xsBreak} {
    padding: 0 1rem;
  }
`;
const logoContainer = css`
  a {
    img {
      height: 94px !important;
      margin-top: 8px;
      ${smBreak} {
        height: 40px !important;
      }
    }
  }
`;

const RebrandHeader = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const goTo = path => {
    navigate(path);
  };

  return (
    <>
      <div css={headerContainer}>
        <div css={headerGrid}>
          <div css={[logoContainer]}>
            <Link to="/" css={noHover}>
              <Logo type="standardLogo" />
            </Link>
          </div>
          <div
            css={css`
              display: block;
              ${mdBreak} {
                display: none;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: flex-end;
              `}
            >
              <IconButton aria-label="menu" onClick={handleOpen}>
                <MenuIcon
                  style={{
                    fontSize: 40,
                    color: colors.primary.hex
                  }}
                />
              </IconButton>
            </div>
          </div>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(4, auto);
              justify-self: end;
              max-width: 700px;
              width: 60vw;
              justify-content: space-between;
              align-content: center;
              padding: 50px 20px 0px 40px;
              box-sizing: border-box;
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
              <AnchorLink to="https://www.notion.so/civicsoftware/About-06f2ca8f56524918ae49d8c4528a153c">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: 20,
                      color: colors.primary.hex
                    }}
                  />
                  <h3
                    style={{
                      color: colors.primary.hex,
                      margin: "0",
                      fontSize: 20,
                      fontWeight: 400
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
              <AnchorLink to="https://www.notion.so/civicsoftware/Teams-0420fe41777e46ddb881836f1e3d4ff1">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: 20
                    }}
                  />
                  <h3
                    style={{
                      color: colors.primary.hex,
                      margin: "0",
                      fontSize: 20,
                      fontWeight: 400
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
            >
              <AnchorLink to="/#programs">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: 20
                    }}
                  />
                  <h3
                    style={{
                      color: colors.primary.hex,
                      margin: "0",
                      fontSize: 20,
                      fontWeight: 400
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
              onClick={() => {
                goTo("/#apply");
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <ArrowForwardIosRoundedIcon
                  style={{
                    fontSize: 20
                  }}
                />
                <h3
                  style={{
                    color: colors.primary.hex,
                    margin: "0",
                    fontSize: 20,
                    fontWeight: 400
                  }}
                >
                  Get Involved
                </h3>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="menu"
        aria-describedby="civic menu"
        className="mobile-nav-menu"
      >
        <div>
          <div
            css={[
              headerGrid,
              css`
                padding-top: 20px !important;
              `
            ]}
          >
            <div css={[logoContainer]}>
              <Link to="/" css={noHover}>
                <Logo type="standardLogo" />
              </Link>
            </div>
            <div
              css={css`
                display: block;
                ${mdBreak} {
                  display: none;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: flex-end;
                `}
              >
                <IconButton aria-label="menu" onClick={handleClose}>
                  <CloseRoundedIcon
                    style={{
                      fontSize: 40,
                      color: colors.primary.hex
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              height: 60vh;
              min-height: 300px;
              justify-content: space-around;
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: 20,
                      color: colors.primary.hex
                    }}
                  />
                  <h3
                    style={{
                      color: colors.primary.hex,
                      margin: "0",
                      fontSize: 20,
                      fontWeight: 400
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
              <AnchorLink to="/about">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: 20
                    }}
                  />
                  <h3
                    style={{
                      color: colors.primary.hex,
                      margin: "0",
                      fontSize: 20,
                      fontWeight: 400
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
            >
              <AnchorLink to="/#programs">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: 20
                    }}
                  />
                  <h3
                    style={{
                      color: colors.primary.hex,
                      margin: "0",
                      fontSize: 20,
                      fontWeight: 400
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
              onClick={() => {
                goTo("/#apply");
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <ArrowForwardIosRoundedIcon
                  style={{
                    fontSize: 20
                  }}
                />
                <h3
                  style={{
                    color: colors.primary.hex,
                    margin: "0",
                    fontSize: 20,
                    fontWeight: 400
                  }}
                >
                  Get Involved
                </h3>
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RebrandHeader;
