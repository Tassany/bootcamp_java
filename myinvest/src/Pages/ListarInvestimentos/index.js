import "antd/dist/antd.css";

import { Layout, Menu, Table, Button,message} from 'antd';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import InvestimentoService from "../../service/InvestimentoService";
const { Header, Content, Footer } = Layout;

const {Column} = Table;

export default function ListarInvestimento(){
    const [investimentos, setInvestimentos] = useState([]);

    useEffect(() => {
        refreshInvestimentos();
        return () => {
            
        }
    }, [])


    async function refreshInvestimentos(){
        InvestimentoService.retriveAllInvestimentos()
            .then(
                response => {
                    setInvestimentos(response.data)
                }
            )
        
    }

    function remove(record){
        InvestimentoService.deleteInvestimento(record.codigo)
        message.success('Investimento removido com sucesso!');
    }

    return(
        <div className="container">
            <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/cadastrar-investimento">Cadastrar investimento</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/listar-investimento">Listar Investimento</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/cadastrar-categoria">Cadastrar categoria</Link>
                    </Menu.Item>
                </Menu>
            </Header>
                <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <h2>INVESTIMENTOS</h2>
                    <Table dataSource={investimentos}>
                        <Column title="Código ativo" dataIndex="codigoAtivo" key="codigoAtivo"></Column>
                        <Column title="Valor" dataIndex="valorCota" key="valorCota"></Column>
                        <Column title="Quantidade de cotas" dataIndex="quantidadeCotas" key="quantidadeCotas"></Column>
                        <Column title="Data da compra" dataIndex="dataCompra" key="dataCompra"></Column>
                        <Column title="Remover" key="atualizar"
                            render={(text,record) =>(<Button onClick={()=>remove(record)}
                            type="primary"
                            >Remover</Button>)}
                        ></Column>
                    </Table>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My Invest ©2021</Footer>
                
            </Layout>

        </div>
    );
}