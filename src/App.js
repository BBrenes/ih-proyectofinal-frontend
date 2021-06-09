import Login  from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/ListadoProyectos'
import AdminGatos from './components/admin/AdminGatos'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Test from './components/layout/Test'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthState from "./context/autenticacion/AuthState"
import ProyectoState from './context/proyectos/ProyectoState'
import AdminGatosState from './context/admingatos/AdminGatosState'
import RutaPrivada from './components/rutas/RutaPrivada'

import './App.css';

function App() {
  return (
    <>

    <AdminGatosState>
    <ProyectoState>
      <AuthState>
      <Header />
            <Router>
              <Switch>
                <Route 
                  path="/"
                  component={Login}
                  exact
                />
                <Route 
                  path="/nueva-cuenta"
                  component={NuevaCuenta}
                  exact
                />
                <RutaPrivada 
                  path="/proyectos"
                  component={Proyectos}
                  exact              
                />
                <RutaPrivada 
                  path="/admingatos"
                  component={AdminGatos}
                  exact              
                />
                <Route 
                  path="/test"
                  component={Test}
                  exact
                />
              </Switch>
            </Router>
      <Footer />
      </AuthState>
    </ProyectoState>
    </AdminGatosState>
    </>
  );
}

export default App;