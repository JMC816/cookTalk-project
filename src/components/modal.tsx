import styled from "styled-components";
import { RecipeProp, RecipeRow } from "../routes/search";

const ModalWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

const ModalBg = styled.div`
  width: 400px;
  height: 100%;
  z-index: 999;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalView = styled.div`
  width: auto;
  height: 80%;
  margin: 40px;
  padding: 10px;
  border-radius: 20px;
  background-color: gray;
  display: flex;
  flex-direction: column;
`;

const ModalCloseBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 40px;
  svg {
    cursor: pointer;
  }
`;

const RecipeDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;

const RecipeDetailScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ReicpeDetailPhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

export default function Modal({
  children,
  setModal,
  modal,
  recipe,
  number,
  allData,
  boolean,
}: {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  recipe: RecipeRow | null;
  number: number | undefined;
  allData: RecipeProp | undefined;
  boolean: boolean;
}) {
  const modalCloseClick = () => {
    setModal((prev) => !prev);
  };
  return (
    <ModalWrapper>
      <ModalBg style={modal ? { display: "none" } : {}}>
        <ModalView>
          <ModalCloseBtn onClick={modalCloseClick}>
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </ModalCloseBtn>
          {boolean ? (
            <RecipeDetailWrapper>
              <RecipeDetailScroll>
                <ReicpeDetailPhoto
                  style={{
                    backgroundImage: `url(${recipe?.ATT_FILE_NO_MK})`,
                    backgroundSize: "cover",
                  }}
                />
                {recipe?.MANUAL01 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG01})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL01}</span>
                  </>
                ) : null}
                {recipe?.MANUAL02 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG02})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL02}</span>
                  </>
                ) : null}
                {recipe?.MANUAL03 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG03})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL03}</span>
                  </>
                ) : null}
                {recipe?.MANUAL04 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG04})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL04}</span>
                  </>
                ) : null}
                {recipe?.MANUAL05 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG05})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL05}</span>
                  </>
                ) : null}
                {recipe?.MANUAL06 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG06})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL06}</span>
                  </>
                ) : null}
                {recipe?.MANUAL07 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG07})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL07}</span>
                  </>
                ) : null}
                {recipe?.MANUAL08 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG08})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL08}</span>
                  </>
                ) : null}
                {recipe?.MANUAL09 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG09})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL09}</span>
                  </>
                ) : null}
                {recipe?.MANUAL10 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG10})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL10}</span>
                  </>
                ) : null}
                {recipe?.MANUAL11 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG11})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL11}</span>
                  </>
                ) : null}
                {recipe?.MANUAL12 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG12})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL12}</span>
                  </>
                ) : null}
                {recipe?.MANUAL13 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG13})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL13}</span>
                  </>
                ) : null}
                {recipe?.MANUAL14 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG14})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL14}</span>
                  </>
                ) : null}
                {recipe?.MANUAL15 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG15})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL15}</span>
                  </>
                ) : null}
                {recipe?.MANUAL16 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG16})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL16}</span>
                  </>
                ) : null}
                {recipe?.MANUAL17 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG17})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL17}</span>
                  </>
                ) : null}
                {recipe?.MANUAL18 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG18})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL18}</span>
                  </>
                ) : null}
                {recipe?.MANUAL19 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG19})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL19}</span>
                  </>
                ) : null}
                {recipe?.MANUAL20 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG20})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL20}</span>
                  </>
                ) : null}
              </RecipeDetailScroll>
            </RecipeDetailWrapper>
          ) : (
            <RecipeDetailWrapper>
              <RecipeDetailScroll>
                <ReicpeDetailPhoto
                  style={{
                    backgroundImage: `url(${
                      allData?.COOKRCP01.row[number!].ATT_FILE_NO_MK
                    })`,
                    backgroundSize: "cover",
                  }}
                />
                {allData?.COOKRCP01.row[number!].MANUAL01 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG01
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData?.COOKRCP01.row[number!].MANUAL01}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL02 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG02
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData?.COOKRCP01.row[number!].MANUAL02}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL03 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG03
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL03}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL04 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG04
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL04}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL05 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG05
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL05}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL06 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG06
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL06}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL07 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG07
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL07}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL08 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG08
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL08}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL09 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG09
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL09}</span>
                  </>
                ) : null}
                {allData?.COOKRCP01.row[number!].MANUAL10 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${
                          allData?.COOKRCP01.row[number!].MANUAL_IMG10
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{allData.COOKRCP01.row[number!].MANUAL10}</span>
                  </>
                ) : null}
                {recipe?.MANUAL11 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG11})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL11}</span>
                  </>
                ) : null}
                {recipe?.MANUAL12 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG12})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL12}</span>
                  </>
                ) : null}
                {recipe?.MANUAL13 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG13})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL13}</span>
                  </>
                ) : null}
                {recipe?.MANUAL14 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG14})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL14}</span>
                  </>
                ) : null}
                {recipe?.MANUAL15 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG15})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL15}</span>
                  </>
                ) : null}
                {recipe?.MANUAL16 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG16})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL16}</span>
                  </>
                ) : null}
                {recipe?.MANUAL17 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG17})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL17}</span>
                  </>
                ) : null}
                {recipe?.MANUAL18 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG18})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL18}</span>
                  </>
                ) : null}
                {recipe?.MANUAL19 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG19})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL19}</span>
                  </>
                ) : null}
                {recipe?.MANUAL20 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG20})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <span>{recipe?.MANUAL20}</span>
                  </>
                ) : null}
              </RecipeDetailScroll>
            </RecipeDetailWrapper>
          )}
        </ModalView>
      </ModalBg>
      {children}
    </ModalWrapper>
  );
}
