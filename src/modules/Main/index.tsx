import { Table } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import AddSongModal from "../../components/Main/AddSongModal";

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


  // const er

  return (
    <>
      <Button text="Add song" onClick={handleClick} />
      {isVisible && (
        <AddSongModal title="Add song" isVisible={isVisible} onCancel={() => setIsVisible(false)} onOk={handleAdd} />
      )}
      <Table dataSource={songs} columns={columns} />
    </>
  );
};

export default Main;
