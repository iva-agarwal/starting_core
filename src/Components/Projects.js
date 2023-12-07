import React from 'react';
import "./Projects.css";

function Projects() {
    return (
        <>
        
            <div id="Projects" className='projects'>
            <div className="frames" data-aos="fade-up">
                <div className='projectheading'><h1>Projects</h1></div>
                <div className='projectimage'>
                    <div className='imagerow'>
                  
                        <div className='tilehover'>
                            <img className='p1' src="./images/p1.jpg" alt='#' />
                            <div className='bottom'>
                                <h1>CIPHER SCHOOLS UI</h1>
                            </div>
                        </div>
                        
                       
                        <div className='tilehover'>
                            <img className='p2' src="./images/p5.jpg" alt='#' />
                            <div className='bottom'>
                                <h1>AI WEBSITE UI</h1>
                            </div>
                        </div>
                       
                    </div>
                    <div className='imagerow'>
                        <div className='tilehover'>
                            <img className='p3' src="./images/p3.jpg" alt='#' />
                            <div className='bottom'>
                                <h1>EXPORT</h1>
                            </div>
                        </div>
                        <div className='tilehover'>
                            <img className='p4' src="./images/p7.png" alt='#' />
                            <div className='bottom'>
                                <h1>ARTSHELL</h1>
                            </div>
                        </div>
                    </div>
                    <div className='imagerow'>
                        <div className='tilehover'>
                            <img className='p5' src="./images/p2.jpg" alt='#' />
                            <div className='bottom'>
                                <h1>KONTENT MEDIA</h1>
                            </div>
                        </div>
                        <div className='tilehover'>
                            <img className='p6' src="./images/p6.jpg" alt='#' />
                            <div className='bottom'>
                                <h1>GETAPT</h1>
                            </div>
                        </div>
                    </div>
                    <div className='imagerow'>

                        <div className='tilehover'>
                            <img className='p7' src="./images/p8.png" alt='#' />
                            <div className='bottom'>
                                <h1>BLOGGING WEBSITE</h1>
                            </div>
                        </div>
                        <div className='tilehover'>
                            <img className='p8' src="./images/p4.jpg" alt='#' />
                            <div className='bottom'>
                                <h1>GAMING GURU</h1>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default Projects;