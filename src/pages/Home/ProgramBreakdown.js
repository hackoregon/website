/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import { Logo } from "@hackoregon/ui-brand";
import CollabImg from "../../images/Collaboration_Studio.png";
import ContextualMetaImg from "../../images/Contextual_Metadata.png";
import CivTechGlobalImg from "../../images/CivTech_Global.png";
import DemocracyReformImg from "../../images/Democracy_Reform.png";
import IntersectionalFuturesNetworkImg from "../../images/Intersectional_Futures_Network.png";
import DataMaterialismImg from "../../images/Data_Materialism.png";
import { smBreak } from "../../_Theme/UpdatedBrandTheme";

const ProgramBreakdown = () => {
  return (
    <div
      css={css`
        max-width: 1134px;
        padding: 0 30px;
        margin: 0 auto;
        margin-top: 45px;
        ${smBreak} {
          padding: 0 30px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          margin-bottom: 60px;
          ${smBreak} {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            p {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 25px;
            }
            ${smBreak} {
              p {
                font-size: 20px;
                font-weight: 500;
              }
            }
          `}
        >
          <h2
            css={css`
              font-weight: 600;
              font-size: 52px;
              margin-bottom: 24px;
              ${smBreak} {
                font-size: 30px;
              }
            `}
          >
            CIVIC Collaboration Studio
          </h2>
          <p>
            The Collaboration Studio is CIVIC's public-facing production center,
            which accepts requests to partner with institutions and
            organizations seeking to create social impact with technology.
          </p>
          <p>
            Whether you have an existing project or are just in the
            brainstorming phase, our approach supports partners at every stage
            to scope, pilot, implement and scale context-aware systems and best
            practices.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              ${smBreak} {
                justify-content: flex-end;
              }
            `}
          >
            <a
              css={css`
                padding: 7px 20px;
                background-color: white;
                border: 5px solid black;
                font-size: 23px;
                font-weight: 500;
                border-radius: 3px;
                color: black;
                &:hover {
                  background: black;
                  color: white;
                }
              `}
              href="https://www.notion.so/civicsoftware/CIVIC-Collaboration-Studio-99964cbd21794140b50d2ea7f7c32d36"
              target="_blank"
              rel="noreferrer"
            >
              Work with us
            </a>
          </div>
        </div>
        <div
          css={css`
            flex: 1.1;
            padding-left: 10px;
            ${smBreak} {
              flex: 1;
              padding-left: 0;
            }
          `}
        >
          <img
            style={{ width: "100%" }}
            src={CollabImg}
            alt="Collaboration Studio tree"
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          width: 100%;
          margin-bottom: 60px;
          ${smBreak} {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            p {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 25px;
            }
            ${smBreak} {
              p {
                font-size: 20px;
                font-weight: 500;
              }
            }
          `}
        >
          <h2
            css={css`
              font-weight: 600;
              font-size: 52px;
              margin-bottom: 24px;
              ${smBreak} {
                font-size: 30px;
              }
            `}
          >
            Contextual Metadata Lab
          </h2>
          <p>
            The Contextual Metadata Lab is the applied research group leading
            CIVIC's development of Context-Aware Systems frameworks and
            connected technologies. We maintain a diverse scholar network and
            partner with academic institutions and public sector agencies to
            test and publish new work.
          </p>
          <p>
            For nonmember organizations, the CM Lab offers a range of expert-led
            workshops and custom experiences to fit your needs.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              ${smBreak} {
                justify-content: flex-end;
              }
            `}
          >
            <a
              css={css`
                padding: 7px 20px;
                background-color: white;
                border: 5px solid black;
                font-size: 23px;
                font-weight: 500;
                border-radius: 3px;
                color: black;
                &:hover {
                  background: black;
                  color: white;
                }
              `}
              href="https://www.notion.so/civicsoftware/Contextual-Metadata-Lab-e449d04a2f2a4eefa97dd9a74e246853"
              target="_blank"
              rel="noreferrer"
            >
              Workshops
            </a>
          </div>
        </div>
        <div
          css={css`
            flex: 1.1;
            padding-right: 10px;
            ${smBreak} {
              flex: 1;
              padding-right: 0;
            }
          `}
        >
          <img
            style={{ width: "100%" }}
            src={ContextualMetaImg}
            alt="Contextual Metadata"
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          margin-bottom: 60px;
          ${smBreak} {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            p {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 25px;
            }
            ${smBreak} {
              p {
                font-size: 20px;
                font-weight: 500;
              }
            }
          `}
        >
          <h2
            css={css`
              font-weight: 600;
              font-size: 52px;
              margin-bottom: 24px;
              ${smBreak} {
                font-size: 30px;
              }
            `}
          >
            CivTech Alliance
          </h2>
          <p>How do you procure what doesn’t exist (yet)?</p>
          <p>
            This is the central question to the CivTech Alliance, a network of
            nations around the globe considering how to bring new innovations to
            the forefront of climate innovation and policy. Learn more about how
            CIVIC supports diverse companies with values-based business models
            to connect with global markets and prepare to work with government
            clients at scale.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              ${smBreak} {
                justify-content: flex-end;
              }
            `}
          >
            <a
              css={css`
                padding: 7px 20px;
                background-color: white;
                border: 5px solid black;
                font-size: 23px;
                font-weight: 500;
                border-radius: 3px;
                color: black;
                &:hover {
                  background: black;
                  color: white;
                }
              `}
              href="https://www.notion.so/civicsoftware/CivTech-Global-Aliance-e66b2d17a9704fa68fdf71a26bb9a8ea"
              target="_blank"
              rel="noreferrer"
            >
              See Activities
            </a>
          </div>
        </div>
        <div
          css={css`
            flex: 1.1;
            padding-left: 10px;
            ${smBreak} {
              flex: 1;
              padding-left: 0;
            }
          `}
        >
          <img
            style={{ width: "100%" }}
            src={CivTechGlobalImg}
            alt="CivTech Globe"
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          width: 100%;
          margin-bottom: 60px;
          ${smBreak} {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            p {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 25px;
            }
            ${smBreak} {
              p {
                font-size: 20px;
                font-weight: 500;
              }
            }
          `}
        >
          <h2
            css={css`
              font-weight: 600;
              font-size: 52px;
              margin-bottom: 24px;
              ${smBreak} {
                font-size: 30px;
              }
            `}
          >
            Democracy Reform Tech
          </h2>
          <p>
            Many cities, states, and counties across the United States have
            passed— or are considering passing— democracy related policy reforms
            aimed to level the campaign playing field and improve equitable
            constituent representation.
          </p>
          <p>
            Democracy Reform Tech serves USA-based government agencies,
            specializing in adapting reliable and sustainable solutions for fair
            elections software, so technology doesn’t have to be a barrier to
            making change.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              ${smBreak} {
                justify-content: flex-end;
              }
            `}
          >
            <a
              css={css`
                padding: 7px 20px;
                background-color: white;
                border: 5px solid black;
                font-size: 23px;
                font-weight: 500;
                border-radius: 3px;
                color: black;
                &:hover {
                  background: black;
                  color: white;
                }
              `}
              href="https://www.notion.so/civicsoftware/Democracy-Reform-Tech-f6992a820ac341d1b2f0f88cb2c2af67"
              target="_blank"
              rel="noreferrer"
            >
              Action Areas
            </a>
          </div>
        </div>
        <div
          css={css`
            flex: 1.1;
            padding-right: 10px;
            ${smBreak} {
              flex: 1;
              padding-right: 0;
            }
          `}
        >
          <img
            style={{ width: "100%" }}
            src={DemocracyReformImg}
            alt="Democracy Reform statue"
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          margin-bottom: 60px;
          ${smBreak} {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            p {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 25px;
            }
            ${smBreak} {
              p {
                font-size: 20px;
                font-weight: 500;
              }
            }
          `}
        >
          <h2
            css={css`
              font-weight: 600;
              font-size: 52px;
              margin-bottom: 24px;
              ${smBreak} {
                font-size: 30px;
              }
            `}
          >
            Intersectional Futures Network
          </h2>
          <p>
            The Intersectional Futures Network is a robust community of practice
            focused on re-centering narratives and assumptions about the values
            and limitations embedded in our technology.
          </p>
          <p>
            This is a space for meaningful connection and experimental
            collaboration, with access to private workspaces, emergent content,
            invite-only talks, and a first look at CIVIC material before it's
            published.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              ${smBreak} {
                justify-content: flex-end;
              }
            `}
          >
            <a
              css={css`
                padding: 7px 20px;
                background-color: white;
                border: 5px solid black;
                font-size: 23px;
                font-weight: 500;
                border-radius: 3px;
                color: black;
                &:hover {
                  background: black;
                  color: white;
                }
              `}
              href="https://www.notion.so/civicsoftware/Intersectional-Futures-Network-895874eebf5949f5a556847f2f7c8b8e"
              target="_blank"
              rel="noreferrer"
            >
              Apply to Join
            </a>
          </div>
        </div>
        <div
          css={css`
            flex: 1.1;
            padding-left: 10px;
            ${smBreak} {
              flex: 1;
              padding-left: 0;
            }
          `}
        >
          <img
            style={{ width: "100%" }}
            src={IntersectionalFuturesNetworkImg}
            alt="Intersectional Futures Network "
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          width: 100%;
          margin-bottom: 60px;
          ${smBreak} {
            flex-direction: column-reverse;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            p {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 25px;
            }
            ${smBreak} {
              p {
                font-size: 20px;
                font-weight: 500;
              }
            }
          `}
        >
          <h2
            css={css`
              font-weight: 600;
              font-size: 52px;
              margin-bottom: 24px;
              ${smBreak} {
                font-size: 30px;
              }
            `}
          >
            Data materialism Department
          </h2>
          <p>Where does data really come from?</p>
          <p>
            Data Materialism Dept is a creative initiative to investigate the
            lifecycle of data as it manifests from abstract concept, to digital
            object, to force of influence in the real world. We collaborate with
            researchers and artists to create immersive experiences that spark
            emotional resonance, and communicate concepts that can't easily be
            perceived through white papers and tech platforms.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              ${smBreak} {
                justify-content: flex-end;
              }
            `}
          >
            <a
              css={css`
                padding: 7px 20px;
                background-color: white;
                border: 5px solid black;
                font-size: 23px;
                font-weight: 500;
                border-radius: 3px;
                color: black;
                &:hover {
                  background: black;
                  color: white;
                }
              `}
              href="https://www.notion.so/civicsoftware/Data-Materialism-Department-999670e9880547098465544abcd83de4"
              target="_blank"
              rel="noreferrer"
            >
              Collaborate
            </a>
          </div>
        </div>
        <div
          css={css`
            flex: 1.1;
            padding-right: 10px;
            ${smBreak} {
              flex: 1;
              padding-right: 0;
            }
          `}
        >
          <img
            style={{ width: "100%" }}
            src={DataMaterialismImg}
            alt="Data Materialism web"
          />
        </div>
      </div>
    </div>
  );
};
export default ProgramBreakdown;
