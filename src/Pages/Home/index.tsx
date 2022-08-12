import React, { useEffect } from "react";
import "./style.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../hooks";
import FolderList from "./components/FolderList";
import TasksList from "./components/TasksList";
import TaskContent from "./components/TaskContent";
import { getFolders } from "./model";

const Home = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ authorization }) => authorization.userId);
  const folders = useAppSelector(({ taskManager }) => taskManager.folders);

  useEffect(() => {
    dispatch(getFolders(userId));
  }, []);

  return (
    <Container className="folders-container" fluid="true">
      <Row className="m-auto">
        <Col lg="3">
          <FolderList folders={folders} />
        </Col>
        <Col lg="4">
          <TasksList folders={folders} />
        </Col>
        <Col lg="5">
          <TaskContent folders={folders} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
