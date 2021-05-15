import React, {useEffect, useState} from "react"
import {getContracDetailFromChain} from "Services/ListProperty"
import Typography from "@material-ui/core/Typography";
import Alert from 'Components/Common/Alert'
import Loader from 'react-loader-spinner'

export default function Investments(props){
    const [contractChainDetail, setContractChainDetail] = useState(null)
    const [loading, setLoadingState] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(()=>{
        setLoadingState(true)
        getContracDetailFromChain(props.data.contractAddress, responseHandler)
    },[])

    const responseHandler = (msg, data)=>{
        setLoadingState(false)
        if(msg === ""){
            setContractChainDetail(data)
        }else{
            setErrorMessage(msg)
        }
    }

    const createInvestDetails = ()=>{
        
    }

    return (
        <div
        role="tabpanel"
        hidden={props.value !== 1}
        id={'simple-tabpanel-0'}
        aria-labelledby={`simple-tab-0`}
        className="listedPropDetail"
    >
        <Typography gutterBottom variant="h4" className="totalInvest">
            Investment Details
        </Typography>
        <Loader type="ThreeDots" color="rgb(14, 170, 166)" height={40} width={50} visible={loading}/>
        <Alert show={errorMessage? true: false} class='danger' clearer={()=> setErrorMessage(null)} message={errorMessage}/>
        {contractChainDetail &&
            <div>
                <Typography gutterBottom variant="body1" className="totalInvest">
                    Sold Tokens {contractChainDetail.basic_contract.basic_detail.sold_token}
                </Typography>
                <Typography gutterBottom variant="body1" className="totalInvest">
                    Investment Details
                </Typography>
                <div>
                    {createInvestDetails()}
                </div>
            </div>
        }
        
        </div>
    )
}