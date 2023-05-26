import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
export default function Navbar() {
    return (
        <navbar className="navbars navbar-menus" expend='md'>
            <Container>
                <Row>
                    <Col xl={12}>
                        <nav className="menus">
                            <div className="menu-item-left">
                                    <a href="#" className="item-left-title">وان پیج</a>
                            </div>
                            <div className="menu-item-right">
                                <ul className="items">
                                    <li className="items-menu"><a href="#" className="items-link">خانه</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">درباه ما</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">داخلی</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">نمونه کار</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">خدمات</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">تیم ما</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">قیمت</a></li>
                                    <li className="items-menu"><a href="#" className="items-link">تماس با ما</a></li>
                                </ul>
                                <a href="#" className="item-right-button">شروع</a>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </navbar>
    );
}