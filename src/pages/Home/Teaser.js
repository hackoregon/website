/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ContentContainer from "../../components/ContentContainer";
import GridSingle from "../../components/GridSingle";


const Teaser = () => {
  const { contentfulCallToActionSimple } = useStaticQuery(
    graphql`
      {
        contentfulCallToActionSimple(
          contentful_id: { eq: "4xAM1s3NoGu4eCpkLGBa27" }
        ) {
          tagline
          buttonLink
          buttonTitle
          summary {
            json
          }
        }
      }
    `
  );

  const {
    summary,
    buttonLink,
    buttonTitle,
    tagline
  } = contentfulCallToActionSimple;

  return (
    <ContentContainer margin="sm">
      <GridSingle
        containerStyle={css`
          padding: 0 20px;
        `}
      >
        <h2>{tagline}</h2>
        {documentToReactComponents(summary.json)}
        <Link
          to={buttonLink}
          className="btn-pink"
          css={css`
            margin-top: 20px;
          `}
        >
          <p>{buttonTitle}</p>
        </Link>

        <div
          css={css`
            margin-top: 40px;
            font-size: 24px;
          `}
        >
          <div
            css={css`
              margin: 10px;
            `}
          >
            <TwitterIcon
              css={css`
                margin-right: 10px;
                font-size: 1.5 em;
                margin-bottom: -5px;
              `}
            />
            <a href="https://twitter.com/civicsoftware">@civicsoftware</a> for
            announcements + registration
          </div>
          <div
            css={css`
              margin: 10px;
            `}
          >
            <InstagramIcon
              css={css`
                margin-bottom: -5px;
                margin-right: 10px;
                font-size: 1.5 em;
              `}
            />
            <a href="https://www.instagram.com/alldataarecreated/">
              @alldataarecreated
            </a>{" "}
            to follow the journey (our Instagram is just getting started!)
          </div>
        </div>
      </GridSingle>
    </ContentContainer>
  );
};

export default Teaser;
