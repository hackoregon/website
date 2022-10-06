/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import { xsBreak, maxContentWidth, colors } from "../_Theme/UpdatedBrandTheme";
import ContentContainer from "./ContentContainer";

const whiteText = css`
  color: white;
  margin: 0;
`;

const Contact = ({ color }) => (
  <ContentContainer margin="sm" color={color || colors.primary.hex}>
    <div
      css={css`
        text-align: left;
        padding: 0 3rem 0;
        ${maxContentWidth}
        margin: 0 auto;
      `}
      name="contact"
    >
      <h3
        css={css`
          padding-bottom: 20px;
          ${whiteText}
          margin-left: 22px;
        `}
        className="h-3"
      >
        Contact Us
      </h3>
      <div
        css={css`
          a {
            color: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            flex: 0;
            background-size: 0% 0%;
            font-size: 14px;
            margin-bottom: 10px;
            span {
              margin-left: 15px;
            }
          }
        `}
      >
        <a href="mailto:hi@civicsoftwarefoundation.com">
          <MailOutlineIcon /> <span>hi@civicsoftwarefoundation.com</span>
        </a>
        <a href="https://twitter.com/CivicSoftware">
          <TwitterIcon /> <span>@CivicSoftware</span>
        </a>
        <a href="https://www.instagram.com/alldataarecreated/">
          <InstagramIcon /> <span>@alldataarecreated</span>
        </a>
        <a href="https://github.com/hackoregon">
          <GithubIcon /> <span>github</span>
        </a>
      </div>

      <div
      // css={css`
      //   width: 100%;
      //   display: grid;
      //   grid-template-columns: max-content max-content 1fr;
      //   grid-gap: 4rem;

      //   ${xsBreak} {
      //     grid-template-columns: 1fr;
      //     grid-row-gap: 60px;
      //   }
      // `}
      >
        {/* <ul
          css={css`
            margin-top: -15px;
            > li {
              margin: 15px 0;
            }
            > li.extra-margin {
              margin: 60px 0 0;
            }
            > li > a {
              color: white;
            }
          `}
        >
          <li>
            <a href="/project-form/">Project inquiries</a>
          </li>
          <li>
            <a href="/impact-form/">Partnership inquiries</a>
          </li>
          <li>
            <a href="/contributor-apply/">Apply to contribute</a>
          </li>
          <li>
            <a
              href="https://airtable.com/shr8nHiuUtIAQ8Yzl"
              target="_blank"
              rel="noreferrer"
            >
              Report an issue
            </a>
          </li>
          <li>
            <a
              href="https://airtable.com/shrIq8aOqhrJhCxzS"
              target="_blank"
              rel="noreferrer"
            >
              Make a suggestion
            </a>
          </li>
          <li>
            <a href="mailto:hi@civicsoftwarefoundation.org">Other inquiries</a>
          </li>
        </ul> */}

        {/* <div
          css={css`
            display: grid;
            ${xsBreak} {
              grid-template-columns: 1fr;
              grid-row-gap: 30px;
            }
          `}
        >
          <div>
            <p
              css={css`
                ${whiteText}
              `}
              className="h-4"
            >
              Creative & Tech HQ
            </p>
            <p css={whiteText} className="p-sm">
              Portland, OR
            </p>
            <a css={whiteText} className="p-sm" href="tel:9712700240">
              +1-971-270-0240‬
            </a>
          </div>

          <div>
            <p
              css={css`
                ${whiteText}
              `}
              className="h-4"
            >
              Organizational HQ
            </p>
            <p css={whiteText} className="p-sm">
              Washington, DC
            </p>
            <a css={whiteText} className="p-sm" href="tel:12026641223">
              +1-202-664-1223
            </a>
          </div>
        </div> */}
        <div>
          <h4
            css={css`
              padding: 20px 0;
              ${whiteText}
              font-size: 20px;
            `}
            className="h-3"
          >
            Business Hubs
          </h4>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              p,
              span {
                color: white;
                font-size: 16px;
              }
              span {
                margin: 0 10px;
              }
              ${xsBreak} {
                flex-wrap: wrap;
                justify-content: center;
              }
            `}
          >
            <p>Washington, DC</p>
            <span>|</span>
            <p>Portland, OR</p>
            <span>|</span>
            <p>Montreal, QC</p>
            <span>|</span>
            <p>London, UK</p>
            <span>|</span>
            <p>Berlin, DE</p>
          </div>
        </div>
      </div>
    </div>
  </ContentContainer>
);
Contact.propTypes = {
  color: PropTypes.string
};
export default Contact;
