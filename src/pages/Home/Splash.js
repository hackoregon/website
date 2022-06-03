/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import { Link, useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import GridSingle from "../../components/GridSingle";
import { colors } from "../../_Theme/UpdatedBrandTheme";

const Splash = () => {
  // const { contentfulCallToActionBlock } = useStaticQuery(
  //   graphql`
  //     query {
  //       contentfulCallToActionBlock(
  //         contentful_id: { eq: "7AKSw2suSBvGVjfgeWze5N" }
  //       ) {
  //         tagline
  //         image {
  //           description
  //           fluid(maxWidth: 600) {
  //             srcSet
  //             sizes
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  //   const imageStyle = css`
  // marginLeft: "20px",
  // marginTop: "-40px",
  // maxWidth: "200px"
  // `;

  // const makeImage = image => (
  //   <img
  //     srcSet={image.fluid.srcSet}
  //     sizes={image.fluid.sizes}
  //     alt={image.description}
  //     css={imageStyle}
  //   />
  // );
  // const backgroundImage = contentfulCallToActionBlock.image && makeImage(contentfulCallToActionBlock.image);

  return (
    <GridSingle
      wideContent
      containerStyle={css`
        display: flex;
        flex-direction: row;
        background-image: url("http://images.ctfassets.net/3j4jpxgb52st/22Zy80Y0niVHX4t3DWBDKw/80dd37a269627997a7b05dc446955b3c/splash_portrait.png?w=300&h=386&q=50");
        background-repeat: no-repeat;
        background-size: 150px auto;
        background-position: left bottom;
        margin-top: 40px;
        padding-bottom: 60px;
        border-bottom: 6px solid ${colors.primary.hex};
      `}
    >
      <div
        css={css`
          margin: 20px 20px 0 20px;
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 1rem;
            margin-left: 140px;
            font-size: 3rem;
          `}
        >
          All Data <br /> Are Created.
        </h2>
        <h3
          css={css`
            margin-left: 140px;
            margin-top: 0;
          `}
        >
          Put your principles into practice.
        </h3>
      </div>
      <div
        css={css`
          margin: 20px 20px 0 0;
          padding-left: 40px;
          border-left: 2px solid ${colors.primary.hex};
        `}
      >
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 1rem;
            color: ${colors.pink.hex};
          `}
        >
          Context-Aware Systems
        </h2>
        <h3
          css={css`
            margin-top: 0;
          `}
        >
          Learn more about the methodology
        </h3>
        <Link to="/platform/" className="btn-pink">
          <p>Discover Modules</p>
        </Link>
      </div>
    </GridSingle>
  );
};

export default Splash;
