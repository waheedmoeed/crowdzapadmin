import * as React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoteYea, faPoll} from '@fortawesome/free-solid-svg-icons'
import { votePoll,processPoll } from 'Services_chain/AuthorithyContract';
import {useSelector} from "react-redux";

function PollInfo(props){
    const locked = useSelector((state)=> state.wallet.walletLocked)

    const getVotesAddress = (votes)=>{
        var addresses ="\n"
        if(votes){
            votes.forEach(element => {
                addresses = addresses+element+"\n"
            });
        }
        
        return addresses
    }

    const totalCastedVotes = ()=>{
        return parseInt(props.data.positive_votes)+parseInt(props.data.negative_votes)    
    }

    const vote = (vote)=>{
        if(!locked){
            votePoll(props.data.poll_id, vote)
        }        
    }

    const proPoll = ()=>{
        if(!locked){
            votePoll(props.data.poll_id)
        }        
    }

        return (
            <div className="agentInfoContainer">
                <div className="avatar">
                    <FontAwesomeIcon icon={faPoll} size={"4x"}  color="#0eaaa6"/>  
                </div>
                <div className="info">
                    <div className="name">Status: {(!props.data.processed)?"Pending":"Processed"}</div>
                    <div className="title">Poll Type: {(props.data.type == 1)?"Mintint":"Distribution"}</div>
                    <div className="title">Total Casted Votes: {totalCastedVotes()}</div>
                    <div className="title">Poll Amount: {props.data.coins_amount.amount}</div>
                    <div className="address">Owner: {props.data.owner_voter_poll}</div>  
                    <div className="address">Positive Votes: {getVotesAddress(props.data.positive_votes_address)}</div>
                    <div className="address">Negative Votes: {getVotesAddress(props.data.negative_votes_address)}</div>
                </div>
                <div className="ops">
                    <Button variant="contained" color="#0eaaa6"
                         href="#contained-buttons"
                         disabled={(!props.data.processed)?false:true}
                         onClick={vote(1)}
                    >
                        Vote
                        <FontAwesomeIcon icon={faVoteYea}  color="#0eaaa6"/>                   
                    </Button>
                    <Button variant="contained" color="#0eaaa6"
                        href="#contained-buttons"
                        disabled={(!props.data.processed)?false:true}
                        onClick={vote(0)}
                    >
                        Cancel
                        <FontAwesomeIcon icon={faVoteYea}  color="#0eaaa6"/>                   
                    </Button>
                    <Button variant="contained" color="#0eaaa6"
                        href="#contained-buttons"
                        disabled={(!props.data.processed)?false:true}
                        onClick={proPoll()}
                    >
                        Process Poll
                        <FontAwesomeIcon icon={faVoteYea}  color="#0eaaa6"/>                   
                    </Button>
                </div>
            </div>
        );
}

export default PollInfo;