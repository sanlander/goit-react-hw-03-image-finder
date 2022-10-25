import { OverlayDiv, ModalDiv } from './Modal.modules';

export const Modal = ({ urlImg, alt, onClose }) => {
  return (
    <OverlayDiv
      onClick={evt => {
        evt.target.nodeName !== 'IMG' && onClose();
      }}
      tabIndex={0}
      onKeyUp={e => {
        e.key === 'Escape' && onClose();
      }}
    >
      <ModalDiv>
        <img
          tabIndex={0}
          onKeyDown={e => {
            e.code === 'Escape' && onClose();
          }}
          src={urlImg}
          alt={alt}
        />
      </ModalDiv>
    </OverlayDiv>
  );
};
