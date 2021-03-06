
import "antd/dist/antd.css";
import {useState, useEffect} from 'react';
import { Layout, Menu, Button,message, DatePicker,Input, InputNumber, Form, Select} from 'antd';
import {Link} from 'react-router-dom';
import CategoriaService from "../../service/CategoriaService";
const { Header, Content, Footer } = Layout;

const { Option } = Select;


export default function CadastrarCategoria(){
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
        const res = CategoriaService.saveCategoria(values);
        console.log(res);
        message.success("Categoria salva com sucesso!");
    }

    function handleChange(value){
        setCategoria(value);
    }
    return(
        <div className="container">
        <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
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
                <h2>CADASTRAR CATEGORIAS</h2>
                <Form {...layout} name="basic"
                initialValues={{
                    remenber:true,
                }}
                onFinish={onFinish}

                >
                    <Form.Item
                        label="C??digo"
                        name="codigo"
                        rules={[
                        {    required:true,
                            message:'Insira o c??digo!',
                        },
                        ]}
                    >
                     <Input />   
                    </Form.Item>

                    <Form.Item
                        label="Descri????o"
                        name="descricao"
                        rules={[
                        {    required:true,
                            message:'Insira a descri????o!',
                        },
                        ]}
                    >
                     <Input />   
                    </Form.Item>

                    <Form.Item
                        label="Nome da categoria"
                        name="nome"
                        rules={[
                        {    required:true,
                            message:'Insira o nome da categoria!',
                        },
                        ]}
                    >
                     <Input />   
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>My Invest ??2021</Footer>
            
        </Layout>

    </div>
);
}