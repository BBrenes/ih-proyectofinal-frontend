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
        <div className="container">
          <div className="mt-4 row">
            <div className="col-md-4">
              <ListaGatos />
            </div>
            <Switch>
              <div className="col-md-8">
                <Route path="/admingatos/:id" component={DetallesGatos} exact />
              </div>
            </Switch>
          </div>
        </div>
       </Router>     
    </>
  );
}

export default AdminGatos;