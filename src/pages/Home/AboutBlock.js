/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "gatsby";
import { useState } from "react";
import { colors } from "../../_Theme/UpdatedBrandTheme";
// import CivicHeaderImage from "../../components/CivicHeaderImage";

import GridSingle from "../../components/GridSingle";

const categories = {
  brandPromise: {
    title: "Our Brand Promise",
    content:
      "As a 501 (c)(3) nonprofit CIVIC only accepts projects which are aligned with our organizational mission to serve diverse and equitable constituencies, and where the ownership of technology remains open-source or in the custodianship of the public sector. We operate as a collective of global practitioners that borrow from industry-standard practices which are specifically adapted to re-center value in the public interest and support a vision of delivering competitive software that stands in contrast to predominant models of extraction and/or venture-backed economies of scale.",
    image: "/images/programArea_CivicCollaboration.png",
    ctaUrl: "",
    ctaText: ""
  },
  civicPlatform: {
    title: "CIVIC Platform",
    content:
      "We build and maintain our own open source platorm ecosystem and developer enviornment to support, scale, continuity, and best  practices for altruistic data infrastructure where the “bottom line” serves people, not profit. ",
    image: "",
    ctaUrl: "",
    ctaText: "Peek under the hood >>"
  },
  altruisticLifecycle: {
    title: "Altruistic Lifecycle",
    content:
      "Creating values-based technnology impacts every stage development, and CIVIC takes extra consideration     to build momentum for sucess from day zero.  Over years of work,  we’ve distilled six elements which are essential to bring together the best teams, promote overall project health, and deliver repeat magic when your goal is to authenitically serve the public interest.",
    image: "",
    ctaUrl: "",
    ctaText: "See the elements >>"
  },
  fundingStrategies: {
    title: "Funding Strategies",
    content:
      "CIVIC is primarily revenue funded through an institutional membership model and project implementations and government, accademic, and other partners who are commited to a vision of technology as  a public service.  Grants help us invest in new innovation areas, expand education activities, or take on meaningful challenges where traditional funding isn’t available.  All of our earned income is cycled back into growing and deepening our community of contributors fostering experimentation, research,  and connection.",
    image: "",
    ctaUrl: "",
    ctaText: "How we reinvest >>"
  }
};

const CategoryContent = ({ title, content, ctaUrl, ctaText }) => {
  return (
    <div
      css={css`
        color: ${colors.white};
        background: ${colors.primary.hex};
        padding: 0 40px;
        display: flex;
      `}
    >
      <div>
        <h2>{title}</h2>
        {content}
        <Link to={ctaUrl}>
          <p>{ctaText}</p>
        </Link>
        <div />
        {/* <CivicHeaderImage /> */}
      </div>
    </div>
  );
};

const AboutBlock = () => {
  const [selectedCategory, setSelectedCategory] = useState("brandPromise");

  return (
    <div>
      <a id="about" />
      <GridSingle
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
          title={categories[selectedCategory].title}
          content={categories[selectedCategory].content}
          image={categories[selectedCategory].image}
          ctaText={categories[selectedCategory].ctaText}
          ctaUrl={categories[selectedCategory].ctaUrl}
        />
      </GridSingle>
    </div>
  );
};

export default AboutBlock;
