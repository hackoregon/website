/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrandColors } from "@hackoregon/ui-themes";
import Contact from "./Contact";
import ContentContainer from "./ContentContainer";

const footerText = css`
  color: ${BrandColors.subdued.hex};
  margin: 30px;
`;

const Footer2 = () => (
  <ContentContainer color="#3d0640">
    <footer
      css={css`
        text-align: center;
        padding-bottom: 1rem;
      `}
    >
      <Contact color="#3d0640" />
      <div
        css={css`
          border-top: 2px solid white;
        `}
      >
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <p className="p-sm" css={footerText}>
            <i>
              Unless otherwise noted, content and materials on this site are
              owned by Civic Software Foundation licensed under a{" "}
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License
              </a>
              .
            </i>
            <br />
            Artwork and illustrations featured on homepage are by{" "}
            <a href="https://www.linkedin.com/in/falaah-arif-khan-b99058154">
              Falaah Arif Khan
            </a>
            .
          </p>
        </div>
        <p className="p-sm" css={footerText}>
          Civic Software Foundation is a 501(c)(3) registered non-profit
          organization. EIN 46-5498921
          <br />
          <a
            css={css`
              color: white;
            `}
            href
          >
            CC BY License
          </a>
        </p>
      </div>
    </footer>
  </ContentContainer>
);

export default Footer2;
