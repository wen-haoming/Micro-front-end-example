import React,{useState} from 'react'
import { Layout, Menu, } from 'antd';
import { MicroApp } from 'umi';
import './index.less';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { IRouteComponentProps } from 'umi'

const {Content,Header,Sider} = Layout

const SiderDemo:React.FC<IRouteComponentProps> = (props)=>{

  const [collapsed,setCollapsed] = useState(false)
  const [appName,setAppName] = useState('')

  const toggle = ()=>{
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{height:'100%'}} id="components-layout-demo-custom-trigger">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>setAppName('')}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=>setAppName('sub-a-app')} >
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}  onClick={()=>setAppName('sub-b-app')}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {appName && <MicroApp name={appName}></MicroApp>}
        </Content>
      </Layout>
    </Layout>
  )
}


export default SiderDemo
