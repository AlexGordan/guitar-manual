import React from "react";
import { Modal } from "antd";

interface IProps {
  title: string;
  isVisible: boolean;
  onOk: (values?: any) => void;
  onCancel: () => void;
  children: any;
}

const ModalDialog = ({ title, isVisible, onOk, onCancel, children }: IProps) => {
  return (
    <Modal title={title} open={isVisible} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
};

export default ModalDialog;
