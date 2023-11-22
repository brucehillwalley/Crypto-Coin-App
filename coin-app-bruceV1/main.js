//? MAIN.JS
console.log("***** main *****");

const inputCoin = document.querySelector("#inputCoin");
const btnCoin = document.querySelector("#btnCoin");
const mainUl = document.querySelector(".coins");

let coins = [];
let ekranda=[]

const getCoin = async () => {
  const res = await fetch("https://api.coinranking.com/v2/coins");
  const data = await res.json();
  console.log(data);
  console.log(data.data.coins);
  coins = data.data.coins;
};

getCoin();


btnCoin.addEventListener("click", (e) => {
  e.preventDefault();
 
  const inCoin = inputCoin.value;
  console.log(inCoin);
  const filteredCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(inCoin.toLowerCase())
  );
  console.log(filteredCoin);
  if (filteredCoin.length == 0) {
    Swal.fire({
      icon: "warning",
      title: "Coin not found",
      text: "Control your input",
      footer:
        '<a href="https://coinmarketcap.com/all/views/all/" target="_blank">Wanna see coin list?</a>',
    });
  }else{

  filteredCoin.forEach((coin) => {
    if (!ekranda.includes(coin)) {
       mainUl.innerHTML += `
        <li class="coin"><div class="remove-icon"><i class="fas fa-window-close"></i></div>
        <p class="coin-name">${coin.name}<sup>${coin.symbol}</sup></p>
        <p class="coin-temp">${Number(coin.price).toFixed(2)}$</p>
        <figure><img src="${coin.iconUrl}" alt="">
        <figcaption style=${
          coin.change > 0 ? "color:green" : "color:red"
        }><i class="fas fa-chart-line"></i>${coin.change}</figcaption>
        </figure>
        </li> `; 
        ekranda.push(coin)
    }else{
      Swal.fire({
        icon: "warning",
        title: "Coin already exists",
        text: "search another coin",
        footer:
          '<a href="https://coinmarketcap.com/all/views/all/" target="_blank">Wanna see coin list?</a>',
      });
    }
   
  })};
});

mainUl.addEventListener("click",(e)=>{{

  console.log(e.target);
  if(e.target.classList.contains("fa-window-close")){
    e.target.parentNode.parentNode.remove()
  }
}})