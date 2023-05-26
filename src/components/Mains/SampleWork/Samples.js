import { useState } from 'react';
import './Sample.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
export default function Samples() {
  
    const [imageall, setimageall] = useState([
        { id: 1, img: './images/samplework/portfolio-1.jpg' },
        { id: 2, img: './images/samplework/portfolio-2.jpg' },
        { id: 3, img: './images/samplework/portfolio-3.jpg' },
        { id: 4, img: './images/samplework/portfolio-4.jpg' },
        { id: 5, img: './images/samplework/portfolio-5.jpg' },
        { id: 6, img: './images/samplework/portfolio-6.jpg' },
        { id: 7, img: './images/samplework/portfolio-7.jpg' },
        { id: 8, img: './images/samplework/portfolio-8.jpg' },
        { id: 9, img: './images/samplework/portfolio-9.jpg' },
    ])
    const allHandller = function allHandller(){
        setimageall([
            { id: 1, img: './images/samplework/portfolio-1.jpg' },
            { id: 2, img: './images/samplework/portfolio-2.jpg' },
            { id: 3, img: './images/samplework/portfolio-3.jpg' },
            { id: 4, img: './images/samplework/portfolio-4.jpg' },
            { id: 5, img: './images/samplework/portfolio-5.jpg' },
            { id: 6, img: './images/samplework/portfolio-6.jpg' },
            { id: 7, img: './images/samplework/portfolio-7.jpg' },
            { id: 8, img: './images/samplework/portfolio-8.jpg' },
            { id: 9, img: './images/samplework/portfolio-9.jpg' },
        ])
    }

    const appHandller = function appHandller() {
        setimageall([
            { id: 1, img: './images/samplework/portfolio-1.jpg' },
            { id: 3, img: './images/samplework/portfolio-3.jpg' },
            { id: 6, img: './images/samplework/portfolio-6.jpg' },
        ])
       
    };

    const cartHandller = function cartHandller() {
        setimageall([
            { id: 4, img: './images/samplework/portfolio-4.jpg' },
            { id: 7, img: './images/samplework/portfolio-7.jpg' },
            { id: 8, img: './images/samplework/portfolio-8.jpg' },
        ])
    }

    const webHandller = function webHandller() {
        setimageall([
            { id: 2, img: './images/samplework/portfolio-2.jpg' },
            { id: 5, img: './images/samplework/portfolio-5.jpg' },
            { id: 9, img: './images/samplework/portfolio-9.jpg' },
        ])
    }
    return (
        <>
            <section className="sample-work">
                <Container>
                    <div className="sample-titles">
                        <h3 className="sample__title"> نمونه کارها</h3>
                        <p className="sample__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <div className="sample-buttons">
                                <button className="sample-btns sample-btn-active" onClick={allHandller}>همه</button>
                                <button className="sample-btns  " onClick={appHandller}>نرم افزار</button>
                                <button className="sample-btns" onClick={cartHandller}>کارت ها</button>
                                <button className="sample-btns" onClick={webHandller}>وب </button>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="samlpe-images">
                                {imageall.map((imgall) => (
                                    <img src={imgall.img} alt="" className="sample-images-img" />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}