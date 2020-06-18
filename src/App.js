import React from 'react';
import './App.css';
import { Typography, Breadcrumb } from 'antd';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';
import Account from './Account';
import EmployeePayroll from './EmployeePayroll';
import Expenses from './Expenses';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const routes = [
    {
        path: './Account',
        key:1
    },
    {
        path: './Expenses',
        key:2
    },
    {
        path:'./employee',
        key:3
    }
]




class  App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
                activePath: null,
                items: [
                    {
                      path: '/Account', /* path is used as id to check which NavItem is active basically */
                      name: 'Account', 
                      key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                    },
                    {
                      path: '/EmployeePayroll',
                      name: 'EmployeePayroll', 
                      key: 2
                    },
                    {
                      path: '/Expenses',
                      name: 'Epenses',                   
                      key: 3
                    },
                  ]
            
          /*  dashboard:true,
            location1: false,
            location2:false,
            account:false*/
        }
    }
    OnItemClick =(path) => {
        this.setState({activePath:path});
    }
    render(){
        const {items,activePath}= this.setState;
        return(
            <div style={{flex:1}}>
                 <Layout style={{flex:1}}>
                 <Header style={{padding:10 }} >
                     
                 <Title style={{color:"white"}} level={4}>Blue Tech</Title>
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
                                location1:false,
                                account:false})
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
                           <SubMenu
                           title={
                            <span>
                               <AppstoreOutlined  />
                               <span onClick={()=>this.setState({dashboard:false,
                            location2:false,
                            location1:false,
                            account:true
                            })}>Account </span> 
                            </span>
                           }   
                           >               
                           </SubMenu>

                           <SubMenu
                           title={
                            <span>
                               <MailOutlined />
                               <span>Employees Payroll </span>
                            </span>
                           }>            
                           </SubMenu>
                           <SubMenu
                           title={
                            <span>
                               <MailOutlined />
                               <span>Expenses </span>
                            </span>
                           }   
                           >               
                                <Menu.ItemGroup key="Aboutus" title="Project ">
                                   <Menu.Item key="Schedule" onClick={()=>{
                                       this.setState({dashboard:false,
                                    location1:true,
                                location2:false,
                                    account:false})
                                   }}>Schedule</Menu.Item>
                                   <Menu.Item key="Task" onClick={()=>{
                                       this.setState({dashboard:false,
                                    location2:true,
                                location1:false,
                                    acount:false})
                                   }}>Task</Menu.Item> 
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
                             <Expenses/>
                      </Content>:null}
                      {this.state.Account===true}
                        <Account/>
                      <Content>
                      <React.Fragment>
                      <Router>
                      <Switch>     
                        <Route exact path="/Account" component={Account} />
                        <Route exact path="/Employee Payroll" component={EmployeePayroll} />
                        <Route exact path="/Expenses" component={Expenses} />                      
                        </Switch>
                        </Router>
                      </React.Fragment>
                      </Content>
                     
                      
                         <Footer style={{ textAlign: 'center' }}>Byte Design ©2020 Created by Thomas UED</Footer>
                      </Layout>  
                     </Layout>
                 </Layout>
             </div>
         
     );

    }
    
}
export default App;


