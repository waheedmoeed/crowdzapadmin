import React, {useState, useEffect} from 'react';
import './style.css';
import Dashboard from "Components/DashboardLayout";
import InvestmentRecord from './Components';
import {getUserInvestments} from "Services/InvestmentPortfolio"
import Loader from 'react-loader-spinner';
import Alert from "Components/Common/Alert";

function InvestmentsManagment (){
    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        getUserInvestments(responseHandler)
    }, [])

    const responseHandler = (msg, data)=>{
        setLoading(false)
        if(msg == ""){
            setRecords(data)
        }else{
            setError(msg)
        }
    }

    const getRecordsUI = ()=>{
        console.log(records.length)
        return(
            records.map((value, index)=>(
                <InvestmentRecord index={index} data ={value}/>
            ))
        )
    }

    return (
        <div className="walletPage">
             <Dashboard>
                    <div className="dashboardTitle">
                        <h3>INVESTMENTS</h3>
                    </div>
                    <div className="details mianInvestment">                
                        <Loader type="Dots" color="#00A9A4" height={60} width={60} visible={loading}/>                                        
                        <Alert show={(error)?true:false} class="danger" message={error} />                        
                        {
                            getRecordsUI()
                        }
                    </div>
            </Dashboard>
        </div>
    )
}

export default InvestmentsManagment;