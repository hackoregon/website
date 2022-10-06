/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";

import SEO from "./SEO";
import NewHeader from "./NewHeader";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import RebrandHeader from "./RebrandHeader";

const PageLayout = ({ title, keywords, children, home, isRebrand }) => {
  return (
    <Fragment>
      <SEO title={title} keywords={keywords} />
      {isRebrand ? <RebrandHeader home={home} /> : <NewHeader home={home} />}

      {children}
      {isRebrand ? <Footer2 /> : <Footer />}
    </Fragment>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  home: PropTypes.bool,
  isRebrand: PropTypes.bool
};

export default PageLayout;
