// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
// return 0.

/**
 * 
 * @param {Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.} prices 
 */

// https://www.youtube.com/watch?v=0kafYiWEVpU&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=2&ab_channel=RoadsideCoder

// Brute force solution
var maxProfit = function (prices) {
  let globalProfit = 0;
  // Here prices.length -1 as last element k baad we have nothing to run loop to
  for (i = 0; i < prices.length - 1; i++) {
    for (j = i + 1; j < prices.length - 1; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }

  return globalProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// Optimised is Greedy Algorithm - Greedy Algo basically means
// we will get solution with whatever we have right now

var maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    // for each iteration if the value of current element is less than the minStockPrice - update it
    if (prices[i] < minStockPurchasePrice) minStockPurchasePrice = prices[i];

    const currentProfit = prices[i] - minStockPurchasePrice;
    profit = Math.max(profit, currentProfit);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));



/** 
 * OPTIMIZED SOLUT'n
 * 
 * We have to take into account the min price value and max profit
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]; // min price
    let maxProfit = 0

    for (let i = 0; i< prices.length; i++){
        /** If the max profit is less than the new price we are calculating then
        update it */
        if(maxProfit < prices[i]-min) {
            maxProfit = prices[i]-min
        }
        /** If the current price is less than the min price we assumed, we need to 
        update it as well */
        if(prices[i]<min){
            min=prices[i]
        }
    }
    return maxProfit
};