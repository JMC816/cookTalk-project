import { useQuery } from "react-query";
import styled from "styled-components";
import { GetCook, GetIngredient } from "../api";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../components/modal";

export interface RecipeProp {
  COOKRCP01: {
    row: [
      {
        ATT_FILE_NO_MAIN: string;
        ATT_FILE_NO_MK: string;
        HASH_TAG: string;
        INFO_CAR: string;
        INFO_ENG: string;
        INFO_FAT: string;
        INFO_NA: string;
        INFO_PRO: string;
        INFO_WGT: string;
        MANUAL01: string;
        MANUAL02: string;
        MANUAL03: string;
        MANUAL04: string;
        MANUAL05: string;
        MANUAL06: string;
        MANUAL07: string;
        MANUAL08: string;
        MANUAL09: string;
        MANUAL10: string;
        MANUAL11: string;
        MANUAL12: string;
        MANUAL13: string;
        MANUAL14: string;
        MANUAL15: string;
        MANUAL16: string;
        MANUAL17: string;
        MANUAL18: string;
        MANUAL19: string;
        MANUAL20: string;
        MANUAL_IMG01: string;
        MANUAL_IMG02: string;
        MANUAL_IMG03: string;
        MANUAL_IMG04: string;
        MANUAL_IMG05: string;
        MANUAL_IMG06: string;
        MANUAL_IMG07: string;
        MANUAL_IMG08: string;
        MANUAL_IMG09: string;
        MANUAL_IMG10: string;
        MANUAL_IMG11: string;
        MANUAL_IMG12: string;
        MANUAL_IMG13: string;
        MANUAL_IMG14: string;
        MANUAL_IMG15: string;
        MANUAL_IMG16: string;
        MANUAL_IMG17: string;
        MANUAL_IMG18: string;
        MANUAL_IMG19: string;
        MANUAL_IMG20: string;
        RCP_NA_TIP: string;
        RCP_NM: string;
        RCP_PARTS_DTLS: string;
        RCP_PAT2: string;
        RCP_SEQ: string;
        RCP_WAY2: string;
      }
    ];
    RESULT: {
      MSG: string;
    };
  };
}

export type RecipeRow = RecipeProp["COOKRCP01"]["row"][0];

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: darkorange;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 998;
  position: absolute;
`;

const RandomTitle = styled.div`
  width: 100%;
  background-color: darkorange;
  height: 80px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RandomTitleName = styled.span`
  font-family: "Dongle", sans-serif;
  font-size: 50px;
  color: #fff;
`;

const RandomCook = styled.div`
  width: 100%;
  display: flex;
  background-color: darkorange;
  overflow-x: hidden;
  position: relative;
  height: 120px;
  min-height: 120px;
`;

const Slider = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: absolute;
  margin-top: 10px;
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Recipes = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  cursor: pointer;
`;

const RecipesTitle = styled.span`
  width: 80px;
  margin-top: 5px;
  font-size: 12px;
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  background-color: darkorange;
`;

const LeftSelect = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
`;

const DirectionPoion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Own = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;
const Two = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;
const Three = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;

const RightSelect = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
`;

const SearhCook = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fae6b1;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 0 -5px 5px -5px;
`;

const SearchCookFind = styled.form`
  width: 100%;
  min-height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SearchCookFindTitle = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Dongle", sans-serif;
  font-size: 50px;
  color: darkorange;
`;

const SearchInput = styled.input`
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
`;

const SearchBtn = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
`;

const RecipeWrapper = styled.div`
  margin-top: 20px;
  background-color: #fae6b1;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 40px;
  row-gap: 40px;
  padding-bottom: 100px;
