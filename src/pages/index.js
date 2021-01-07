/** @jsx jsx */
import { jsx } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import Splash from "./Home/Splash";
import Teaser from "./Home/Teaser";
import FeaturedCTA from "./Home/FeaturedCTA";
// import OurDifferenceHeader from "./Home/OurDifferenceHeader";
// import OurDifferenceCards from "./Home/OurDifferenceCards";
import CallToActionBlocks from "./Home/CallToActionBlocks";
import SustainableModelBlocks from "./Home/SustainableModelBlocks";
// import QuoteBlock from "../components/QuoteBlock";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
import { colors } from "../_Theme/UpdatedBrandTheme";

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.yellow.hex}
    >
      <Splash />
      <Teaser />
      <DividerLine hexColor={colors.blue.hex} />
      <ContentContainer margin="sm">
        <FeaturedCTA />
      </ContentContainer>
      <DividerLine hexColor={colors.yellow.hex} />
      {/* <ContentContainer margin="md">
        <OurDifferenceHeader />
        <OurDifferenceCards />
      </ContentContainer> */}
      {/* <DividerLine hexColor={colors.purple.hex} /> */}
      <CallToActionBlocks />
      <SustainableModelBlocks />
      {/* <ContentContainer margin="sm">
        <QuoteBlock
          author="Catherine Nikolovski"
          title="Founder of CIVIC"
          photo="https://images.ctfassets.net/3j4jpxgb52st/3RS6cidDNAqJIovgUxZLxV/f17e2a894b5216aeb8b22a10b8be788d/CatNikolovskiHeadshot.jpeg?w=400&q=80&fm=webp&fit=scale&f=top"
        >
          When political will meets public imagination, the technology we can
          create is unlike anything the world has ever seen.
        </QuoteBlock>
      </ContentContainer> */}
      {/* <DividerLine hexColor={colors.green.hex} /> */}
    </PageLayout>
  );
};

export default IndexPage;
