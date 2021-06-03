import {BrowserRouter,Switch, Route} from 'react-router-dom';
import CadastrarInvestimento from '../Pages/CadastrarInvestimento';
import ListarInvestimento from '../Pages/ListarInvestimentos';
import CadastrarCategoria from '../Pages/CadastrarCategoria';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListarInvestimento} />
                <Route exact path="/cadastrar-investimento" component={CadastrarInvestimento} />
                <Route exact path="/listar-investimento" component={ListarInvestimento} />
                <Route exact path="/cadastrar-categoria" component={CadastrarCategoria} />
            </Switch>
        </BrowserRouter>
    );
}