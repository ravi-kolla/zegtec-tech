import { Bounded } from "../../components/Bounded";
import React, { useEffect, useState } from 'react'
import { PrismicRichText } from "@prismicio/react";

const CardCarousel = ({ slice }) => {
    const {children} = slice.items;
    let show = 2;

    const [windowSize, setWindowSize] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(slice.items.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(slice.items.length);
        function handleWindowResize() {
          console.log(getWindowSize());
          setWindowSize(getWindowSize());
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
    }, [slice.items])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }
    var carouselCountDisplay;

    if (windowSize.innerWidth <= 1124 && windowSize.innerWidth > 730) {
      show = 1;
      carouselCountDisplay = `show-${show}`;
    } else if (windowSize.innerWidth <= 730 && windowSize.innerWidth > 0) {
      show = 1;
      carouselCountDisplay = `show-${show}`;
    } else {
      carouselCountDisplay = `show-${show}`;
    }
    return (
      <Bounded as="section" className="bg-white">
        <h2>{slice.primary.title}</h2>
        <div className="carousel-container">
            <div className="carousel-wrapper">

                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content ${carouselCountDisplay}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {slice.items.map((item) => (
                          <div  key={item.image.url} className="cc-card text-white relative flex">
                            <img className="cc-card-img bg-eggshell-color" src={item.image.url} alt="Card image" />
                            <div className="cc-card-img-overlay absolute">
                              <h2 className="cc-card-title ink-color mb-1 px-4">{item.heading}</h2>
                              <p className="ink-color mb-1 px-4">{item.description}</p>
                            </div>
                          </div>
                      ))}
                    </div>
                </div>

                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
        </Bounded>
    )
}

export default CardCarousel;

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
