import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import HardwareInfo from './HardwareInfo';

function Header(){
  return(
    <header>
      <h1>welcome</h1>
    </header>
  )
}
function Nav(){
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
}
function Article(){
  const [open,setOpen] = useState(false);

  return(
    <article>
      <h2>Welcome</h2>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      <br/>
      <Button variant="outlined" color='error' onClick={() => {
        setOpen(true);
      }}> Create </Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hello @!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" color='error'> Create </Button>
        <Button variant="outlined" color='error'onClick={() => {
        setOpen(false);
      }}> Cansel </Button>
          
        </DialogActions>
      </Dialog>
      <HardwareInfo/>
    </article>
  )
}

function App() {
  
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs="2">
        <Nav></Nav>
        </Grid>
        <Grid item xs="8">
        <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
