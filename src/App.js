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



function App(){
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
                          <MenuItem key="Dashboard">Dashboard</MenuItem>
                          <SubMenu
                          title={
                           <span>
                              <MailOutlined />
                              <span>About Us</span>
                           </span>
                          }   
                          >               
                                    <Menu.ItemGroup key="Aboutus" title="country ">
                                  <Menu.Item key="location1">Location</Menu.Item>
                                  <Menu.Item key="location2">Location 2</Menu.Item> 
                              </Menu.ItemGroup>
                          </SubMenu>
                      </Menu>
                    </Sider>
                    <Layout> 
                        <Content style={{padding:'0 50px'}}>
                           <Breadcrumb style={{margin:'16px 0'}}>
                           <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb> 
                            <div style={{background: '#FFF', padding:24, minHeight: 430,}}> Content</div>
                        
                        </Content>
                        
                        <Footer style={{ textAlign: 'center' }}>Byte Design ©2020 Created by Thomas UED</Footer>
                     </Layout>  
                    </Layout>
                </Layout>
            </div>
        
    );
}
export default App;


