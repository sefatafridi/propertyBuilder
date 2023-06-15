import React from 'react'
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

function Hero() {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                {/* Left section */}
                <div className='flexColStart hero-left'>
                    <div className='hero-title'>
                        <div className='white-cirlce' />
                        <h1>Discover<br />Most Suitable<br />Property</h1>
                    </div>
                    <div className='hero-des flexColStart'>
                        <spin className='secondaryText'>Find a varity of properties that suit you very easily</spin>
                        <spin className='secondaryText'>Forget all difficulties in finding a residence for you</spin>
                    </div>
                    <div className='flexCenter search-bar'>
                        <HiLocationMarker size={24} color="blue" />
                        <input type='text' />
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                      <div className='flexColStart stat'>
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Produts</span>
                      </div>
                      <div className='flexColStart stat'>
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                      </div>
                      <div className='flexColStart stat'>
                        <span>
                            <CountUp end={25} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award</span>
                      </div>
                    </div>
                </div>
                {/* righ section */}
                <div className=' flexCenter hero-right'>
                    <div className='image-container'>
                        <img src='./hero-image.png' alt='heroimage' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero