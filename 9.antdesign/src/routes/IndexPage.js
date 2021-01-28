import React from 'react';
import { connect } from 'dva';
import {Layout} from 'antd';
import NavBar from '../components/NavBar';
import {renderRoutes} from '../utils/routes';
const {Content}=Layout;
function IndexPage(props) {
  return (
   <Layout>
     <NavBar {...props}/>
     <Content>
        {renderRoutes(props.routes)}
     </Content>
   </Layout>
  );
}
export default connect()(IndexPage);
