import React from 'react';
import { Row, Col } from 'antd';
import {Image} from  'react-bootstrap';
const img1 = require('./images/s10.jpg')

const Account = () => (
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      In this Column i will insert an image 
      <Image src="./home/thomas/projects/Reactjs/dashboard/public/s10.jpg/171*180" />
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      there will be an image in this column
      <Image src={img1} />
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Image src={require('./images/s10.jpg')}/>
      imgae of a phone
    </Col>
  </Row>
);
export default Account