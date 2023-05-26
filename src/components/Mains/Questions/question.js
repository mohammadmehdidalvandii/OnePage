import './question.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import {AccordionItem} from 'react-bootstrap/AccordionItem'
import {AccordionHeader} from 'react-bootstrap/AccordionHeader'
import {AccordionBody} from 'react-bootstrap/AccordionBody'
export default function Question() {
    return (
        <section className="question">
            <Container>
                <div className="question-titles">
                    <h3 className="question__title">سوالات متداول</h3>
                    <p className="question__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                </div>
            
            <Row>
                <Col md={12}>
                   <div className="question-accordion">
                   <Accordion defaultActiveKey="0" >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>آیا قالب html بر روی وردپرس نصب میشود ؟</Accordion.Header>
                                <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.        culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>مدت زمان انجام پروژه چند روز است ؟</Accordion.Header>
                                <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.        culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>چگونه میتوان ثبت سفارش کرد ؟</Accordion.Header>
                                <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.        culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> میتوان هزینه را بصورت اقساطی پرداخت کرد ؟</Accordion.Header>
                                <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.        culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>چه نسخه ای بوت استرپ مورد استفاده میشود ؟</Accordion.Header>
                                <Accordion.Body>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.        culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        
                        </Accordion>
                   </div>
                </Col>
            </Row>
            </Container>
        </section>
    )
}
