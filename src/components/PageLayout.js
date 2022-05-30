/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";

import SEO from "./SEO";
import NewHeader from "./NewHeader";
import Footer from "./Footer";

const PageLayout = ({ title, keywords, children, home }) => {
  return (
    <Fragment>
      <SEO title={title} keywords={keywords} />
      <NewHeader home={home} />
      {children}
      <Footer />
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
  home: PropTypes.bool
};

export default PageLayout;
