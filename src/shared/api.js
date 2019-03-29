export const API_KEY =
  process.env === "production" ? "DMXBSXODLRZLAMU3" : "DMXBSXODLRZLAMU5";
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

export const fetchOtherData = async name => {
  try {
    let response = await fetch(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
