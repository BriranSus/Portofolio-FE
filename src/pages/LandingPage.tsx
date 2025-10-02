import React from 'react';
import { pribadi } from '../utils/data'

class LandingPage extends React.Component {
    constructor(props: any){
        super(props)

        this.state = {
            pribadi: pribadi,
        }
    }

    render() {
        return (
            <>
                <header>
                    {/* <Navbar></Navbar> */}    
                </header>

                <main>
                    <div>
                        {/* Isinya scroll wheel */}
                    </div>
                    <section id='description'>
                        <div>
                            <h1>My Name is</h1>
                            <h1>{pribadi.name}</h1>
                            <div>
                                {pribadi.description}
                            </div>    
                        </div>
                        <div>
                            <img src={pribadi.image_description} alt="" />
                        </div>
                    </section>

                    <section id='skills'>
                        <div>
                            <img src={pribadi.image_skills} alt="" />
                        </div>
                        <div>
                            {/* Isinya graph skill */}
                        </div>
                    </section>

                    <section id='projects'>
                        <div>
                            {/* Carousel */}
                        </div>
                        <div>
                            {/* Buttons untuk pindah state carousel */}
                        </div>
                    </section>

                    <section id='learning'>
                        <div>
                            <h1>Currently Learning</h1>
                            <img src={pribadi.image_learning} alt="" />
                        </div>
                    </section>
                </main>

                <footer>
                    <div>
                        <section>
                            <div>
                                <h1>Contact me:</h1>
                                <p>{pribadi.email}</p>
                                <p>{pribadi.telp}</p>
                            </div>
                            <div>
                                {/* <SocialButton></SocialButton> */}
                            </div>
                            <div>
                                <h1>Navigation</h1>
                                <a href="#description">About Me</a>
                                <a href="#skills">My Skills</a>
                                <a href="#projects">My Projects</a>
                                <a href="#learning">Future Plans</a>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h1>@2025 Alexander Brian Susanto</h1>
                            </div>
                            <div>
                                <h1>Created with Love</h1>
                            </div>
                        </section>
                    </div>
                </footer>
            </>    
        )
    }
}

export default LandingPage;