import axios from "axios";
export class DepthManager {
    private market: string;
    private bids:{
        [key: string]: string;
    }
    private asks:{
        [key: string]: string;
    }
    constructor(market: string) {
        this.market = market;
        this.bids = {};
        this.asks = {};
        setInterval(() => {
            this.pollMarket();
      },3000);
  }

  private async pollMarket(){
      const response = await fetch(`https://public.coindcx.com/market_data/orderbook?pair=${this.market}`);
     // console.log(depth.data);
      const depth = await response.json();
      this.bids = depth.bids;
      this.asks = depth.asks;
  }
     getRelevantDepth() {
         let highestBid = -100;
         let lowestAsk = 100000000;
        
        Object.keys(this.bids).forEach((key) => {
            if(parseFloat(key)>highestBid){
                highestBid = parseFloat(key);
            }
        });

        Object.keys(this.asks).forEach((key) => {
            if(parseFloat(key)<lowestAsk){
                lowestAsk = parseFloat(key);
            }
        });

        return {
            highestBid,
            lowestAsk
        }
    } 
}