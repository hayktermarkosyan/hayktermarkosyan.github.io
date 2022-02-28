import './About.css';
import htmlIcon from './skills_icons/html-5.png';
import cssIcon from './skills_icons/css.png';
import sassIcon from './skills_icons/sass.png';
import jsIcon from './skills_icons/js.png';
import reactIcon from './skills_icons/react.png';
import nodeIcon from './skills_icons/node-js.png';
import tsIcon from './skills_icons/typescript.png';
import myImg from './myImg.jpg';

function About() {
    return (
        <div className="container-fluid mb-5 custom">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card cardStyles">
                        <h2 className="aboutMe">Summary</h2>
                        <img src={myImg} className="card-img-top myImgStyles" alt="myImg"/>
                        <div className="card-body">
                            <p className="card-text">
                                Solution-focused Web Developer with experience in web-based applications. Mentored by Mentored by expert JavaScript Web Developer, continue to research multiple systems and efficient development techniques.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card cardStyles">
                        <h2 className="aboutMe">Skills</h2>
                        <ul 
                            className="list-group" 
                            style={{border: 'none', width: 'auto', margin: '0 auto'}}
                        >
                            <li id="skill" className="list-group-item">
                            <img src={htmlIcon} className="skillImg" alt="htmlIcon"/>
                            <img src={cssIcon} className="skillImg" alt="cssIcon"/>
                                HTML & CSS
                            </li>
                            <li id="skill" className="list-group-item">
                                <img src={sassIcon} className="skillImg" alt="sassIcon"/>
                                SASS
                            </li>
                            <li id="skill" className="list-group-item">Bootstrap, Materialize, and others</li>
                            <li id="skill" className="list-group-item">
                                <img src={jsIcon} className="skillImg" alt="jsIcon"/>
                                JavaScript
                            </li>
                            <li id="skill" className="list-group-item">
                                <img src={reactIcon} className="skillImg" alt="reactIcon"/>
                                React & Redux
                            </li>
                            <li id="skill" className="list-group-item">
                                <img src={nodeIcon} className="skillImg" alt="nodeIcon"/>
                                Node.js
                            </li>
                            <li id="skill" className="list-group-item">
                                <img src={tsIcon} className="skillImg" alt="tsIcon"/>
                                TypeScript
                            </li>
                            <li id="skill" className="list-group-item">GraphQL</li>
                            <li id="skill" className="list-group-item">Algorithms</li>
                            <li id="skill" className="list-group-item">Visual Studio, Web Storm Code Editors</li>
                            <li id="skill" className="list-group-item">Linux, Windows, and Mac OS</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card cardStyles">
                        <h2 className="aboutMe">Education</h2>
                        <p 
                            className="card-text" 
                            style={{border: '1px solid rgba(0,0,0,.125)', 
                                    margin: '10px 8px 10px 8px',
                                    borderRadius: '3px'
                                }}
                        >
                            BS, Engineering Technology (Radio Engineering) 
                            Military Engineering University, Cherepovets, Russia |2010 – 2015|	
                        </p>
                        <h2 className="aboutMe" style={{marginTop: '45px'}}>Experience</h2>
                        <p 
                            className="card-text" 
                            style={{border: '1px solid rgba(0,0,0,.125)', 
                                    margin: '10px 8px 10px 8px',
                                    borderRadius: '3px'
                                }}
                        >
                            Military Intelligence Officer/
                            Captain (August, 2015 – Present)
                        </p>
                        <h2 className="aboutMe" style={{marginTop: '45px'}}>Hobbies</h2>
                        <ul 
                            className="list-group" 
                            style={{border: 'none', width: 'auto', margin: '10px auto 0 auto'}}
                        >
                            <li id="hobbie" className="list-group-item">Cooking</li>
                            <li id="hobbie" className="list-group-item">Brazilian Jiu Jitsu Purple Belt</li>
                            <li id="hobbie" className="list-group-item">Chess addict</li>
                        </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;