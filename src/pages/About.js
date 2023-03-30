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
                            <p>Currently I am in final semester of Master's in Computer Science at California State University - Channel Islands, Camarillo, California.</p>
                            <p>I like to develop softwares and solving errors. In my free time I like to do programming, listen music or play volley ball with friends if anyone is available:)</p>
                            <p>This project is made with ReactJS technology and bootstrap framework. Hosting platform is aws.</p>

                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}
export default About;