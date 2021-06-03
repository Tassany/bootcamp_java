import "antd/dist/antd.css";

import { Layout, Menu, Button,message, DatePicker,Input, InputNumber, Form, Select} from 'antd';
import {Link} from 'react-router-dom';
import InvestimentoService from "../../service/InvestimentoService";
import CategoriaService from "../../service/CategoriaService";
import {useState, useEffect} from 'react';
const { Header, Content, Footer } = Layout;
const { Option } = Select;





export default function CadastrarInvestimento(){

    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState(null);

    useEffect(() => {
        refreshCategorias();
        return () => {
            
        }
    }, [])

    async function refreshCategorias(){
        CategoriaService.retriveAllCategorias()
            .then(
                response => {
                    setCategorias(response.data)
                }
            )
        
    }

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 3 },
      };
      const tailLayout = {
        wrapperCol: { offset: 4, },
      };
      
    const onFinish = (values) => {
        const res = InvestimentoService.saveInvestimento(values);
        console.log(res);
        message.success("Investimento salvo com sucesso!");
    }

    function handleChange(value){
        setCategoria(value);
    }
    // const onFinishFailed= (errorInfo) => {
    //     message.danger("Investimento salvo com sucesso!");
    //     console.log('Failed:', errorInfo)
    // }



    return(
        <div className="container">
            <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/cadastrar-investimento">Cadastrar investimento</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/listar-investimento">Listar Investimento</Link>
                    </Menu.Item>
                </Menu>
            </Header>
                <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <h2>CADASTRAR INVESTIMENTOS</h2>
                    <Form {...layout} name="basic"
                    initialValues={{
                        remenber:true,
                    }}
                    onFinish={onFinish}

                    >
                        <Form.Item
                            label="Código"
                            name="codigoAtivo"
                            rules={[
                            {    required:true,
                                message:'Insira o código ativo!',
                            },
                            ]}
                        >
                         <Input />   
                        </Form.Item>

                        <Form.Item
                            label="Valor"
                            name="valorCota"
                            rules={[
                            {    required:true,
                                message:'Insira o valor da cota!',
                            },
                            ]}
                        >
                         <InputNumber />   
                        </Form.Item>

                        <Form.Item
                            label="Quantidade de cotas"
                            name="quantidadeCotas"
                            rules={[
                            {    required:true,
                                message:'Insira a quantidade de cotas!',
                            },
                            ]}
                        >
                         <InputNumber />   
                        </Form.Item>
                        <Form.Item
                            label="Data da compra"
                            name="dataCompra"
                            rules={[
                            {    required:true,
                                message:'Insira a data da compra!',
                            },
                            ]}
                        >
                         <DatePicker />   
                        </Form.Item>


                        <Form.Item
                            label="Categoria"
                            name="categoria"
                            // rules={[
                            // {    required:true,
                            //     message:'Insira a categoria!',
                            // },
                            // ]}
                        >
                         <Select  onChange={handleChange}>
                            {categorias.map((item,index)=>{
                                return(
                                    <Option key={item.id} value={item.id}>
                                        {item.nome}
                                    </Option>
                                )
                            })}
                         </Select>
                        </Form.Item>



                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My Invest ©2021</Footer>
                
            </Layout>

        </div>
    );
}