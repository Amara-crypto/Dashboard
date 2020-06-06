import React from 'react';
import './App.css';
import { Typography, Breadcrumb } from 'antd';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;




class  App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            dashboard:true,
            location1: false,
            location2:false,
        }
    }
    render(){
        return(
            <div className="container">
                 <Layout>
                 <Header style={{padding:10 }} >
                     
                 <Title style={{color:"white"}} level={4}>Blue Bird</Title>
                 <Avatar style={{float:"right",paddingBottom:10}} size="large"src='./iconfinder_7_avatar_2754582.png' />
                 </Header>
                     <Layout>
                     <Sider >
                       <Menu
                       defaultSelectedKeys={["Dashboard"]}
                       mode="inline"
                       >
                           <MenuItem onClick={()=>{
                                       this.setState({dashboard:true,
                                    location2:false,
                                location1:false})
                                   }} key="Dashboard">Dashboard</MenuItem>
                           <SubMenu
                           title={
                            <span>
                               <MailOutlined />
                               <span>About Us</span>
                            </span>
                           }   
                           >               
                                     <Menu.ItemGroup key="Aboutus" title="country ">
                                   <Menu.Item key="location1" onClick={()=>{
                                       this.setState({dashboard:false,
                                    location1:true,
                                location2:false})
                                   }}>Location</Menu.Item>
                                   <Menu.Item key="location2" onClick={()=>{
                                       this.setState({dashboard:false,
                                    location2:true,
                                location1:false})
                                   }}>Location 2</Menu.Item> 
                               </Menu.ItemGroup>
                           </SubMenu>
                       </Menu>
                     </Sider>
                     <Layout> 
                         {this.state.dashboard===true?
                         <Content style={{padding:'0 50px'}}>
                         <Breadcrumb style={{margin:'16px 0'}}>
                         <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                          </Breadcrumb> 
                          <div style={{background: '#FFF', padding:24, minHeight: 430,}}>This is the  Dashboard</div>
                      
                      </Content>:null}
                         
                      {this.state.location1===true?
                         <Content style={{padding:'0 50px'}}>
                         <Breadcrumb style={{margin:'16px 0'}}>
                         <Breadcrumb.Item>Location 1</Breadcrumb.Item>
                          </Breadcrumb> 
                          <div style={{background: '#FFF', padding:24, minHeight: 430,}}>This is Location 1</div>
                      
                      </Content>:null}
                      {this.state.location2===true?
                         <Content style={{padding:'0 50px'}}>
                         <Breadcrumb style={{margin:'16px 0'}}>
                         <Breadcrumb.Item>Location 2</Breadcrumb.Item>
                          </Breadcrumb> 
                          <div style={{background: '#FFF', padding:24, minHeight: 430,}}>This is Location 2</div>
                      
                      </Content>:null}
                         <Footer style={{ textAlign: 'center' }}>Byte Design ©2020 Created by Thomas UED</Footer>
                      </Layout>  
                     </Layout>
                 </Layout>
             </div>
         
     );

    }
    
}
export default App;


