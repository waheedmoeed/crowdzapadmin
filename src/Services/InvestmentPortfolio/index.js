import {InvestmentPortfolioService} from "./InvestmentPortfolioService";

const investmentPortfolioService = new InvestmentPortfolioService()

// Register UserService - return ok response on success
export const newInvestment = (txHash ,data, callBack) => {
    let investObj ={
        contractAddress: data.contractAddress,
        amount: data.amount,
        transactionHash : txHash,
        contractType: data.contractType
    }
    investmentPortfolioService.addNewInvestment(investObj).then((res)=>{
        if(res.status === 200){
            callBack("PROCESSING_SUCCEED", txHash)
        }else{
            callBack("PROCESSING_FAILED", txHash)
        }
    })
};