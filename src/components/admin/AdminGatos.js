import ListaGatos  from './ListaGatos'
import DetallesGatos  from './DetallesGatos'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function AdminGatos() {
  return (
    <>
       <Router>
        Hola Mundo
        <ListaGatos />
        <Switch>
          <Route path="/admingatos/:id" component={DetallesGatos} exact />
        </Switch>

       </Router>     
                

    </>
  );
}

export default AdminGatos;