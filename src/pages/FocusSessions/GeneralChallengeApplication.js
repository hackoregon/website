/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import GridSingle from "../../components/GridSingle";

const Button = ({ url, title }) => (
  <div
    css={css`
      float: right;
      margin-right: 1.5em;
      margin-top: 2rem;
    `}
  >
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-yellow"
    >
      <p>{title}</p>
    </a>
  </div>
);

Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

const GeneralChallengeApplication = () => {
  const { contentfulCallToActionSimple } = useStaticQuery(
    graphql`
      {
        contentfulCallToActionSimple(
          contentful_id: { eq: "YNitYRciOZHtCwnlOmES5" }
        ) {
          buttonLink
          buttonTitle
          summary {
            json
          }
        }
      }
    `
  );
  const { summary, buttonLink, buttonTitle } = contentfulCallToActionSimple;

  return (
    <GridSingle containerStyle="padding: 1rem; margin-top: 2rem; margin-bottom: 2rem;">
      {documentToReactComponents(summary.json)}
      <div
        css={css`
          width: 100%;
        `}
      >
        <Button url={buttonLink} title={buttonTitle} />
      </div>
    </GridSingle>
  );
};

export default GeneralChallengeApplication;
