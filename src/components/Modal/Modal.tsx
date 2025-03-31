import { useCallback, useEffect, useRef, useState } from "react";
import { Portal, createContainer } from "../Portal";
import styled from "styled-components";
import { Close } from "../../assets";
import { ContactForm } from "../ContactForm";

type ModalProps = {
  title: string;
  onClose?: () => void;
};

const StyledWrapper = styled.div`
  background: rgba(22, 21, 21, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const StyledModal = styled.div`
  border: 1px solid;
  position: relative;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 30px 40px;
  width: 40%;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  right: 5px;
  top: 5px;
  background-color: transparent;
  border: none;
  color: rgb(0, 0, 0, 0.6);

  & :hover {
    color: rgb(0, 0, 0, 0.1);
  }
`;

const MODAL_CONTAINER_ID = "modal-container-id";

export const Modal = ({ title, onClose }: ModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  const handleClose: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <StyledWrapper ref={rootRef}>
        <StyledModal>
          <StyledCloseButton
            type="button"
            onClick={handleClose}
          >
            <Close />
          </StyledCloseButton>
          <ContactForm
            title={title}
            vertical
          />
        </StyledModal>
      </StyledWrapper>
    </Portal>
  ) : null;
};
