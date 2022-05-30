/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { colors } from "../../_Theme/UpdatedBrandTheme";

import GridSingle from "../../components/GridSingle";

const AboutBlock = () => {
  return (
    <GridSingle
      containerStyle={css`
        padding: 0 20px;
        color: ${colors.white};
        display: grid;
        grid-template-columns: 200px auto;
      `}
    >
      {/* sidebar buttons */}
      <div className="about-sidebar">
        <div className="sidebar-item sidebar-green">
          <ArrowRightIcon
            style={{ fontSize: 60 }}
            htmlColor={colors.green.hex}
          />
          <span>Brand Promise</span>
        </div>
        <div className="sidebar-item sidebar-pink">
          <ArrowRightIcon
            style={{ fontSize: 60 }}
            htmlColor={colors.pink.hex}
          />
          <span>CIVIC Platform</span>
        </div>
        <div className="sidebar-item sidebar-yellow">
          <ArrowRightIcon
            style={{ fontSize: 60 }}
            htmlColor={colors.yellow.hex}
          />
          <span>Altruistic Lifecycle</span>
        </div>
        <div className="sidebar-item sidebar-purple">
          <ArrowRightIcon
            style={{ fontSize: 60 }}
            htmlColor={colors.purple.hex}
          />
          <span>Funding Strategies</span>
        </div>
      </div>
      {/* content area */}
      <div
        css={css`
          color: ${colors.white};
          background: ${colors.primary.hex};
          padding: 40px;
        `}
      >
        <h2>Our Brand Promise</h2>
        <div>
          As a 501 (c)(3) nonprofit CIVIC only accepts projects which are
          aligned with our organizational mission to serve diverse and equitable
          constituencies, and where the ownership of technology remains
          open-source or in the custodianship of the public sector. We operate
          as a collective of global practitioners that borrow from
          industry-standard practices which are specifically adapted to
          re-center value in the public interest and support a vision of
          delivering competitive software that stands in contrast to predominant
          models of extraction and/or venture-backed economies of scale.
        </div>
        <div
          css={css`
            margin-top: 40px;
            font-size: 24px;
          `}
        />
      </div>
    </GridSingle>
  );
};

export default AboutBlock;
