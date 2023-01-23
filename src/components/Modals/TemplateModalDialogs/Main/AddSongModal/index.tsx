import React, { useState } from "react";

// components
import Input from "../../../../Input";
import ModalDialog, { RequiredModalWindowProps } from "../../../ModalDialog";

type IProps = RequiredModalWindowProps;

const AddSongModal = ({ onSubmit, ...rest }: IProps) => {
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    onSubmit({ year, name, author });
  };

  return (
    <ModalDialog {...rest} onSubmit={handleSubmit}>
      <Input name="Author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
      <Input name="Name" placeholder="Name of song" onChange={(e) => setName(e.target.value)} value={name} />
      <Input name="Year" placeholder="Year" onChange={(e) => setYear(e.target.value)} value={year} />
    </ModalDialog>
  );
};

export default AddSongModal;
