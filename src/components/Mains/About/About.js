import React, { useState } from 'react'
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoCheckmarkDone } from 'react-icons/io5'
export default function About() {
    const [work, setwork] = useState([
        { id: 1, number: '65', text: 'کاربران' },
        { id: 2, number: '85', text: 'پروژه ها' },
        { id: 3, number: '30', text: 'سال ها تجربه' },
        { id: 4, number: '20', text: 'جوایز' },
    ]);
    return (
        <div className='about'>
            <section className="abouts">
                <Container>
                    <div className="about-titles">
                        <h3 className="about__title">درباره ما</h3>
                        <p className="about__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <div className="about-content-left">
                                <p className="content-left-parph">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </p>
                                <a href="#" className="content-left-button">بیشتر</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-content-right">
                                <p className="content-left-parph">
                                    ما جاده ای هستیم که مسیر رویاهایتان را هموار میکنیم. گروه ما متشکل از تیمی قدرتمند است که برای خلق ایده های شما تلاش میکنند.
                                </p>
                                <ul className="content-left-item">
                                    <li className="left-item">
                                        توانا در اجرای هرگونه ایده
                                        <i><IoCheckmarkDone /></i>

                                    </li>
                                    <li className="left-item">
                                        خلاقیت را سرحوله خود قرار داده ایم
                                        <i><IoCheckmarkDone /></i>

                                    </li>
                                    <li className="left-item">
                                        در محصولات ما امنیت حرف اول را میزند
                                        <i><IoCheckmarkDone /></i>

                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about-work">
                <Container>
                    <div className="about__work">
                        {work.map((item) => (
                            <div className="work-box" key={item.id}>
                                <span className="work-number">
                                    {item.number}
                                </span>
                                <span className="work-text">
                                    {item.text}
                                </span>

                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}