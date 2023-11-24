import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-rose-200">

      <div className="w-3/4 m-auto">
        <div className="pt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-rose-50 text-rose-800 h-[450px] rounded-xl shadow-xl"
              >
                <div className="h-56 bg-rose-700 flex justify-center items-center rounded-t-xl">
                  <img
                    src={d.img}
                    alt="img"
                    className="h-44 w-44 rounded-full"
                  />
                </div>

                <div className="w-3/4 m-auto flex flex-col items-center justify-center gap-4 p-1">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center text-justify">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: `John Morgan`,
    img: `../assets/one.webp`,
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum labore odio quae similique nostrum impedit magni fugiat molestias velit nobis nisi maxime, saepe tenetur perferendis corrupti rem neque assumenda?`,
  },
  {
    name: `Ellie Anderson`,
    img: `../assets/two.webp`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facere blanditiis totam veniam harum libero qui amet. Laboriosam doloribus adipisci cumque neque soluta, pariatur labore suscipit, corporis amet veritatis quae?`,
  },
  {
    name: `Nia Adebayo`,
    img: `../assets/three.webp`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facere blanditiis totam veniam harum libero qui amet. Laboriosam doloribus adipisci cumque neque soluta, pariatur labore suscipit, corporis amet veritatis quae?`,
  },
  {
    name: `Rigo Louie`,
    img: `../assets/one.webp`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facere blanditiis totam veniam harum libero qui amet. Laboriosam doloribus adipisci cumque neque soluta, pariatur labore suscipit, corporis amet veritatis quae?`,
  },
  {
    name: `Mia Williams`,
    img: `../assets/two.webp`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facere blanditiis totam veniam harum libero qui amet. Laboriosam doloribus adipisci cumque neque soluta, pariatur labore suscipit, corporis amet veritatis quae?`,
  },
];

export default CardSlider;
