export const API_KEY = "DMXBSXODLRZLAMU3";
const url = "https://www.alphavantage.co/query?function=";

export const fetchData = async keywords => {
  try {
    let response = await fetch(
      `${url}SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchPrice = async symbol => {
  try {
    let response = await fetch(
      `${url}GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
