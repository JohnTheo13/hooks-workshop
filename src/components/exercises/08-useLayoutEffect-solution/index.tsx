import React, { Fragment, useState, useLayoutEffect } from "react";
import { Button, Section, ModalInner, ModalOuter } from "./shared/styled";
export const Exercise8Solution = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Fragment>
      <Button>
        <button onClick={() => setModalOpen(true)}>Show Modal</button>
      </Button>

      <Section gradient="linear-gradient(#00d1b2, #FFFFFF)">
        <h1 color="white">Scroll down...</h1>
      </Section>
      <Section gradient="linear-gradient(#FFFFFF, #F7BB97)">
        <h1 color="white">Deeper...</h1>
      </Section>
      <Section gradient="linear-gradient(#F7BB97, #ff7eb3)">
        <h1 color="white">Are you ready for it?</h1>
      </Section>
      <Section gradient="linear-gradient(#ff7eb3, #8E0E00)">
        <h2>You have reached the bottom!</h2>
      </Section>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </Fragment>
  );
};

export const Modal = ({ onClose }: { onClose: () => void }) => {
  useLayoutEffect((): any => {
    console.log('set')
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
  console.log('ren')

  return (
    <ModalOuter onClick={onClose}>
      <ModalInner>
        <h2>You cannot scroll anymore!</h2>
        <h3>Click anywhere to close</h3>
      </ModalInner>
    </ModalOuter>
  );
};
