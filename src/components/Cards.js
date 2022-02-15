import React from 'react'
import { Card, Col } from 'antd';

export default function Cards({icon, text}) {
    return (
        <div>
            <div className="site-card-wrapp">
    
      <Col span={20} style={{marginBottom: '15px', marginTop: '15px', }}>
        <Card style={{color:'#000', borderRadius: '10px'}} title={icon} bordered={false}>
        {text}
        </Card>
        
      </Col>
    
  </div>
        </div>
    )
}
