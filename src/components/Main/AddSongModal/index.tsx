import React, { useState } from "react";
import { Input } from "antd";
import ModalDialog from "../../Modal";

interface IProps {
  isVisible: boolean;
  title: string;
  onOk: (values: any) => void;
  onCancel: () => void;
}

const AddSongModal = (props: IProps) => {
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const onSubmit = () => {
    props.onOk({ year, name, author });
  };

  return (
    <ModalDialog {...props} onOk={onSubmit}>
      <Input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      <Input placeholder="Name of song" onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Year" onChange={(e) => setYear(e.target.value)} />
    </ModalDialog>
  );
};

export default AddSongModal;
