import React from "react";
import { Divider, Modal } from "antd";

export interface RequiredModalWindowProps {
  title: string;
  isVisible: boolean;
  closeCallback: () => void;
  onSubmit: (values?: any) => void;
}
interface IProps extends RequiredModalWindowProps {
  children: any;
}

const ModalDialog = ({ isVisible, onSubmit, closeCallback, children, ...rest }: IProps) => {
  return (
    <Modal {...rest} open={isVisible} onOk={onSubmit} onCancel={closeCallback}>
      <Divider />
      {children}
    </Modal>
  );
};

export default ModalDialog;
