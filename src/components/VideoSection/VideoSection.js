import React from 'react';
import './VideoSection.css';
import VideoLooper from 'react-video-looper'
import juteMaking from '../../images/juteMaking.mp4'


const VideoSection = () => {
    return (
        <div>
            <section className='videoSection'>
                <article className='videoPart'>
                    <VideoLooper className='videoe'source={juteMaking} start={0.31} end={10.48} />
                </article>
                <article className='videoTitle'>
                    <p>Choice</p>
                    <p className='is'>is</p>
                    <p>Yours</p>
                </article>
            </section>
        </div>
    );
};

export default VideoSection;