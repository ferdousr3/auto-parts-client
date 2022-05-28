import React from "react";
import { useQuery } from "react-query";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../components/Loading/Loading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from '../../Styles/review.module.css';
import Rating from "./Rating";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://auto-parts0.herokuapp.com/reviews").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="ml-4">
          <SectionTitle
            title="Happy Customer says"
            subTitle="Happy Customer Says About Our Product"
          />
        </div>
        <div className="  ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {reviews?.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.reviewCard}>
                    <Rating rating={review.rating} />
                    <h1 className={styles.title}>
                      {review?.title}
                    </h1>
                    <p className={styles.description}>
                      {review.description.slice(0, 130)}
                    </p>
                    <div className={styles.cardFooter}>
                      <div className={styles.reviewer}>
                        <img
                          className="w-20 h-20 rounded-full"
                          src="https://api.lorem.space/image/face?hash=88560"
                          alt={review.name}
                        />
                      </div>
                      <div className="ml-4">
                        <h6 className={styles.name}>{review.name}</h6>
                        <h6 className={styles.designation}>@{review.name}</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Reviews;


