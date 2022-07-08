import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: { gradient: string }) => props.gradient};
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
`;

export const ModalOuter = styled.div`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ModalInner = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 2rem 3rem;
  text-align: center;
`;
