import { Container, Grid, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'
import './css/App.css'

function App() {

  return (
    <NoticiasProvider>
      <Container>
          <header className='estiloencabezado'>
            <Typography align='center' marginY={5} component="h1" variant="h3">
              <div >
                <img className='logo' src="../src/logo.png" alt="Logo Albeláez noticias" />
                <p className='parrafo'>
                 Las noticias más importantes de Venezuela y el mundo
                 </p>
              </div>
              
            </Typography>
          </header>

          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10} md={6} lg={4}>
                <Formulario />
            </Grid>
          </Grid>


          <ListadoNoticias />


      </Container>
    </NoticiasProvider>
  )
}

export default App
