"use client"
import React from 'react';
import { Anchor, Col, Row } from 'antd';
import Stati from "@/app/Stats/Stati";
const App = () => (
  <Row>
      <Col span={16}>

          <div className="row">
              <div className="col">
                  <div
                      id="Stats"
                      style={{
                          // height: '100vh',
                          background: 'rgba(255,0,0,0.02)',
                      }}
                  />
                   <Stati/>
              </div>
              <div className="col">
                  <Stati/>
              </div>

          </div>
          <div
              id="part-2"
              style={{
                  height: '100vh',
                  background: 'rgba(0,255,0,0.02)',
              }}
          />
          <div
              id="part-3"
              style={{
                  height: '100vh',
                  background: 'rgba(0,0,255,0.02)',
              }}
          />
      </Col>
      <Col span={8}>
          <Anchor
              items={[
                  {
                      key: 'Stats',
                      href: '#part-1',
                      title: '',
                  },
                  {
            key: 'part-2',
            href: '#part-2',
            title: '',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: '',
          },
        ]}
      />
    </Col>
  </Row>
);
export default App;