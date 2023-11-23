//? projenin style dosyasını ana js kodumuza impport ettik
import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest";
import setMessage from "./src/setMessage";

//?Selector
const form = document.querySelector("header form");
let coinScreen=[]
//? form için submit event'inin tanımlanması 
form.addEventListener("submit", (e) => {
 
  e.preventDefault(); //? tüm submit davranışlarını engelle
  getCoinData(); //? Api'ye istek at
  e.target.reset(); //? Formu silme davranışı çalıştır
});

const getCoinData = () => {
  const input = document.querySelector("header form input").value;

  if (!input.trim()) {
    // alert("input can not be blank");
    setMessage("input can not be blank 😉")
  } else {
    apiRequest(input,coinScreen);
  }
};
