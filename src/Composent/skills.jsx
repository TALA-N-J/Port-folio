import { useState } from 'react'
import ProgressBar from './progressBar';
function Skills() {
    const [progress, setProgress] = useState(0);
    const [max,setMax] = useState(100);
    const handleProgressChange = (event)=>{
        setProgress(event.target.value);
    };
    const handleMaxChange =  (event)=>{
        setMax(event.target.value);
    };
  return (
    <>
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="progress">
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <ProgressBar value={80} max={100}></ProgressBar>
                        </div>
                        <div className="progress">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <ProgressBar value={50} max={100}></ProgressBar>
                        </div>
                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <ProgressBar value={75} max={100}></ProgressBar>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <div className="progress">
                            <span className="skill">PHP <i className="val">80%</i></span>
                            <ProgressBar value={40} max={100}></ProgressBar>
                        </div>
                        <div className="progress">
                            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                            <ProgressBar value={80} max={100}></ProgressBar>
                        </div>
                        <div className="progress">
                            <span className="skill">Photoshop <i className="val">55%</i></span>
                            <ProgressBar value={60} max={100}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills