/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import FocusSessionsHeader from "./FocusSessions/FocusSessionsHeader";
import FocusSessionsComponents from "./FocusSessions/FocusSessionsComponents";
import UpcomingChallenges from "./FocusSessions/UpcomingChallenges";
import CompletedChallenges from "./FocusSessions/CompletedChallenges";
import PageLayout from "../components/PageLayout";
import ContentContainer from "../components/ContentContainer";
import DividerLine from "../components/DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";
import GeneralChallengeApplication from "./FocusSessions/GeneralChallengeApplication";
import KeepInTheLoop from "../components/KeepInTheLoop";

const FocusSessionsPage = () => {
  return (
    <PageLayout
      title="Focus Sessions"
      keywords={[`Civic Software Foundation`, `Focus Sessions`]}
      swoopColor={colors.pink.hex}
      hideCommonCTA
      hideKeepInTheLoop
    >
      <FocusSessionsHeader />
      <ContentContainer margin="md">
        <FocusSessionsComponents />
      </ContentContainer>
      <ContentContainer margin="md">
        <UpcomingChallenges />
        <GeneralChallengeApplication />
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
      <KeepInTheLoop library />
      <DividerLine hexColor={colors.yellow.hex} />{" "}
      <ContentContainer
        css={css`
          margin-bottom: 24rem !important;
        `}
        margin="md"
      >
        <CompletedChallenges />
      </ContentContainer>
    </PageLayout>
  );
};

export default FocusSessionsPage;
