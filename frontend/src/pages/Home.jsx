import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "./../shared/Subtitle";
import worldImg from "../assets/images/world.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourlist from "../components/Featured-tours/FeaturedTourlist";
import MasonryImagesGallery from "../components/Images-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Antalya's Shores, Turkey's Marvels"} />
                  <img src={worldImg} alt=""></img>
                </div>
                <h1>
                  {" "}
                  Discover Turkey's Hidden Gems with 
                  <span className="highlight"> ProSmart Travel </span>{" "}
                </h1>
                <p>
                Welcome to ProSmart Travel, Unveiling Turkey's treasures exclusively for perceptive travelers. Discover captivating history, unique cuisine, and mesmerizing landscapes with ProSmart Travel. Journey smart, embrace connoisseurship. Your Alanya adventure begins here.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5 ">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tour</h2>
            </Col>
            <FeaturedTourlist />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="experience__content">
              <div>
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience
                  <br />
                  we will serve you
                </h2>
                <p>
                  We are a team of professionals always ready to help you
                  <br />
                  with your travel needs. We believe in creating memorable
                  travel.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>1k+</span>
                  <h6>Successfull Transfers</h6>
                </div>
                <div className="counter__box">
                  <span>500+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>30</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
