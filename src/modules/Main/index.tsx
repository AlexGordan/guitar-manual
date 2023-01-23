import React, { useMemo, useState } from "react";

// components
import Button from "../../components/Button";
import AddSongModal from "../../components/Modals/TemplateModalDialogs/Main/AddSongModal";
import { Table } from "antd";

export interface ISong {
  author: string;
  name: string;
  year: string;
}

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [songs, setSongs] = useState<ISong[]>([]);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleAdd = (song: ISong) => {
    setIsVisible(false);
    setSongs((prevState) => [...prevState, song]);
  };

  const columns = useMemo(() => {
    return [
      {
        title: "Author",
        dataIndex: "author",
      },
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Year",
        dataIndex: "year",
      },
    ];
  }, []);

  return (
    <>
      <Button text="Add song" onClick={handleClick} />

      <Table size="large" dataSource={songs} columns={columns} />

      {isVisible && <AddSongModal title="Add song" isVisible={isVisible} closeCallback={() => setIsVisible(false)} onSubmit={handleAdd} />}
    </>
  );
};

export default Main;
