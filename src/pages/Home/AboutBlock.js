/* eslint-disable graphql/template-strings */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment, useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Modal } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Logo } from "@hackoregon/ui-brand";
import { colors, xsBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";

const categoryMap = {
  brandPromise: "1797e17c-2e73-516a-af78-189459bfcbb7",
  civicPlatform: "99bc9210-d0f1-57bb-86a6-89c4705248d6",
  altruisticLifecycle: "7c6917e1-a3ef-561f-86b6-83d3fbb52327",
  fundingStrategies: "1b57e49b-b5c8-5e77-9b82-1ccd2162942d"
};

const imageStyle = css`
  marginLeft: "20px",
  marginTop: "-40px",
  maxWidth: "200px"

  ${xsBreak} {
    width: 100%;
    max-width: 400px;
  }
`;

const makeImage = image => (
  <img
    srcSet={image.fluid.srcSet}
    sizes={image.fluid.sizes}
    alt={image.description}
    css={imageStyle}
  />
);

const CategoryContent = ({ title, content, image, ctaOnClick, ctaText }) => {
  const categoryImage = image && makeImage(image);

  return (
    <div
      css={css`
        color: ${colors.white};
        background: ${colors.primary.hex};
        padding: 0 40px;
        display: flex;
        max-width: 900px;
        max-height: 450px;
        overflow: hidden;
      `}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex"
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              marginBottom: "10px",
              alignItems: "center"
            }}
          >
            <Logo type="squareLogoInverted" />
            <h2 style={{ marginLeft: "20px" }}>{title}</h2>
          </div>
          <div
            className="aboutBlock"
            style={{ paddingRight: "30px", maxWidth: "510px" }}
          >
            {documentToReactComponents(content)}
            <div type="button" onClick={ctaOnClick}>
              <a>{ctaText}</a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          {categoryImage}
        </div>
      </div>
    </div>
  );
};

const AboutBlock = () => {
  const [selectedCategory, setSelectedCategory] = useState("brandPromise");
  const [showDetailPopover, setShowDetailPopover] = useState(false);

  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "75b0gvStvQr8lG3upiW1bu" }) {
          content {
            ... on ContentfulCallToActionBlock {
              id
              button
              buttonLocalLink
              tagline
              extraContentTagline
              extraContent {
                json
              }
              extraContentImage {
                description
                fluid(maxHeight: 200) {
                  srcSet
                  sizes
                }
              }
              summary {
                json
              }
              image {
                description
                fluid(maxWidth: 280) {
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    `
  );

  const categories = contentfulContentList.content;

  const getCategoryData = () => {
    return categories.filter(
      category => category.id === categoryMap[selectedCategory]
    )[0];
  };

  const toggleDetailPopover = () => {
    setShowDetailPopover(!showDetailPopover);
  };

  return (
    <Fragment>
      <a id="about" />
      <Modal id="modal" open={showDetailPopover} onClose={toggleDetailPopover}>
        <div
          css={css`
            color: ${colors.primary.hex};
            background: ${colors.white};
            outline: 0;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -30%);
            width: 70vw;
            padding: 40px;
            display: flex;
            flex-direction: column;
            max-height: 70vh;
            overflow-y: scroll;
          `}
        >
          <h2 style={{ marginLeft: "20px" }}>
            {getCategoryData().extraContentTagline}
          </h2>
          <div style={{ textAlign: "center" }}>
            {getCategoryData().extraContentImage &&
              makeImage(getCategoryData().extraContentImage)}
          </div>
          <div style={{ marginTop: "30px", paddingRight: "30px" }}>
            {documentToReactComponents(
              getCategoryData().extraContent &&
                getCategoryData().extraContent.json
            )}
          </div>
        </div>
      </Modal>
      <GridSingle
        wideContent
        containerStyle={css`
          color: ${colors.white};
          display: grid;
          grid-template-columns: 200px auto;
          height: 450px;
          border-bottom: 6px solid ${colors.green.hex};
        `}
      >
        {/* sidebar buttons */}
        <div className="about-sidebar">
          <div
            className={
              selectedCategory === "brandPromise"
                ? `sidebar-item sidebar-green-selected`
                : "sidebar-item sidebar-green"
            }
            onClick={() => setSelectedCategory("brandPromise")}
          >
            <ArrowRightIcon
              style={{ fontSize: 60 }}
              htmlColor={colors.green.hex}
            />
            <span>Brand Promise</span>
          </div>
          <div
            className={
              selectedCategory === "civicPlatform"
                ? `sidebar-item sidebar-pink-selected`
                : "sidebar-item sidebar-pink"
            }
            onClick={() => setSelectedCategory("civicPlatform")}
          >
            <ArrowRightIcon
              style={{ fontSize: 60 }}
              htmlColor={colors.pink.hex}
            />
            <span>CIVIC Platform</span>
          </div>
          <div
            className={
              selectedCategory === "altruisticLifecycle"
                ? `sidebar-item sidebar-yellow-selected`
                : "sidebar-item sidebar-yellow"
            }
            onClick={() => setSelectedCategory("altruisticLifecycle")}
          >
            <ArrowRightIcon
              style={{ fontSize: 60 }}
              htmlColor={colors.yellow.hex}
            />
            <span>Altruistic Lifecycle</span>
          </div>
          <div
            className={
              selectedCategory === "fundingStrategies"
                ? `sidebar-item sidebar-purple-selected`
                : "sidebar-item sidebar-purple"
            }
            onClick={() => setSelectedCategory("fundingStrategies")}
          >
            <ArrowRightIcon
              style={{ fontSize: 60 }}
              htmlColor={colors.purple.hex}
            />
            <span>Funding Strategies</span>
          </div>
        </div>
        {/* content area */}
        <CategoryContent
          title={getCategoryData().tagline}
          content={getCategoryData().summary && getCategoryData().summary.json}
          image={getCategoryData().image}
          ctaText={getCategoryData().button}
          ctaOnClick={toggleDetailPopover}
        />
      </GridSingle>
    </Fragment>
  );
};

export default AboutBlock;
