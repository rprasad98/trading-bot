import axios from "axios";
import { DepthManager } from "./DepthManager";
//import express from "express";

//const app = express();


const solToUsdtDepthManager = new DepthManager("B-XAI_USDT");
const usdtToInrDepthManager = new DepthManager("B-USDT_INR");
const inrToUsdtDepthManager = new DepthManager("B-INR_USDT");
const usdtToSolDepthManager = new DepthManager("B-USDT_XAI");
const solToInrDepthManager = new DepthManager("B-XAI_INR");
const inrToSolDepthManager = new DepthManager("B-INR_SOL");

setInterval(() => {
    
    console.log(solToInrDepthManager.getRelevantDepth());
    console.log(usdtToInrDepthManager.getRelevantDepth());
    console.log(solToUsdtDepthManager.getRelevantDepth());
    
    //there are tow sides you can sit on
    //sell SOL for INR, buy USDT from inr, buy sol from USDT
    
    const GetInr = solToInrDepthManager.getRelevantDepth().lowestAsk - 0.001;
    const GetUsdt = GetInr/usdtToInrDepthManager.getRelevantDepth().lowestAsk;
    const GetSol = GetUsdt / solToUsdtDepthManager.getRelevantDepth().lowestAsk;
        console.log(`You can convert ${1} XAI into ${GetSol} XAI`)

    //Buy SOL from INR, sell SOL for USDT, sell USDT for INR

    // const getSol= inrToSolDepthManager.getRelevantDepth().lowestAsk + 0.001;
    // console.log(getSol);
    // const GetUsdt2 = solToUsdtDepthManager.getRelevantDepth().lowestAsk;
    // console.log(GetUsdt2);
    // const GetInr2 = usdtToInrDepthManager.getRelevantDepth().lowestAsk * GetUsdt2;
    // const getSol2 = GetInr2/solToUsdtDepthManager.getRelevantDepth().lowestAsk;
    // console.log(`You can convert ${getSol} INR into ${getSol2} INR`)
    console.log(GetInr, GetUsdt, GetSol);
}, 2000);
