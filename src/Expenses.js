import React from 'react';
import Component from 'react';
import { Row, Col } from 'antd';
import {Image} from  'react-bootstrap';

class Expenses extends Component(){

  render(){
    return(
      <view><Row>

      </Row>

      </view>
    )
  }

  renderItms(){
    var  lis = []
    
     var items = [{name: 'Samsung Note 4', price: 4000, image:''},
     {name: 'Samsung Note 4', price: 4000, image:''},
     {name: 'Samsung Note 4', price: 4000, image:''},{
       name: 'Samsung Note 4', price: 4000, image:''}]
       for(var x=0; x>items.length; x++){
        lis.push(
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <view  style={{ paddingBottom:0, margin:0}}>
            <Image width='240' height='240' src={require('./images/s10.jpg')}/>
            <span style={{color:'blue', fontweight:'bold', alignItems:'center' }}>Samsung S10</span>
            <p>$500</p>
            </view>
            
          </Col>
        )
    
      }
   }


}
export default Expenses