/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { smBreak, xsBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import ContentContainer from "../../components/ContentContainer";

const ContributorCTA = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        contentfulCallToActionBlock(
          contentful_id: { eq: "21xkawY7SG0sBSVFakqzZU" }
        ) {
          tagline
          summary {
            json
          }
          button
          buttonLocalLink
        }
      }
    `
  );

  return (
    <ContentContainer margin="md">
      <GridSingle
        containerStyle={css`
          ${smBreak} {
            justify-content: center;
          }
        `}
      >
        <div
          css={css`
            ${smBreak} {
              padding: 0 40px;
              max-width: 600px;
            }

            ${xsBreak} {
              padding: 0 20px;
            }
          `}
        >
          {/* eslint-disable-next-line */}
          <a id="apply" />
          <h2>{contentfulCallToActionBlock.tagline}</h2>
          <div
            css={css`
              max-width: 800px;
            `}
          >
            {documentToReactComponents(
              contentfulCallToActionBlock.summary.json
            )}
            {contentfulCallToActionBlock.button && (
              <a
                href={`${contentfulCallToActionBlock.buttonLocalLink}`}
                className="btn-green"
                css={css`
                  justify-self: end;
                  margin-top: 20px;
                  margin-bottom: 80px;
                `}
              >
                <p>{contentfulCallToActionBlock.button}</p>
              </a>
            )}
          </div>
        </div>
      </GridSingle>
    </ContentContainer>
  );
};

export default ContributorCTA;
