import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {Paper} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';


class Description extends Component{
    render(){
        return(
            <div
                role="tabpanel"
                hidden={this.props.value !== 0}
                id={'simple-tabpanel-0'}
                aria-labelledby={`simple-tab-0`}
                className="listedPropDetail"
            >
                    <Grid container spacing={1} direction={"row"}>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <Paper elevation={10}>
                            <div>
                                <img src={this.props.data.mainImg} style={{width:450, height:400}} className="img"/>
                            </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <div className="desc">
                                <Typography gutterBottom variant="h4" className="totalInvest">
                                    {this.props.data.title}
                                </Typography>
                                <Typography gutterBottom variant="body1" >
                                    TOTAL INVESTMENT :<FontAwesomeIcon size="small" color='primary' icon={faCoins}/> 1222234
                                </Typography>
                                <Typography gutterBottom variant="body1">
                                    TOKEN PRICE :<FontAwesomeIcon size="small" color='primary' icon={faCoins}/> 1222234 rel
                                </Typography>
                                <Divider variant='middle'/>
                                <Typography variant="body2">
                                    START DATE : {new Date(this.props.data.createdAt).toDateString()}
                                </Typography>
                                <Typography variant="body2">
                                    END AT : {new Date(this.props.data.endDate).toDateString()}
                                </Typography>
                                <Typography variant="body2">
                                    CREATOR : {this.props.data.nodeName}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
            </div>
        )
    }
}

export default Description