import React from "react";

export default function Modal({idMymodal}, props){

  document.addEventListener("DOMContentLoaded", function() {

    const chaineTriger = '[data-target="'+{idMymodal}+'"]';

    const modalTrigger = document.querySelector(chaineTriger);
    const modal = document.getElementById(idMymodal);
    const modalClose = modal.querySelector(".modal-close");

    modalTrigger.addEventListener("click", function() {
      modal.classList.add("is-active");
      console.log('hello')
    });

    modalClose.addEventListener("click", function() {
      modal.classList.remove("is-active");
      console.log('birdies');
    });
  });

  return (
    <div className="modal" id={idMymodal}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <p>Test</p>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
