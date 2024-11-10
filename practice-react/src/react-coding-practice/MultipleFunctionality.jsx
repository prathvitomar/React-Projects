import React, { useEffect, useRef, useState } from "react";
import useFetch from "../hooks-practice/useFetch";
import useFeatureFlag from "../hooks-practice/featureFlag";
import ImageSlider from "./ImageSlider";
import CodeVerification from "./CodeVerification";
import UndoableCounter from "./UndoableCounter";
import QRgenerator from "./QRgenerator";
import MortgageConverter from "./MortgageConverter";
import Pagination from "./Pagination";

function MultipleFunctionality() {
  const url = "https://dummyjson.com/products";
  const { data, error } = useFetch({ url: url });
  const [show, setShow] = useState(false);
  const [scrollState, setScrollState] = useState(true);
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const imageSliderRef = useRef(null);
  const paginationRef = useRef(null);
  const codeVerificationRef = useRef(null);
  const undoableCounterRef = useRef(null);
  const mortgageConveterRef = useRef(null);
  const qrGeneratorRef = useRef(null);
  const [allScrollRef, setAllScrollRef] = useState({});
  const {
    imageSlider,
    pagination,
    qrGenerator,
    undoableCounter,
    codeVerification,
    mortgageConveter,
  } = useFeatureFlag();

  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      const scrolledToTop = window.scrollY === 0;

      if (scrolledToBottom) {
        setScrollState(false);
      } else if (scrolledToTop) {
        setScrollState(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const refs = {
        "ImageSlider": document.getElementById("ImageSlider")?.offsetTop,
        "Pagination": document.getElementById("Pagination")?.offsetTop,
        "QrGenerator": document.getElementById("QrGenerator")?.offsetTop,
        "UndoableCounter": document.getElementById("UndoableCounter")?.offsetTop,
        "CodeVerification": document.getElementById("CodeVerification")?.offsetTop,
        "MortgageConveter": document.getElementById("MortgageConveter")?.offsetTop,
      };
  
      const filteredRefs = Object.fromEntries(
        Object.entries(refs).filter(([_, value]) => value !== undefined)
      );
  
      setAllScrollRef(filteredRefs);
    }
  }, [data]);
  

  const outsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  function scroll() {
    if (scrollState) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setScrollState((prev) => !prev);
  }

  const enabledFeatures = [
    {
      id: "ImageSlider",
      key: imageSlider,
      component: <ImageSlider />,
      ref: imageSliderRef,
    },
    {
      id: "Pagination",
      key: pagination,
      component: <Pagination />,
      ref: paginationRef,
    },
    {
      id: "QrGenerator",
      key: qrGenerator,
      component: <QRgenerator />,
      ref: qrGeneratorRef,
    },
    {
      id: "UndoableCounter",
      key: undoableCounter,
      component: <UndoableCounter />,
      ref: undoableCounterRef,
    },
    {
      id: "CodeVerification",
      key: codeVerification,
      component: <CodeVerification />,
      ref: codeVerificationRef,
    },
    {
      id: "MortgageConveter",
      key: mortgageConveter,
      component: <MortgageConverter />,
      ref: mortgageConveterRef,
    },
  ];

  function refButton(refid) {
    refid.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToFeature(id){
    window.scrollTo({
      top : allScrollRef[id],
      behavior : "smooth"
    })
  }

  return (
    <div ref={topRef}>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={scroll}
      >
        {scrollState ? "↓" : "↑"}
      </button>
      {error ? (
        <p>Error: {error}</p>
      ) : data.length > 0 ? (
        <>
          {data.map((product, index) => (
            <div key={index}>
              <li>{product.title}</li>
            </div>
          ))}
          <button onClick={handleModal}>
            {show ? "Hide Modal" : "Show Modal"}
          </button>

          {show && (
            <div
              onClick={outsideClick}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  height: "300px",
                  width: "300px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>This is Modal</h1>
                <h3>This is Description</h3>
              </div>
            </div>
          )}

          <h1>Height : {size.height}</h1>
          <h1>Width : {size.width}</h1>

          <div>
            {enabledFeatures
              .filter((feature) => feature.key)
              .map((feature, index) => (
                <button
                  key={index}
                  // onClick={() => refButton(feature.id)}
                  onClick={() => scrollToFeature(feature.id)}
                  style={{
                    margin: "5px",
                    padding: "10px",
                    backgroundColor: "#ddd",
                  }}
                >
                  Scroll to {feature.id}
                </button>
              ))}
          </div>
          <div>
            {enabledFeatures
              .filter((feature) => feature.key)
              .map((feature, index) => (
                <div
                  key={index}
                  // ref={feature.ref}
                  id={feature.id}
                  style={{ margin: "20px 0", height: "100vh" }}
                >
                  <h1>{feature.id}</h1>
                  {feature.component}
                </div>
              ))}
          </div>
          <div ref={bottomRef}></div>
        </>
      ) : (
        <p>Loading or no data available...</p>
      )}
    </div>
  );
}

export default MultipleFunctionality;
