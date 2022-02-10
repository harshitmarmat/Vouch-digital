import { Layout } from 'antd'
import ContentCMP from '../content/ContentCMP';
import HeadCMP from '../header/HeadCMP';
import classes from './Layout.module.css';

const { Header , Content } = Layout;

const Structure = () =>{
    return(
        <Layout>
            <Header className={classes.container} >
                <HeadCMP/>
            </Header>
            <Content className={classes.content}>
                <ContentCMP/>
            </Content>
        </Layout>
    )
}

export default Structure;