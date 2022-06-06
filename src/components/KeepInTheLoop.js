/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { bool } from "prop-types";
import { smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";
import ContentContainer from "./ContentContainer";
import Mailchimp from "./Mailchimp";

const KeepInTheLoop = ({ library }) => (
  <ContentContainer margin="sm">
    <a id="apply" />
    <GridSingle
      containerStyle={css`
        padding: 0 20px;
        max-width: 1100px;
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
          {library ? "Get CIVIC Data Library updates " : "Stay up to date "}
          {library && (
            <span role="img" aria-label="book stack emoji">
              📚
            </span>
          )}
          <span role="img" aria-label="mail heart emoji">
            💌
          </span>
        </h2>
        {library ? (
          <p>
            Excited about the focus sessions, but don’t see a fit for you yet?
            Join our updates list! These updates are exclusively for
            announcements and opportunities related to the CIVIC Data Library.
            We promise never to spam, bore, or sell your information.
          </p>
        ) : (
          <p>
            Be the first to know about program announcements, new technology
            releases, and special surprises. We promise to never spam, bore, or
            annoy.
          </p>
        )}

        <Mailchimp
          endpoint={
            library
              ? "https://hackoregon.us3.list-manage.com/subscribe/post?u=6bed8811c700af6cf48dfe893&amp;id=8103698f16"
              : null
          }
        />
      </div>
    </GridSingle>
  </ContentContainer>
);

KeepInTheLoop.propTypes = {
  library: bool
};

export default KeepInTheLoop;
