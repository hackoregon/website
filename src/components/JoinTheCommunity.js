/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { bool } from "prop-types";
import { smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import ContentContainer from "./ContentContainer";
import Mailchimp from "./Mailchimp2";

const JoinTheCommunity = ({ library }) => (
  <ContentContainer margin="sm">
    <a id="apply" />
    <div
      css={css`
        padding: 0 20px;
        margin: 0 auto;
        max-width: 996px;
        ${smBreak} {
          max-width: 600px;
        }
      `}
    >
      <div
        css={css`
          display: grid;

          ${xsBreak} {
            justify-items: center;
          }
        `}
      >
        <h2
          css={css`
            margin-top: 0;
          `}
        >
          Join the Community
        </h2>
        <p
          css={css`
            font-size: 22px;
            font-weight: 500;
          `}
        >
          Be the first to know about program offerings and special events. We
          promise to never spam, bore, or annoy.
        </p>

        <Mailchimp
          endpoint={
            library
              ? "https://hackoregon.us3.list-manage.com/subscribe/post?u=6bed8811c700af6cf48dfe893&amp;id=8103698f16"
              : null
          }
        />
      </div>
    </div>
  </ContentContainer>
);

JoinTheCommunity.propTypes = {
  library: bool
};

export default JoinTheCommunity;
