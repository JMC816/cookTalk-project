export function GetCook() {
  return fetch(
    `http://openapi.foodsafetykorea.go.kr/api/${
      import.meta.env.VITE_API_KEY
    }/COOKRCP01/json/1/1000`
  ).then((response) => response.json());
}

export function GetIngredient(ingredient: string) {
  return fetch(
    `http://openapi.foodsafetykorea.go.kr/api/${
      import.meta.env.VITE_API_KEY
    }/COOKRCP01/json/1/1000/RCP_PARTS_DTLS="${ingredient}"`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());
}
