import * as React from 'react';
import './style.css';
import { useSelector} from "react-redux";
import {Icon} from "react-fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faCaretDown} from '@fortawesome/free-solid-svg-icons'

export default function Contact (props){
    const walletInstance = useSelector((state)=> state.wallet.walletObj)

    return (
      <div className="contactsUs" id={props.index}>
        <div className="avatar headerAvatar">
            <FontAwesomeIcon icon={faCoins} size={"2x"}  color="#0eaaa6"/>  
        </div>
        <div className="info">
          <div className="name">Invested Amount {props.data.name}</div>
          <div className="title">Contract Address {props.data.address}</div>
        </div>
        <div className="ops">
            <FontAwesomeIcon icon={faCaretDown} size={"2x"}  color="#0eaaa6"/>  
        </div>
      </div>
    );
}