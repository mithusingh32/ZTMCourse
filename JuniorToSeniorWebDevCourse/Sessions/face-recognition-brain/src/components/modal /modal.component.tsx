import React from 'react';
import './modal.css';
import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const containerEl = document.getElementById('modal-root')!;
  return createPortal(children, containerEl);
};

export default Modal;
