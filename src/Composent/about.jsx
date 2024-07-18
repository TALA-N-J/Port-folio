import { useState } from 'react'

function About() {
  return (
    <>
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/profil-1.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Developpeur Web et Mobile</h3>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Ne le:</strong> <span>03 janvier 1998</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+237 652075507</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Yaounde, Cameroun</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>License technologie</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>talajunior22@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About