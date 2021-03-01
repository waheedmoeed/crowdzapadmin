import * as React from 'react';
import './style.css';
import {useHistory}  from 'react-router-dom';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Alert from "Components/Common/Alert";
import {processingCryptoOrder} from "Redux/CryptoTransfer";
import {sendRelCoin} from "Services_chain/TransferCrypto";

function SendForm() {
  const history = useHistory()
  const walletObj = useSelector((state)=> state.wallet.walletObj)
  const locked = useSelector((state)=> state.wallet.walletLocked)
  const processing = useSelector((state)=> state.cryptoTransfer.processing)
  const processingError = useSelector((state)=> state.cryptoTransfer.processingError)
  const [amount, setAmount] = useState(0)
  const [recipientAddress, setRecipientAddress] = useState("")
  const dispatch = useDispatch()

  const sendCrypto = (e)=>{
    e.preventDefault()
    if(recipientAddress.length === 45 && amount > 0){
      dispatch(sendRelCoin(recipientAddress, amount))
    }else{
      dispatch(processingCryptoOrder())
    }
  }

  return (
      <div>
        <div className="dashboardTitle">
          <h3>Withdraw Form</h3>
        </div>
        <div className="depositForm panel panel-default">
          <Loader type="Dots" color="#00A9A4" height={60} width={60} visible={processing}/>
          {
            (!locked)?
                <div className="selectedAccount">
                  <h3>Selected Account</h3>
                  <h5>{walletObj.account.tag}</h5>
                  <h5>{walletObj.account.walletObj.address}</h5>
                </div>
                :
                <></>
          }
          <form>
            <Alert class="danger" show={locked} message="Wallet must be unlocked, before any operation!!" clearButton={true}/>
            <Alert class="danger" show={(processingError)?true: false} message="Failed to transfer rel coin" clearButton={true}/>
            <div className="input-group form-group">
              <span className="input-group-addon">Amount</span>
              <input type="number" className="form-control" onChange={(e)=> setAmount(e.target.value)} placeholder="Amount" />
            </div>
            <div className="input-group form-group">
              <span className="input-group-addon">Recipient Address</span>
              <input type="text" className="form-control" onChange={(e)=> setRecipientAddress(e.target.value)} placeholder="cosmos1at8lxwf5fngzs3g20n84qt5x5nq2t2uymf6mtn" />
            </div>
            <div className="button-group form-group">
              <div className="btn btn-white" onClick={(e) => history.goBack()}>{'<< Back'}</div>
              <button className="btn btn-green" onClick={sendCrypto}>Send</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default SendForm;