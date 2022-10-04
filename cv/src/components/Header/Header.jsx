import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css'


const Header=()=>{
    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#9C9583',
            contrastText: '#000000',
          },
        },
      });

    return (
        <>
        <ThemeProvider theme={theme}>
        <div className="header">
        <div className="name">
            <p>Delia Yichen Liu</p>
        </div>
            <div className="header-nav">
                <div className="header-button">
           <Button variant="contained" color='neutral' >Home</Button>
           </div>
           <div className="header-button">
           <Button variant='contained' color='neutral' >CV</Button>
           </div>
           <div className="header-button">
           <Button variant='contained' color='neutral' >Writings</Button>
           </div>
           </div>
        </div>
        </ThemeProvider>
        </>
    )
}

export default Header