import './History.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {BsCheckAll} from 'react-icons/bs'
export default function History(){
    return(
        <section className="history">
            <Container>
                <Row>
                  <Col md={6}>
                    <div className="history-content">
                        <h3 className="history-content-title">گذری بر سابقه ما</h3>
                        <p className="history-content-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <ul className="history-items">
                            <li className="history-item">
                            ساخت بیش از 60 قالب اختصاصی

                                <i><BsCheckAll></BsCheckAll></i>
                            </li>
                            <li className="history-item">
                            بهینه سازی بیش از 50 وبسایت
                                <i><BsCheckAll></BsCheckAll></i>
                            </li>
                            <li className="history-item">
                            تولید محتوا برای 15 سایت مانند دیجی کالا و زومیت
                                <i><BsCheckAll></BsCheckAll></i>
                            </li>
                            <li className="history-item">
                            تولید محتوا برای 15 سایت مانند دیجی کالا و زومیت
                                <i><BsCheckAll></BsCheckAll></i>
                            </li>
                        </ul>
                        <p className="history-paraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img src="./images/about-video.jpg" className='history-img' alt="" />
                  </Col>
                </Row>
            </Container>
        </section>
    );
}