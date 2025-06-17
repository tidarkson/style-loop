import React, { useEffect } from "react";
import { data } from "../../db";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "antd";

const Slider = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <section className="px-3 md:px-10 py-5">
        <div className="md:flex gap-5">
          <div>
            <div className="my-3">
              <img
                src={data[0].image}
                alt=""
                className="md:w-3/5 mx-auto rounded-lg"
                data-aos="fade-up"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={data[1].image}
                alt=""
                className="w-44 mx-auto rounded-lg"
                data-aos="fade-left"
              />
              <img
                src={data[2].image}
                alt=""
                className="w-48 mx-auto rounded-lg"
                data-aos="fade-right"
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-center max-w-lg text-end">
            <div className="">
              <h3 className="text-7xl font-bold tracking-wider">
                <span style={{color: "#03254e"}}>Step in with</span> <br />
                <span>Style</span>
              </h3>
            </div>
            <div>
              <p className="tracking-widest py-8">
                We believe that fashion is an artform that should be accessible
                to all. We're thrilled to introduce our latest colection,
                inspired by the latest trends and styles from around the world
              </p>
              <Button
                style={{
                  backgroundColor: "#003049",
                  color: "#ffffff",
                }}
                className="button-class"
              >
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
