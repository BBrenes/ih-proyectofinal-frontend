import Login  from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/ListadoProyectos'
import AdminGatos from './components/admin/AdminGatos'

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
              </Switch>
            </Router>  
      </AuthState>
    </ProyectoState>
    </AdminGatosState>
    </>
  );
}

export default App;