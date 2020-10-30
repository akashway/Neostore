import React from 'react'
import './loginStyles.css'
import { FaFacebookF } from 'react-icons/fa'
import { ImGoogle } from 'react-icons/im'
import { FiTwitter } from 'react-icons/fi'
import EmailIcon from '@material-ui/icons/Email'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'

function Login(){
    return(
        <div className="container">

            <div className="row">

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" style={{borderRight:"2px solid black"}}>
                    <div>
                        <button id="socialBtn1" className="btn" > < FaFacebookF style={{width:"25px",height:"50px",marginRight:"15px"}} /> <span>Login with Facebook</span></button>
                    </div>
                    <div>
                        <button id="socialBtn1" style={{backgroundColor:"rgb(219, 68, 55)"}}className="btn"><ImGoogle style={{width:"25px",height:"50px",marginRight:"15px"}}/><span>Login with Google</span></button>
                    </div>
                    <div>
                        <button id="socialBtn1" style={{backgroundColor:"rgb(0, 172, 238)"}}className="btn"><FiTwitter style={{width:"25px",height:"50px",marginRight:"15px"}}/><span>Login with Twitter</span></button>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                   <div>
                       <div style={{fontSize:"25px"}}>Login to NeoSTORE</div>
                        <form  noValidate autoComplete="off">
                            {/* <TextField id="outlined-basic" label="Email Address" variant="outlined" /> */}
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                        <EmailIcon />
                                        </InputAdornment>
                                    ),
                                    }}/>
                            </div>

                            <div>

                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                        <VisibilityOffIcon />
                                        </InputAdornment>
                                    ),
                                    }}/>
                            </div>

                            <div>
                            <button className="btn btn-success">Login </button>
                            </div>
                        </form>
                   </div>
                </div>

            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div style={{textAlign:"center"}}><span>Register Now</span><span>Forgotten</span></div>
                </div>
            </div>

        </div>
    )
}

export default Login