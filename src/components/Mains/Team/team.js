import './team.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import { useState } from 'react';
export default function Team() {

    const [teams , setTeams] = useState([
        {id:1 , img:'./images/team/team-1.jpg' ,name:'امین احمدی', job:'طراح گرافیک'},
        {id:2 , img:'./images/team/team-2.jpg' ,name:' کیمیا رستگار', job:' مدیرتولید'},
        {id:3 , img:'./images/team/team-3.jpg' ,name:' امین جعفری', job:'طراح '},
        {id:4 , img:'./images/team/team-4.jpg' ,name:' مریم صالحی', job:'طراح '},
    ])

    return (
        <section className="team">
            <Container>
                <div className="team-titles">
                    <h3 className="team__title"> نمونه کارها</h3>
                    <p className="team__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                </div>
                <Row>
                <Col lg={12}>
                    <div className="teams">
                       {teams.map((team)=>(
                         <div className="team-box" key={team.id}>
                         <img src={team.img} alt="" className="team-box-img" />
                         <div className="team-box-media">
                             <a href="#" className="team-media-link">
                                 <i><AiFillLinkedin/></i>
                             </a>
                             <a href="#" className="team-media-link">
                             <i><AiFillTwitterCircle/></i>
                             </a>
                             <a href="#" className="team-media-link">
                             <i><FiInstagram/></i>
                             </a>
                             <a href="#" className="team-media-link">
                             <i><BsFacebook/></i>
                             </a>
                         
                         </div>
                         <div className="team-box-content">
                             <h5 className="team-content-name"> {team.name}</h5>
                             <span className="team-content-job"> {team.job}</span>
                         </div>
                     </div>
                       ))}
                 
                    </div>
                </Col>
                </Row>
            </Container>

        </section>
    );
}