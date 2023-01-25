import React, { useState, useEffect } from "react";
import "./Slider.scss";

const Slider = ({ data }) => {
  const [sliderItems, setSliderItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [exeOnce, setExeOnce] = useState(true);

  const handlerSlider = (i) => {
    if (i === true || i === false) {
      if (i) {
        if (currentSlide === sliderItems.length) {
          return setCurrentSlide(1);
        }
        return setCurrentSlide(currentSlide + 1);
      } else {
        if (currentSlide === 1) {
          return setCurrentSlide(sliderItems.length);
        }
        return setCurrentSlide(currentSlide - 1);
      }
    } else {
      setCurrentSlide(i);
    }
  };

  useEffect(() => {
    const sliderNode = document.getElementsByClassName("sliders")[0];
    if (exeOnce) {
      let dataLenth;
      if (data) {
        dataLenth = data.length;
        setSliderItems(data);
      } else {
        const template = [
          { title: "post 1", url: "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg" },
          { title: "post 2", url: "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png" },
          { title: "post 3", url: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" },
        ];
        setSliderItems(template);
        dataLenth = template.length;
      }

      sliderNode.style.width = `${dataLenth * 100}%`;

      setExeOnce(false);
    }

    const interval = setInterval(() => {
      handlerSlider(true);
    }, 4000);

    sliderNode.style.marginLeft = `-${currentSlide * 100 - 100}%`;

    return () => clearInterval(interval);
  }, [sliderItems, currentSlide]);

  return (
    <div className='slider'>
      <button
        onClick={() => {
          handlerSlider(false);
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-chevron-left' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' />
        </svg>
      </button>
      <button
        onClick={() => {
          handlerSlider(true);
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-chevron-right' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
        </svg>
      </button>
      <div className='sliders'>
        {sliderItems.length > 0 ? (
          sliderItems.map((item, i) => {
            return (
              <div className='slide' key={i}>
                <img src={item.url} alt={item.title} />
              </div>
            );
          })
        ) : (
          <div className='slide'>Slider Vacio</div>
        )}
      </div>
      <div className='sliderDots'>
        {sliderItems.map((item, i) => {
          return (
            <button
              className={currentSlide == i + 1 ? "active" : ""}
              onClick={() => {
                handlerSlider(i + 1);
              }}
              key={i}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
