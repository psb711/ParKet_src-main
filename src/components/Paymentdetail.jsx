import React, { useState } from 'react'
import { Button, Container, } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import "../scss/Paymentdetail.scss";


export default function Paymentdetail(props) {


  return (
    <div className='Paymentdetail' style={{ paddingTop: '60px' }}>

      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/minibanner.png)`, height: '60px' }} className='minibanner'></div>

      <Container className='ConT' style={{ width: '1400px', marginTop: '60px' }}>
        <div className='left'>
          <Button className='BTN1' style={{ height: '80px', width: '217px', marginBottom: '5px' }}>주차정산</Button>
          <Button className='BTN2' style={{ height: '50px', width: '217px' }}>사전정산 안내</Button>
          <img src={`${process.env.PUBLIC_URL}/img/sidebanner.jpg`} style={{ width: '217px', marginTop: '5px' }} alt="sidebanner" />
        </div>
        <div className='right' style={{ width: '1133px' }}>
          <h4>주차정산</h4>
          <div style={{ height: '417px' }}>
            {/* 어진님 컴포넌츠 */}
          </div>

          <ul><h6>주의사항</h6>
            <li>결제 취소 불가. 타인의 차량을 결제하지 않도록 차량번호 확인</li>
            <li>결제 후 10분 안에 출차를 하지 않으면 주차요금이 추가 발생, 추가요금은 출차시 추가 결제 <br />
              (※ 원천호수, 행복한들, 신대호수, 화홍문, 연무동, 광교공영, 곡반정동 제2공영, 화서역환승, 율전 제1공영주차장은 20분이내 출차)</li>
          </ul>
        </div>


      </Container>

    </div>
  )
}
