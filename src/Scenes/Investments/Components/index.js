import * as React from 'react';
import './style.css';
import { useSelector} from "react-redux";
import {Icon} from "react-fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faCaretDown} from '@fortawesome/free-solid-svg-icons'

export default function InvestmentRecord (props){
    const walletInstance = useSelector((state)=> state.wallet.walletObj)

    return (
      <div className="investRecord" id={props.index}>
        <div className="avatar headerAvatar">
            <FontAwesomeIcon icon={faCoins} size={"2x"}  color="#0eaaa6"/>  
        </div>
        <div className="info">
          <div className="name">Invested Amount {props.data.amount}</div>
          <div className="title">Contract Address {props.data.contractAddress}</div>
        </div>
        <div className="ops">
            <FontAwesomeIcon icon={faCaretDown} size={"2x"}  color="#0eaaa6"/>  
        </div>
      </div>
    );
}