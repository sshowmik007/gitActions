import React,{useState} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { fontSize } from '@mui/system';
import {ApiSlides} from '../componentApi/SliderApi';
import './Slider.css'

function Slider  () {



const [slides] = useState(ApiSlides);
const [activeSlide, setActiveSlide] = useState(0);



    const arrowStyle= "rounded-full bg-gray-300 flex justify-center items-center shadow-sm hover:cursor-pointer" ;

    const prevSlide = () => {
        if (activeSlide === 0) {
          setActiveSlide(slides.length - 1);
        } else {
          setActiveSlide(activeSlide - 1);
        }
      };

    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
          setActiveSlide(0);
        } else {
          setActiveSlide(activeSlide + 1);
        }
      };

  return (
    <div className=' h-96 my-20 bg-white flex items-center justify-between mobile:hidden'>
        {/* Left arrow div */}
        <div className={arrowStyle} onClick={prevSlide}>
            <ArrowLeftIcon style={{fontSize: '50px'}}/>
        </div>

        {/* slide Div */}
        {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
        <div className= {` wrapper flex w-full h-[500px] justify-center items-center shadow-2xl rounded-lg border-zinc-100 border-8 overflow-hidden relative `+slide.background}>

            <div className="slide flex items-center justify-center h-full">
                <div className="forImage flex flex-1 justify-center items-center h-full">
                    <img 
                    className='h-full object-cover'
                    src={slide.src} alt="slide-image" />
                </div>
                <div className="description flex flex-col flex-1 place-items-start justify-center ml-10">
                    <h2 className='text-6xl pb-10'>{slide.content.h2}</h2>
                    <p className='text-4xl'>{slide.content.p}</p>
                    <button className='btn mt-10'>Shop Now</button>
                </div>
            </div>
        </div>
                 ); 
                } 
                  })}


        {/* Right arrow div */}
        <div className={arrowStyle} onClick={nextSlide}>
            <ArrowRightIcon style={{fontSize: '50px'}}/>
        </div>
    </div>
  );
};

export default Slider;