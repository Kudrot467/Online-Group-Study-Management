import HeroSlider, { Slide } from "hero-slider";
const Banner = () => {
  const images = [
    "https://i.ibb.co/PzFztzf/Screenshot-2023-11-08-090837.png" ,
    "https://i.ibb.co/6HWsN70/student-sharing-her-knowledge-with-her-colleagues.jpg",
    "https://i.ibb.co/0yMD08N/4960139.jpg",
    "https://i.ibb.co/X3b5pBb/improvement-success-planning-ideas-research.jpg",
    "https://i.ibb.co/Kxn1BmQ/Screenshot-106.png",
  ];

  return (
    <div>
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0,0,0,0.33)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoPlay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 1000,
          height: "100vh",
        }}
      >
        {images.map((imageUrl, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        ))}
      </HeroSlider>
    </div>
  );
};

export default Banner;
