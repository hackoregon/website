/* eslint-disable react/prop-types */
import React from "react";

import PageLayout from "./PageLayout";
import Post from "./Post";
import TitleAreaNew from "./TitleAreaNew";
import DefaultTitleAreaContent from "./DefaultTitleAreaContent";
import DividerLine from "./DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";
import ContentContainer from "./ContentContainer";

const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext;

  return (
    <PageLayout title={post.title}>
      <TitleAreaNew dividerLineColor={colors.blue.hex}>
        <DefaultTitleAreaContent title={post.title} />
      </TitleAreaNew>
      <ContentContainer margin="md">
        <Post
          content={post.content}
          authors={post.authors}
          slug={post.slug}
          created={post.createdAt}
          updated={post.updatedAt}
          buttonText={post.buttonText}
          buttonLocalLink={post.buttonLocalLink}
          buttonExternalLink={post.buttonExternalLink}
        />
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
    </PageLayout>
  );
};

export default PostTemplate;
