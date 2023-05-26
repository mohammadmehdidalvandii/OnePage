import './Header.css'
import  Container  from 'react-bootstrap/Container';
import Row  from  'react-bootstrap/Row'   
import Col  from  'react-bootstrap/Col'   
import {GrStackOverflow} from 'react-icons/gr'
import {MdOutlineColorLens} from 'react-icons/md'
import {GrCommand} from 'react-icons/gr'
import {HiOutlineFingerPrint} from 'react-icons/hi'
export default function Header (){
    return(
        <header className='headers'>
            <Container>
               <Row>
                <Col xl={12}>
                <div className="header-section">
                    <div className="header-content">
                        <h1 className="header-content-title">وب سایت شرکتی خود را راه اندازی کنید</h1>
                        <span className="header-contant-text">تیم ما آرزوی شما را برآورده می کند </span>
                        <a href="#" className="header-content-button">شروع کنید</a>
                    </div>
                    <div className="header-box">
                        <div className="box-item">
                        <i><GrStackOverflow/></i>
                        <h4 className="box-item-title">دیتابیس ایمن</h4>
                        <p className="box-item-paraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        </div>
                        <div className="box-item">
                        <i><MdOutlineColorLens/></i>
                        <h4 className="box-item-title"> کد نویسی مرتب</h4>
                        <p className="box-item-paraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        </div>
                        <div className="box-item">
                       <i><GrCommand/></i>
                        <h4 className="box-item-title"> کد نویسی مرتب</h4>
                        <p className="box-item-paraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        </div>
                        <div className="box-item">
                       <i> <HiOutlineFingerPrint/></i>
                        <h4 className="box-item-title"> کاملا ایمن</h4>
                        <p className="box-item-paraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        </div>
                    </div>
                </div>
                </Col>
               </Row>

            </Container>
        </header>
    );
}