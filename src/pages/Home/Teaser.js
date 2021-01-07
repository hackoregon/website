/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";

import ContentContainer from "../../components/ContentContainer";
import GridSingle from "../../components/GridSingle";

const Teaser = () => (
  <ContentContainer margin="sm">
    <GridSingle
      containerStyle={css`
        padding: 0 20px;
      `}
    >
      <p>
        <b>Focus on Data Context:</b> Civic Software Foundation is focusing
        throughout 2021 on creating new context systems that provide ways to
        collect, curate, use, and share data that increase equity and justice.
        Our programs bring together the voices of people represented by data,
        the experience of community organizations, and institutional
        partnerships to collaborate on creating an entirely new way of engaging
        with data.
      </p>
      <Link
        to="google.com"
        className="btn-pink"
        css={css`
          margin-bottom: 20px;
        `}
      >
        <p>Learn about context</p>
      </Link>
      <Link to="google.com" className="btn-yellow">
        <p>Get involved</p>
      </Link>
    </GridSingle>
  </ContentContainer>
);

export default Teaser;
