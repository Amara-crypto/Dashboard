import React from 'react';
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
const { Content } = Layout;

class location1 extends React.Component{
    render(){
        return(
            <Content style={{padding:'0 50px'}}>
                         <Breadcrumb style={{margin:'16px 0'}}>
                         <Breadcrumb.Item>Location 1</Breadcrumb.Item>
                          </Breadcrumb> 
                          <div style={{background: '#FFF', padding:24, minHeight: 430,}}>This is the  Location 1</div>
                      
                      </Content>
        )
    }
}

export default location1;