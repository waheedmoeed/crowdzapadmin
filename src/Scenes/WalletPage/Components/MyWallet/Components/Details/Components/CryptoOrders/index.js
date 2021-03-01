import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getCryptoOrders} from "Services/CryptoOrder";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare , faSpinner, faMinusSquare} from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

function CryptoOrders(){
    const cryptoOrders = useSelector((state)=> state.cryptoOrders.cryptoOrders)
    const loading  = useSelector((state)=> state.cryptoOrders.loadingOrders)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(cryptoOrders.length === 0){
            dispatch(getCryptoOrders())
        }
    })

    return (
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>Vendor Node</th>
                <th>Amount</th>
                <th>Order Date</th>
                <th>Transaction Hash</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {
                (loading === true)?
                    <Loader
                        type="ThreeDots" color="#00A9A4" height={40} width={50} visible={loading}
                    />
                    :
                    cryptoOrders.map((value, index) =>(
                        <tr>
                            <td>{value.nodeName}</td>
                            <td>{value.amount}</td>
                            <td>{new Date(value.orderTime).toDateString()}</td>
                            <td>{value.transactionId || "---"}</td>
                            <td>{(value.processed === 0) ?
                                <FontAwesomeIcon icon={faCheckSquare} size="lg"  color="green" />
                                :
                                (value.processed === 1) ?
                                    <FontAwesomeIcon icon={faSpinner} size="lg" color="green" spin  />
                                    :
                                    <FontAwesomeIcon icon={faMinusSquare} size="lg" color="red"/>
                            }
                            </td>
                        </tr>
                        )
                    )
            }
            </tbody>
        </table>
    )
}
export default CryptoOrders