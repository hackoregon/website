/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors, xsBreak } from "../../_Theme/UpdatedBrandTheme";

import SectionHeader from "../../components/SectionHeader";
import CallToActionBlock from "../../components/CallToActionBlock";
import DividerLine from "../../components/DividerLine";

const containerStyle = css`
  ul > li > p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

// eslint-disable-next-line react/prop-types
const FocusSessionsContainer = ({ children }) => (
  <div css={containerStyle}>{children}</div>
);

const FocusSessionsComponents = () => {
  const { contentfulCallToActionBlock, contentfulHeading } = useStaticQuery(
    graphql`
      {
        contentfulHeading(contentful_id: { eq: "38L1I74z7WUhU1pyTCk6tx" }) {
          title
          summary {
            json
          }
        }
        contentfulCallToActionBlock(
          contentful_id: { eq: "2Ieibdd8yuutPPbQx6jnnl" }
        ) {
          tagline
          summary {
            json
          }
          button
          buttonExternalLink
          extraContent {
            json
          }
          extraContentType
        }
      }
    `
  );

  return (
    <div
      css={css`
        ${xsBreak} {
          justify-items: center;
        }
      `}
    >
      <SectionHeader
        title={contentfulHeading.title}
        summary={contentfulHeading.summary.json}
        center
      />
      <DividerLine hexColor={colors.green.hex} />
      <CallToActionBlock
        tagline={contentfulCallToActionBlock.tagline}
        summary={
          contentfulCallToActionBlock.summary &&
          contentfulCallToActionBlock.summary.json
        }
        extraContent={
          contentfulCallToActionBlock.extraContent &&
          contentfulCallToActionBlock.extraContent.json
        }
        extraContentType={contentfulCallToActionBlock.extraContentType}
        ExtraContentContainer={FocusSessionsContainer}
        narrow
        dividerColor="blue"
        button={contentfulCallToActionBlock.button}
        buttonExternalLink={contentfulCallToActionBlock.buttonExternalLink}
        buttonColor="blue"
      />
    </div>
  );
};

export default FocusSessionsComponents;
