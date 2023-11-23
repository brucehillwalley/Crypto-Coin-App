import { renderCoins } from "./renderData";
import setMessage from "./setMessage";

export const apiRequest = async (input, coinScreen) => {
  //? env den değişkenin okunması
  const options = {
    headers: { "x-access-token": import.meta.env.VITE_API_KEY },
  };

  const url = `https://api.coinranking.com/v2/coins?search=${input}`;

  try {
    //?status u ekle
    const res = await fetch(url, options);
    const json = await res.json();
    if (json.data.coins.length === 0) {
      // alert("Coin can not be found");
      setMessage("Coin can not be found", "error");
    } else if (!coinScreen.every((e) => e !== json.data.coins[0])) {
      setMessage("already exists");
    } else {
      // console.log(json.data.coins[0]);
      renderCoins(json.data.coins[0]);
      coinScreen.push(json.data.coins[0]);
      console.log(coinScreen);
      console.log(!coinScreen.every((e) => e !== json.data.coins[0]));
    }
  } catch (error) {
    console.log(error);
  }
};
