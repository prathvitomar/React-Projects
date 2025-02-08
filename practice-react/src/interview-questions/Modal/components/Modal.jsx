import { useState, useEffect, useRef } from "react";
import "../styles.css";

export default function Modal() {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <div className="modal-overlay" onClick={() => setShow(false)}>
          <div
            className="modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Modal Title</h2>
              <button className="close-btn" onClick={() => setShow(false)}>
                X
              </button>
            </div>
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent convallis urna at lacus vehicula, at auctor magna
                vestibulum.
                {Array(20).fill("This is a long modal content. ").join(" ")}
              </p>
            </div>
            <div className="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
