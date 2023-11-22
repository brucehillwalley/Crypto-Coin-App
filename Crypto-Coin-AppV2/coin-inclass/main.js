//? projenin style dosyasını ana js kodumuza impport ettik
import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest";

//?Selector
const form = document.querySelector("header form");

//?
form.addEventListener("submit", (e) => {
 
  e.preventDefault(); //?
  getCoinData(); //? Api'ye istek at
  e.target.reset(); //?
});

const getCoinData = () => {
  const input = document.querySelector("header form input").value;

  if (!input.trim()) {
    alert("input can not be blank");
  } else {
    apiRequest(input);
  }
};
