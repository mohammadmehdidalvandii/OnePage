import './contact.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {IoLocationOutline} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPhone} from 'react-icons/bs'
export default function Contact() {
    return (
        <section className="contact">
            <Container>
                <div className="contact-titles">
                    <h3 className="contact__title">تماس با ما</h3>
                    <p className="contact__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.</p>
                </div>
                <Row>
                    <Col lg={12}>
                        <div className="contact-from-address">
                            <div className="contact-address">
                                <div className="address">
                                    <div className="address-img">
                                        <i><IoLocationOutline/></i>
                                    </div>
                                    <div className="address-content">
                                        <h5 className="address-content-title">:آدرس</h5>
                                        <span className="address-content-text">شیراز ، بلوار چمران ، هتل چمران</span>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="address-img">
                                        <i><HiOutlineMail/></i>
                                    </div>
                                    <div className="address-content">
                                        <h5 className="address-content-title">:ایمیل</h5>
                                        <span className="address-content-text">info@example.com</span>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="address-img">
                                        <i><BsPhone/></i>
                                    </div>
                                    <div className="address-content">
                                        <h5 className="address-content-title">:شماره تماس</h5>
                                        <span className="address-content-text">09355555555</span>
                                    </div>
                                </div>
                            </div>
                            <div className="content-form">
                                <form className="form-box">
                                    <div className="form-box-users">
                                        <input type="text" placeholder='نام شما' className='form-user-input' />
                                        <input type="text" placeholder='ایمیل شما' className='form-user-input' />
                                    </div>
                                    <div className="form-subjects">
                                        <input type="text" placeholder='موضوع' className='form-jubject-title' />
                                        <textarea  className="form-subject-text" cols="30" rows="10" placeholder='پیغام شما'></textarea>
                                    </div>
                                    <a href="#" className="form-box-btn">ارسال پیغام</a>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
