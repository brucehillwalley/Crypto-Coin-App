export const apiRequest=async(input)=>{
    
    const API_KEY = "coinrankingab4c994a5f5bcaffc18ef98eb56ec6c7d0b9d41dbf5ec91d"
    const options = { headers: { "x-access-token": API_KEY } }
  
   const url = `https://api.coinranking.com/v2/coins?search=${input}`
    try {
        //?status u ekle
          const res = await fetch(url,options)
          const json=await res.json()
          console.log(json.data.coins[0]);
        
         } catch (error) {
          console.log(error);
         }
        
}