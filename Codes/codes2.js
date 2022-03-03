function increasePrices() {
  var increase = 10;
  var prices = [98.99, 15.2, 20, 1026];
  //your code goes here
  for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] + increase;
  }
  console.log(prices);
}
console.log(increasePrices());