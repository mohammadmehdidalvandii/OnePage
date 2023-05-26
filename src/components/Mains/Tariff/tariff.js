import './tariff.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Tariff() {
    return (
        <section className="tariff">
            <Container>
                <div className="tariff-titles">
                    <h3 className="tariff__title">تعرفه خدمات ما</h3>
                    <p className="tariff__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                </div>
                <Row>
                    <Col lg={12}>
                        <div className="tariffs">
                            <div className="box-tariff">
                                <div className="titles-tariff">
                                    <h5 className="tariff-title">توسعه وب</h5>
                                    <span className="tariff-price">ماهانه29000 / تومان</span>
                                </div>
                                <div className="content-tariff-menu">
                                    <span className="tariff-menu-text">مشاوره رایگان</span>
                                    <span className="tariff-menu-text"> هاست و دامین ریگان</span>
                                    <span className="tariff-menu-text">20 مگابایت فضای ذخیره سازی </span>
                                    <span className="tariff-menu-text "> ساب دامین اختصاصی</span>
                                    <span className="tariff-menu-text ">دامین .com </span>
                                </div>
                                <a href="#" className="box-tariff-btn">فعال سازی</a>
                            </div>
                            <div className="box-tariff box-tariif-blue">
                                <div className="titles-tariff ">
                                    <h5 className="tariff-title">کسب و کار</h5>
                                    <span className="tariff-price tariff-price-blue">ماهانه19000 / تومان</span>
                                </div>
                                <div className="content-tariff-menu">
                                    <span className="tariff-menu-text ">مشاوره رایگان</span>
                                    <span className="tariff-menu-text"> هاست و دامین ریگان</span>
                                    <span className="tariff-menu-text">20 مگابایت فضای ذخیره سازی </span>
                                    <span className="tariff-menu-text"> ساب دامین اختصاصی</span>
                                    <span className="tariff-menu-text text-line">دامین .com </span>
                                </div>
                                <a href="#" className="box-tariff-btn box-tariff-btn-blue">فعال سازی</a>
                            </div>
                            <div className="box-tariff">
                                <div className="titles-tariff">
                                    <h5 className="tariff-title">آغازین</h5>
                                    <span className="tariff-price">رایگان</span>
                                </div>
                                <div className="content-tariff-menu">
                                    <span className="tariff-menu-text">مشاوره رایگان</span>
                                    <span className="tariff-menu-text"> هاست و دامین ریگان</span>
                                    <span className="tariff-menu-text">20 مگابایت فضای ذخیره سازی </span>
                                    <span className="tariff-menu-text text-line"> ساب دامین اختصاصی</span>
                                    <span className="tariff-menu-text text-line">دامین .com </span>
                                </div>
                                <a href="#" className="box-tariff-btn">فعال سازی</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}