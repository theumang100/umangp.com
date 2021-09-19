import React from 'react';
import Header from "./Header";
import Description from './Description';

function About() {
    return (
        <>
            <Header />
            <Description title="About." subtitle="I'm Umang Patel, computer engineer." />
            <div className="about_me_info">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-12">

                            <p>Hey, I'm umang!. I'm a computer aka software engineer working in India. Welcome to my spot on the web for projects I've created, tutorials I've written, reflection of my mind.</p>
                            <p>This project is made with ReactJS technology and bootstrap framework. Hosting platform is aws.</p>

                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}
export default About;