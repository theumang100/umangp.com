import React from 'react';
import Header from "./Header";
import Description from './Description';

function About() {
    return (
        <>
            <Header />
            <Description title="About." subtitle="I'm Umang Patel, Software Engineer." />
            <div className="about_me_info">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <p>Hey, I'm umang!. I'm a <b>computer</b> aka <b>software engineer</b> in <b>United States of America</b>.</p>
                            {/* <p>Currently I am in final semester of Master's in Computer Science at California State University - Channel Islands, Camarillo, California.</p> */}
                            <p>I like to develop softwares and solving errors. In my free time I like to do programming, listen music or play volley ball with friends if anyone is available:)</p>
                            <p>
                            Technically, my skills include:
                            <ul>
                                <li>
                                <b>Programming Languages:</b> Java, Python, C, C++, SQL, HTML, JavaScript, CSS 
                                </li>
                                <li>
                                <b>Database Technologies:</b> MySQL, MongoDB, Oracle, Microsoft SQL Server 
                                </li>
                                <li>
                                <b>Web and Frameworks:</b> React JS, Angular JS, Node JS, jQuery, Spring Boot, Hibernate, Bootstrap, JUnit
                                </li>
                                <li>
                                <b>Cloud, Tools and Operating Systems:</b> Android Studio, Amazon Web Services (AWS), Git, Docker, Jira, Jenkins, Postman, Tomcat, CI/CD, TensorFlow, PyTorch, Linux, Windows 
                                </li>
                                <li>
                                <b>Functional:</b> Image Processing, Pattern Recognition, Artificial Intelligence (AI), Machine Learning, Algorithms, Object Oriented Programming, Data Mining, Cloud Architecture, Database Management, Data Structures
                                </li>
                            </ul>
                            </p>
                            <p>This project is made with ReactJS technology and bootstrap framework. Hosting platform is aws.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
