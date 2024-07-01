import './slider.css';
import Marquee from "react-fast-marquee";
const SliderItem = ({ src }) => {
    return (
        <div className="sliderItem">
          <img src={src} alt="slider item" />
        </div>
    );
};

const Slider = () => {
    const items = [
        '/3m.svg',
        '/barstool-store.svg',
        '/budweiser.svg',
        '/forbes.svg',
        '/macys.svg',
        '/vite.svg',
    ];

    return (
            <div className='slideSection'>
            <div className='sliderContainer'>
              <Marquee autoFill speed={30} pauseOnHover>    
                    {items.map((src, index) => (
                    <SliderItem 
                        key={index}
                        src={src}
                    />
                ))}   </Marquee>
            </div>
            </div>
    );
};

export default Slider;
