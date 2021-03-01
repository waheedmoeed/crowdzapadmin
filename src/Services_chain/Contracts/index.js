import {Wallet} from "Services/Wallet";

export const createBasicContract = () => (dispatch) => {
    let client  = Wallet.getInstance().account
    let msgTran =[
        {
            "type": "smartcontracts/create_basic_contract",
            "value": {
                "creator": client.address,
                "title": "House In Makkah",
                "total_supply" : "1000",
                "token_price": "1000",
                "start_date": "2021-01-26T16:04:27.4609868Z",
                "end_date": "2021-01-26T16:04:27.4609868Z"
            }
        }]
    let fee=  {
        "amount": [],
        "gas": "200000"
    }

    //dispatch((processingCreatePoll()))
    client.signerCosmosClient.signAndBroadcast(msgTran,fee).then((res)=>{
        console.log(res)
        //dispatch(createPollSucceed())
    }).catch((err)=>{
        //dispatch(createPollError(err))
        console.log(err)
    })
}