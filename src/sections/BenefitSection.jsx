import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";


const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
        deplay: 1,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        scrub: 1.5,
        delay: 0.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        scrub: 1.5,
        delay: 0.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        delay: 0.5,
        opacity: 1,
        scrub: 1.5,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        delay: 0.5,
        scrub: 1.5,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      });
  });
  return (
    <section className="benefit-section">
      <div className="container max-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages : <br /> Explore the key Benefit of Choosing
            the SPYLT
          </p>
          <div className="mt-20 col-center ">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protien + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely Recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose Free"}
              color={"#2F2D2F"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
          </div>
          
          <div className="relative overlay-box ">
            <VideoPinSection />
          </div>
    </section>
  );
};

export default BenefitSection;
