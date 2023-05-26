import './footer.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiSkype} from 'react-icons/si'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
export default function Footer() {
    return (
        <>
        
            <section className="footer-content">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="content-items">
                                <div className="items-footer">
                                    <h3 className="items-titles">وان پیج</h3>
                                    <div className="items-item">
                                        <p className="items-item-text">شیراز بلوار چمران</p>
                                        <p className="items-item-text">کوچه 12</p>
                                        <p className="items-item-text">هتل چمران</p>
                                    </div>
                                    <div className="itams-info">
                                        <p className="items-info-text">
                                            <span> شماره تماس :</span>
                                            1234567890
                                        </p>
                                        <p className="items-info-text">
                                            info@example.com
                                            <span> : ایمیل </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="menus-footers">
                                    <h3 className="items-titles">لینک های مفید </h3>
                                    <ul className="footer-menus">
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            خانه</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            درباره ما</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            خدمات ما</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            قوانین</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            حریم خصوصی</a></li>
                                    </ul>
                                </div>
                                <div className="menus-footers">
                                    <h3 className="items-titles"> سرویس ها</h3>
                                    <ul className="footer-menus">
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            طراحی وب</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            توسعه وب</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            مدیرت فروش</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">                                        فروشگاه</a></li>
                                        <li className="footer-menu"><a href="#" className="footer-menu-link">
                                            طراح گرافیک</a></li>
                                    </ul>
                                </div>
                                <div className="footer-news">
                                    <h3 className="items-titles"> عضویت در خبرنامه</h3>
                                    <p className="footer-news-text">با عضویت در خبرنامه از جدیدترین مقالات ما با خبر شوید.

                                    </p>
                                    <form action="#" className="footer-form">
                                        <input type="email" id="#" className='footer-form-eamil' />
                                        <button className='footer-form-btn'>عضویت</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="footer-media-page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="media-page">
                                <a href="#" className="media-page-link">
                                <i><FaLinkedinIn/></i>
                                </a>
                                <a href="#" className="media-page-link">
                                <i><SiSkype/></i>
                                </a>
                                <a href="#" className="media-page-link">
                                <i><AiFillInstagram/></i>
                                </a>
                                <a href="#" className="media-page-link">
                                <i><AiFillFacebook/></i>
                                </a>
                                <a href="#" className="media-page-link">
                                <i><AiOutlineTwitter/></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
