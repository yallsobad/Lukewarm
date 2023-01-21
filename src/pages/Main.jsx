import { Link } from "react-router-dom";
import Card from "../components/Card";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Main() {
  return (
    <div>
      {/* CTA Section */}

      <div className="header-container">
        <div className="cta-container">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptate totam vitae numquam, soluta quae incidunt iusto at illum
            eaque non quo, cum dolores aliquam
          </h1>
          <div className="button-container">
            <div className="button-holder">
              <Link to="/listings" style={{ textDecoration: "none" }}>
                <button className="btn-primary">
                  Browse Listings
                  <MdKeyboardArrowRight className="react-icons" />
                </button>
              </Link>
            </div>
            <div className="button-holder">
              <button className="btn">No click here</button>
            </div>
          </div>
        </div>
      </div>

      {/* Listing Swiper */}

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
      >
        <SwiperSlide>
          <section className="card-container">
            <Card />
            <Card />
            <Card />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="card-container">
            <Card />
            <Card />
            <Card />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="card-container">
            <Card />
            <Card />
            <Card />
          </section>
        </SwiperSlide>
      </Swiper>

      {/* Location Section */}

      <section className="location">
        <div className="location-image">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
        <div className="location-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            iure, quasi recusandae voluptatum provident voluptate ullam dicta et
            nemo, harum dignissimos consequatur ducimus hic adipisci architecto
            expedita dolores rem ipsa sequi sit nesciunt culpa in dolorem
            minima. Dolore, vero sit!{" "}
          </p>
          <button className="learn-more menu-btn">Learn more</button>
        </div>
      </section>

      {/* Location Section */}

      <section className="location">
        <div className="location-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            iure, quasi recusandae voluptatum provident voluptate ullam dicta et
            nemo, harum dignissimos consequatur ducimus hic adipisci architecto
            expedita dolores rem ipsa sequi sit nesciunt culpa in dolorem
            minima. Dolore, vero sit!{" "}
          </p>
          <button className="learn-more menu-btn">Learn more</button>
        </div>
        <div className="location-image-reverse">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </section>

      {/* Location Section */}

      <section className="location">
        <div className="location-image">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
        <div className="location-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            iure, quasi recusandae voluptatum provident voluptate ullam dicta et
            nemo, harum dignissimos consequatur ducimus hic adipisci architecto
            expedita dolores rem ipsa sequi sit nesciunt culpa in dolorem
            minima. Dolore, vero sit!{" "}
          </p>
          <button className="learn-more menu-btn">Learn more</button>
        </div>
      </section>
    </div>
  );
}
export default Main;
