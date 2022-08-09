import React from "react";
import "./style.scss";
import { Col, Container, Row } from "react-bootstrap";
import FolderList from "./components/FolderList";
import { FoldersList } from "./types";
import TasksList from "./components/TasksList";
import TaskContent from "./components/TaskContent";

const tasks = [
  { name: "task1", description: "text", time: 1660075944351 },
  {
    name: "task2",
    description: "text text text text text text text text text text",
    time: 1660076166722,
  },
];
const folders: FoldersList = [
  { name: "Folder1", id: 1, tasks },
  {
    name: "Folder2",
    id: 2,
    tasks: [{ name: "task1", description: "text", time: 1660076196967 }],
  },
  { name: "Test", id: 3, tasks: [] },
];

const Home = () => {
  return (
    <Container className="folders-container" fluid="true">
      <Row>
        <Col xs lg="2">
          <FolderList tasks={folders} />
        </Col>
        <Col lg="4">
          <TasksList tasks={tasks} />
        </Col>
        <Col lg="6">
          <TaskContent
            name={tasks[0].name}
            description={tasks[0].description}
            date={tasks[0].time}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
