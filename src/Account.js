import React from 'react';
import { Row, Col } from 'antd';
import {Image} from  'react-bootstrap';
import './Account.css'
const img1 = require('./images/s10.jpg')

const Account = () => (
  <div className="container">
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view  style={{ paddingBottom:0, margin:0}}>
      <Image width='240' height='240' src={require('./images/s10.jpg')}/>
      <span style={{color:'blue', fontweight:'bold', alignItems:'center' }}>Samsung S10</span>
      <p>$500</p>
      </view>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view>
      <Image width="240" height="240" src={img1} />
      <span>LG mobile</span>
      <p>$950</p>
      </view>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view>
      <Image width="240" height="240" src={require('./images/s10.jpg')}/>
      <span>Apple</span>
      <p>$590</p>
      </view>
     
    </Col>
  </Row>

  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view  style={{backgroundColor:'red', paddingBottom:0, margin:0}}>
      <Image width='240' height='240' src={require('./images/s10.jpg')}/>
      <span>One Plus</span>
      <p>$600</p>
      </view>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view>
      <Image width="240" height="240" src={img1} />
      <span>Nokia</span>
      <p>$430</p>
      </view>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <view>
      <Image width="240" height="240" src={require('./images/s10.jpg')}/>
      <span >ALcatel</span>
      <p>$800</p>
      </view>
     
    </Col>
  </Row>
  </div>
);
export default Account