`;

const RecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const sidlerVariants = {
  hidden: (back: boolean) => ({
    x: back ? 400 : -400,
  }),
  visible: {
    x: 0,
  },
  exit: (back: boolean) => ({
    x: back ? -400 : 400,
  }),
};

const offset = 4;

const random = [
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
  Math.floor(Math.random() * 1001),
];

export default function Search() {
  const [ingredient, setIngredient] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  const [modal, setModal] = useState(true);
  const [recipe, setRecipe] = useState<RecipeRow | null>(null);
  const [number, setNumber] = useState<number | undefined>();
  const [allData, setAllData] = useState<RecipeProp | undefined>();
  const [boolean, setBoolean] = useState(false);
  const { data } = useQuery<RecipeProp>("cook", GetCook);
  const { data: ingredientData } = useQuery<RecipeProp>(
    ["ingredient", ingredient],
    () => GetIngredient(ingredient),
    {
      enabled: !!ingredient,
      cacheTime: 0,
    }
  );

  const leftClick = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const maxIndex = 2;
      setBack(false);
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const rightClick = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const maxIndex = 0;
      setBack(true);
      setIndex((prev) => (prev === maxIndex ? 2 : prev - 1));
    }
  };
  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ingredientData?.COOKRCP01.row) {
      setError("로딩 중...");
    } else {
      setError("");
    }
    setIngredient(value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const barModalOpenClick = (index: number) => {
    setBoolean(false);
    setAllData(data);
    setModal((prev) => !prev);
    setNumber(index);
  };

  const modalOpenClick = (i: RecipeRow) => {
    setBoolean(true);
    setRecipe(i);
    setModal((prev) => !prev);
  };
  return (
    <Modal
      setModal={setModal}
      modal={modal}
      recipe={recipe}
      number={number}
      allData={allData}
      boolean={boolean}
    >
      <SearchWrapper>
        <RandomTitle>
          <RandomTitleName>오늘의 추천 요리</RandomTitleName>
        </RandomTitle>
        <RandomCook>
          <AnimatePresence
            custom={back}
            initial={false}
            onExitComplete={toggleLeaving}
          >
            <Slider
              custom={back}
              variants={sidlerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 1 }}
              key={index}
            >
              {random
                .slice(offset * index, offset * index + offset)
                .map((i) => (
                  <SliderItem key={i}>
                    <Recipes
                      onClick={() => barModalOpenClick(i)}
                      style={{
                        backgroundImage: `url(${
                          data?.COOKRCP01.row
                            ? data?.COOKRCP01.row[i].ATT_FILE_NO_MAIN
                            : "로딩 중..."
                        })`,
                        backgroundSize: "cover",
                      }}
                    />
                    <RecipesTitle>
                      {data?.COOKRCP01.row
                        ? data?.COOKRCP01.row[i].RCP_NM
                        : "로딩 중..."}
                    </RecipesTitle>
                  </SliderItem>
                ))}
            </Slider>
          </AnimatePresence>
        </RandomCook>
        <SelectWrapper>
          <LeftSelect onClick={leftClick}>
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
          </LeftSelect>
          <DirectionPoion>
            {index === 0 ? (
              <Own style={{ backgroundColor: "#fff" }} />
            ) : (
              <Own style={{ backgroundColor: "black" }} />
            )}
            {index === 2 ? (
              <Two style={{ backgroundColor: "#fff" }} />
            ) : (
              <Two style={{ backgroundColor: "black" }} />
            )}
            {index === 1 ? (
              <Three style={{ backgroundColor: "#fff" }} />
            ) : (
              <Three style={{ backgroundColor: "black" }} />
            )}
          </DirectionPoion>
          <RightSelect onClick={rightClick}>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </RightSelect>
        </SelectWrapper>
        <SearhCook>
          <SearchCookFindTitle>레시피</SearchCookFindTitle>
          <SearchCookFind onSubmit={onSubmit}>
            <SearchInput
              onChange={onChange}
              value={value}
              placeholder="재료를 검색하세요."
            />
            <SearchBtn>검색</SearchBtn>
          </SearchCookFind>
          {!ingredientData?.COOKRCP01.row && error}
          <RecipeWrapper>
            {ingredientData?.COOKRCP01.row
              ? ingredientData.COOKRCP01.row.map((i, index) => (
                  <RecipeItem key={index}>
                    <Recipes
                      onClick={() => modalOpenClick(i)}
                      style={{
                        backgroundImage: `url(${i.ATT_FILE_NO_MAIN})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <RecipesTitle>{i.RCP_NM}</RecipesTitle>
                  </RecipeItem>
                ))
              : null}
          </RecipeWrapper>
        </SearhCook>
      </SearchWrapper>
    </Modal>
  );
}
