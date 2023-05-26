import './servics.css'
import { Container, Row, Col } from 'react-bootstrap';
import {FaTachometerAlt} from 'react-icons/fa'
import {AiFillProfile}  from 'react-icons/ai'
import {GrDribbble} from 'react-icons/gr'
import {BiArch} from 'react-icons/bi'
import {MdSlideshow} from 'react-icons/md'
import { FiLayers} from 'react-icons/fi'
export default function Servics() {
    return (
        <>
            <section className="servics-one">
                <Container>
                    <div className="one-titles">
                        <h3 className="one__title">خدمات ما</h3>
                        <p className="one__text">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <div className="sevics-boxs">
                                <div className="servics-box">
                                    <div className="servics-box-icon">
                                        <i><FaTachometerAlt/></i>
                                    </div>
                                    <h4 className="servics-box-text">فارسی سازی</h4>
                                    <p className="servics-box-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                </div>
                                <div className="servics-box">
                                    <div className="servics-box-icon">
                                        <i><AiFillProfile/></i>
                                    </div>
                                    <h4 className="servics-box-text"> سئو و بهینه سازی</h4>
                                    <p className="servics-box-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                </div>
                                <div className="servics-box">
                                    <div className="servics-box-icon">
                                        <i><GrDribbble/></i>
                                    </div>
                                    <h4 className="servics-box-text"> طراحی وبسایت</h4>
                                    <p className="servics-box-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                </div>
                                <div className="servics-box">
                                    <div className="servics-box-icon">
                                        <i><BiArch/></i>
                                    </div>
                                    <h4 className="servics-box-text">وردپرس</h4>
                                    <p className="servics-box-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                </div>
                                <div className="servics-box">
                                    <div className="servics-box-icon">
                                        <i><MdSlideshow/></i>
                                    </div>
                                    <h4 className="servics-box-text">راست چین </h4>
                                    <p className="servics-box-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                </div>
                                <div className="servics-box">
                                    <div className="servics-box-icon">
                                        <i><FiLayers/></i>
                                    </div>
                                    <h4 className="servics-box-text">دیتابیس </h4>
                                    <p className="servics-box-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="servics-two">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="two-content">
                                <h4 className="two-content-title">پشتیبانی دائمی</h4>
                                <p className="two-content-paraph">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </p>
                                <a href="#" className="two-content-button">بزن بریم</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}