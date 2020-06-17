import React from 'react';
import { Row, Col } from 'antd';
import {Image} from  'react-bootstrap';
const img1 = require('./images/s10.jpg')

const Account = () => (
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view style={{backgroundColor:'white', paddingBottom:0, margin:0}}>
      <Image src={require('./images/s10.jpg')}/>
      <span>Hello Dolly</span>
      </view>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Image src={img1} />
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image src={require('./images/s10.jpg')}/>
      imgae of a phone
    </Col>
  </Row>
);
export default Account