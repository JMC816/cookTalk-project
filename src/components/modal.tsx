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

const RecipeDetailInfo = styled.span`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
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
                <RecipeDetailInfo style={{ textAlign: "center" }}>
                  {recipe?.RCP_NM}
                </RecipeDetailInfo>
                <ReicpeDetailPhoto
                  style={{
                    backgroundImage: `url(${recipe?.ATT_FILE_NO_MK})`,
                    backgroundSize: "cover",
                    width: 250,
                    height: 250,
                  }}
                />
                <RecipeDetailInfo>
                  <span>탄수화물 : {recipe?.INFO_CAR}</span>
                  <span>단백질 : {recipe?.INFO_PRO}</span>
                  <span>지방 : {recipe?.INFO_FAT}</span>
                  <span>나트륨 : {recipe?.INFO_NA}</span>
                </RecipeDetailInfo>
                <RecipeDetailInfo>
                  재료 : {recipe?.RCP_PARTS_DTLS}
                </RecipeDetailInfo>
                <RecipeDetailInfo>팁 : {recipe?.RCP_NA_TIP}</RecipeDetailInfo>
                {recipe?.MANUAL01 ? (
                  <>
                    <ReicpeDetailPhoto
                      style={{
                        backgroundImage: `url(${recipe?.MANUAL_IMG01})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <RecipeDetailInfo>{recipe?.MANUAL01}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL02}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL03}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL04}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL05}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL06}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL07}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL08}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL09}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL10}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL11}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL12}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL13}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL14}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL15}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL16}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL17}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL18}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL19}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL20}</RecipeDetailInfo>
                  </>
                ) : null}
              </RecipeDetailScroll>
            </RecipeDetailWrapper>
          ) : (
            <RecipeDetailWrapper>
              <RecipeDetailScroll>
                <RecipeDetailInfo style={{ textAlign: "center" }}>
                  {allData?.COOKRCP01.row[number!].RCP_NM}
                </RecipeDetailInfo>
                <ReicpeDetailPhoto
                  style={{
                    backgroundImage: `url(${
                      allData?.COOKRCP01.row[number!].ATT_FILE_NO_MK
                    })`,
                    backgroundSize: "cover",
                    width: 250,
                    height: 250,
                  }}
                />
                <RecipeDetailInfo>
                  <span>
                    탄수화물 : {allData?.COOKRCP01.row[number!].INFO_CAR}
                  </span>
                  <span>
                    단백질 : {allData?.COOKRCP01.row[number!].INFO_PRO}
                  </span>
                  <span>지방 : {allData?.COOKRCP01.row[number!].INFO_FAT}</span>
                  <span>
                    나트륨 : {allData?.COOKRCP01.row[number!].INFO_NA}
                  </span>
                </RecipeDetailInfo>
                <RecipeDetailInfo>
                  재료 : {allData?.COOKRCP01.row[number!].RCP_PARTS_DTLS}
                </RecipeDetailInfo>
                <RecipeDetailInfo>
                  팁 : {allData?.COOKRCP01.row[number!].RCP_NA_TIP}
                </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData?.COOKRCP01.row[number!].MANUAL01}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData?.COOKRCP01.row[number!].MANUAL02}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL03}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL04}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL05}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL06}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL07}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL08}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL09}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>
                      {allData.COOKRCP01.row[number!].MANUAL10}
                    </RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL11}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL12}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL13}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL14}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL15}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL16}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL17}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL18}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL19}</RecipeDetailInfo>
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
                    <RecipeDetailInfo>{recipe?.MANUAL20}</RecipeDetailInfo>
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
