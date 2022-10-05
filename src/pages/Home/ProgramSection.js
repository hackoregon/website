/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Logo } from "@hackoregon/ui-brand";
import ProgramImg from "../../images/spectrum_loop.png";
import ProgramImgMobile from "../../images/mobile_spectrum_loop.png";
import { smBreak, colors } from "../../_Theme/UpdatedBrandTheme";

const ProgramSection = () => {
  return (
    <div
      id="programs"
      css={css`
        max-width: 970px;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          img {
            display: none;
          }
          ${smBreak} {
            background-color: ${colors.primary.hex};
            margin: 0px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            img {
              display: block;
              height: 50px !important;
              margin-right: 10px;
            }
          }
        `}
      >
        <Logo type="squareLogoInverted" />
        <h1
          css={css`
            margin: 30px 0 35px;
            font-size: 55px;
            ${smBreak} {
              color: white;
              padding: 40px 0;
              margin: 0px;
              text-align: center;
              font-size: 35px;
              font-weight: 500;
            }
          `}
        >
          Program Areas
        </h1>
      </div>

      <div
        css={css`
          p {
            font-size: 22px;
            font-weight: 500;
          }
          ${smBreak} {
            padding: 10px 30px;
            p {
              font-size: 20px;
              font-weight: 400;
            }
          }
        `}
      >
        <p>
          CIVIC operates across a spectrum of program areas, from full-scale
          institutional production environments, applied research, emergent
          learning and education, to conceptual art and exhibition.
        </p>
        <div
          css={css`
            display: block;
            ${smBreak} {
              display: none;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
            `}
            src={ProgramImg}
            alt="Civic production environment diagram"
          />
        </div>
        <p>
          At first glance it may seem an uncommon range of activities, however
          each of our programs function symbiotically and the impact of our work
          is improved by a culture of creative cross-pollination.
        </p>
        <div
          css={css`
            display: none;
            ${smBreak} {
              display: block;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
            `}
            src={ProgramImgMobile}
            alt="Civic production environment diagram"
          />
        </div>
        <p>
          Curious? Learn more and check out our guide on{" "}
          <a href="https://www.notion.so/civicsoftware/Get-Involved-38630f3834e749d2bfbd0adba54cf5db">
            getting involved
          </a>
          .
        </p>
      </div>
    </div>
  );
};
export default ProgramSection;
