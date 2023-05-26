import './Comment.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Comment() {
    return (
        <section className="comment">
          <Container>
          <div className="comment-titles">
                <h3 className="comment__title">نظرات مشتریان ما</h3>
                <p className="comment__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </div>

            <Row>
                    <Col lg={4}>
                        <div className="comment-boxs">
                            <div className="comment__box">
                                <div className="comment__box-text">
                                    <p className="box-text-parph">
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </p>
                                </div>
                                <div className="comment__box-user">
                                    <img src="./images/Comment/testimonials-1.jpg" alt="" className="box-user-img" />
                                    <span className="comment-username">امین رضایی</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="comment-boxs">
                            <div className="comment__box">
                                <div className="comment__box-text">
                                    <p className="box-text-parph">
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </p>
                                </div>
                                <div className="comment__box-user">
                                    <img src="./images/Comment/testimonials-2.jpg" alt="" className="box-user-img" />
                                    <span className="comment-username">الهام رضایی</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="comment-boxs">
                            <div className="comment__box">
                                <div className="comment__box-text">
                                    <p className="box-text-parph">
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </p>
                                </div>
                                <div className="comment__box-user">
                                    <img src="./images/Comment/testimonials-3.jpg" alt="" className="box-user-img" />
                                    <span className="comment-username">سحر محمدی</span>
                                </div>
                            </div>
                        </div>
                    </Col>
            </Row>
          </Container>
        </section>
    );
}