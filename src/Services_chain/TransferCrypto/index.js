import {Wallet} from "Services/Wallet";
import {cryptoOrderError, cryptoOrderProcessed, processingCryptoOrder} from "Redux/CryptoTransfer";

export const sendRelCoin = (recipientAddress, amount) => (dispatch) =>{
    let client  = Wallet.getInstance().account
    let msgTran =[
        {
            "type": "cosmos-sdk/MsgSend",
            "value": {
                "from_address": client.address,
                "to_address": recipientAddress,
                "amount": [
                    {
                        "denom": "rel",
                        "amount": amount.toString()
                    }
                ]
            }
        }]
    let fee=  {
        "amount": [],
        "gas": "200000"
    }

    dispatch(processingCryptoOrder())
    client.signerCosmosClient.signAndBroadcast(msgTran,fee).then((res)=>{
        dispatch(cryptoOrderProcessed())
        console.log(res)
    }).catch((err)=>{
        dispatch(cryptoOrderError(err))
        console.log(err)
    })
}