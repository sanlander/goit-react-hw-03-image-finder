import styled from 'styled-components';

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalDiv = styled.div`
  overflow: hidden;
  border-radius: 4px;
  width: calc(100vw - 20%);
  height: calc(100vh - 10%);
  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
