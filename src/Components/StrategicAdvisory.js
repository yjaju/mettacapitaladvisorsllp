import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Footer from './Footer';
import './Scroll.css';
import bg3 from './Media/bg3.png';
import bg2 from './Media/bg2.png';



import arvind from './Media/arvind.png'
import landmark from './Media/landmark.png'


const font = 'Lato';
const grey = '#808080';

const styleItem = {display: 'flex', 'paddingTop': '2vh'}
const styleHeadline = {color:'#f8b04b', border: '2px solid #f8b04b', padding: '2vw', cursor: 'pointer', fontFamily: font}


export default function Expertise() {

    return(
        <div>
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg2} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Strategic Advisory
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Strategic Advisory
                        </Typography>
                    </div>
                </Hidden>


                <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '8vh', 'paddingLeft': '12vw', 'paddingRight': '3vw'}}>
                    <Grid item xs={10} sm={6} style={styleItem}>
                            <Typography variant="body1" gutterBottom id="MA" style={{color: grey, fontFamily: font}}>
                            <span style={{fontWeight:'bold'}}>We provide a range of services across the lifecycle to our clients, which aligns with their vision and growth trajectory. Often embedded into client management teams, Metta Capital participates in discussions on strategy, financing, strategic options and other important initiatives.</span>
                            <br/> <br/> 
                            Our clients see us as partners in their long term growth and strategy. 
                            <br/> <br/> 
                            We are seen as bouncing boards, and support, stimulate and challenge our client’s point of view and support their strategic decision-making process. 
                            <br/><br/>
                            Many of our transactions are thus natural outcomes of our engagement with our clients. 
                            </Typography>
                    </Grid>
                    <Grid item xs={10} sm={6} style={styleItem}>
                    <Grid container direction="column">
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src={landmark} alt="Landmark Auto" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                    Consolidation of Landmark Auto companies
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src={arvind} alt="Arvind" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                    Demerger & Listing of Branded Apparel & Engineering Businesses
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}