import {BrowserRouter,Switch, Route} from 'react-router-dom';
import CadastrarInvestimento from '../Pages/CadastrarInvestimento';
import ListarInvestimento from '../Pages/ListarInvestimentos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListarInvestimento} />
                <Route exact path="/cadastrar-investimento" component={CadastrarInvestimento} />
                <Route exact path="/listar-investimento" component={ListarInvestimento} />
            </Switch>
        </BrowserRouter>
    );
}