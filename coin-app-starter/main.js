//? MAIN.JS
console.log("***** main *****");

const inputCoin = document.querySelector("#inputCoin");
const btnCoin = document.querySelector("#btnCoin");
const mainUl = document.querySelector(".coins");

let coins=[]

const getCoin = async () => {
  const res = await fetch("https://api.coinranking.com/v2/coins");
  const data = await res.json();
  console.log(data);
  console.log(data.data.coins);
  coins=data.data.coins

}

getCoin()

btnCoin.addEventListener("click",(e)=>{
e.preventDefault()
const inCoin=inputCoin.value
console.log(inCoin);
const filteredCoin= coins.filter((coin)=>coin.name.toLowerCase().includes(inCoin.toLowerCase()))
mainUl.innerHTML=``
    filteredCoin.forEach(coin => {
        mainUl.innerHTML+=`
        <li class="coin"><div class="remove-icon"><i class="fas fa-window-close"></i></div>
        <p class="coin-name">${coin.name}<sup>${coin.symbol}</sup></p>
        <p class="coin-temp">${Number(coin.price).toFixed(2)}$</p>
        <figure><img src="${coin.iconUrl}" alt="">
        <figcaption style=${coin.change>0?"color:green":"color:red"}><i class="fas fa-chart-line"></i>${coin.change}</figcaption>
        </figure>
        </li> `
    });

})