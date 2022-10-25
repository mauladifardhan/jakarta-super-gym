import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/blue_hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/blue_calories.png";
import { motion } from "framer-motion";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const isMedium = useMediaQuery("(max-width:768px)");

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best Ad */}
        <div className="the-best-ad">
          <motion.div initial={isMedium ? { left: "150px" } : { left: "210px" }} whileInView={{ left: "8px" }} transition={{ ...transition, type: "tween" }}></motion.div>
          <span>the best fitnest in the jakarta</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+16</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+615</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+98</span>
            <span>fitness Programs</span>
          </div>
        </div>
        {/* Button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div initial={{ right: "-1rem" }} whileInView={{ right: "4rem" }} transition={transition} className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bps</span>
        </motion.div>
        {/* HERO IMAGE */}
        <img src={hero_img} alt="" className="hero-img" />
        <motion.img initial={{ right: "21rem" }} whileInView={{ right: "10rem" }} transition={transition} src={hero_img_back} alt="" className="hero-img-back" />
        {/* calories */}
        <motion.div initial={{ right: "37rem" }} whileInView={{ right: "28rem" }} transition={transition} className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span>120 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
