import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import { Layout, Col, Row, Avatar, Button, Dropdown, Menu } from 'antd';
import logo from './images/logo.png'

const { Header, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a href="/friends">
        ดูรายชื่อเพื่อน
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/changepassword">
        เปลี่ยนรหัสผ่าน
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">
        ออกจากระบบ
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ height: '5vh', lineHeight: '0' }} >
          <Row style={{ height: '100%' }} type="flex" align="middle">
            <Col span={4} style={{ height: '100%' }} type="flex" align="end">
              <a href="/">
                <img src={logo} alt="Logo Fakebook" style={{ height: '5vh' }} />
              </a>
            </Col>
            <Col span={20}>
              <Row type="flex" justify="end">
                <Col span={4} type="flex" align="end">
                  <Avatar
                    src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_eui2=AeGGEac45Y7P61v-juKLihSuqQvzyZAUvy9dz3sSynbKiBRLT6lgXhjtX5jjtNAY9MSDoejoGIsDoajvZuQbEsl64swyCN-293Zo2K_d4tRtLw&_nc_oc=AQnKNnIYBPW5aLIzcAhWJ2OrZZN-2HCc5yDfjONO_xau-OVSNZ2MiGhybKrEeToeLgw&_nc_ht=scontent.fbkk22-3.fna&oh=ba6de0084eebf847928c72be1a7551dd&oe=5E4F2B50"
                  />
                </Col>
                <Dropdown overlay={menu}>
                  <Col span={6} type="flex" align="start">
                    <a href="/">
                      <Button type="link">Nuttachai Kulthammanit</Button>
                    </a>
                  </Col>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content style={{ height: '95vh' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/changepassword" component={ChangePassword} />
          </Switch>
        </Content>
      </Layout>

    </div>
  );
}

export default App;
