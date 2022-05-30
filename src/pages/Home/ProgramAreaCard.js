/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { colors } from "../../_Theme/UpdatedBrandTheme";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/project/fields

const ProjectDetail = ({ title, image, summary, projectUrl, ctaText }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        margin: "20px 0",
        padding: "20px",
        background: "#EEE",
        boxShadow: "6px 6px 0px #ccc"
      }}
    >
      <div
        style={{
          flexBasis: "40%",
          background: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div
        style={{
          flexBasis: "60%",
          display: "flex",
          flexDirection: "column",
          margin: "0 20px"
        }}
      >
        <h3 style={{ margin: "0", color: colors.primary.hex }}>{title}</h3>
        <p style={{ fontSize: "16px", background: "#fff", padding: "10px" }}>
          {summary}
        </p>
        <Link to={projectUrl} className="btn-pink">
          <p>{ctaText}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
