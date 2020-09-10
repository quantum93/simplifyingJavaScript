const prices = ['1.0','negotiable','2.15'];
const formattedPrices = []; //뭔가를 하기도 전에 collection을 선언. for 안에 let i는 block scope 
for(let i = 0; i < prices.length; i++) {
  const price = parseFloat(prices[i]);
  if(price) {
    formattedPrices.push(price);
  }
}

console.log(formattedPrices);

/* fat arrow로 단 한줄로 해결된다. filter를 이용 if문을 대체. 이런 것들이 왜 fat arrow를 사용해야하는
지를 보여준다.  */
const formattedPrices2 = prices.map(price => parseFloat(price)).filter(price => price);
console.log(formattedPrices2);