import React, {useState} from "react"
import "./App.css"
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function App() {
    const theme = createTheme();
    const [state, setState] = useState({
        fname: "",
        lname: "",
    })

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <React.Fragment>
            <div align="center">
                <Typography variant="h1" align='left'>Logo Generator</Typography>

                <form>
                    <label>
                        Enter your company name:{" "}
                        <h5>You can always change these later</h5>
                        <TextField
                            label="Company Name"
                            type="text"
                            name="fname"
                            value={state.fname}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <TextField
                            label="Slogan"
                            type="text"
                            name="lname"
                            value={state.lname}
                            onChange={handleChange}
                        />
                    </label>
                </form>
                <h5>
                    Name: {state.fname} {state.lname}
                </h5>
            </div>

        </React.Fragment>

    )
}

export default App
