import React, { useEffect } from "react";
import "./style.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../hooks";
import FolderList from "./components/FolderList";
import TasksList from "./components/TasksList";
import TaskContent from "./components/TaskContent";
import { pageMounted } from "./model";
import { RootState } from "../../reduxStore";

const Home = () => {
  const dispatch = useAppDispatch();
  const folders = useAppSelector(
    (state: RootState) => state.taskManager.folders
  );
  const activeFolderId = useAppSelector(
    (state: RootState) => state.taskManager.activeFolderId
  );
  const activeTaskId = useAppSelector(
    (state: RootState) => state.taskManager.activeTaskId
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.taskManager.isLoading
  );

  const getActiveFolder = () => {
    return folders.find((item) => item.id === activeFolderId);
  };

  const getActiveTask = () => {
    if (getActiveFolder().tasks.length) {
      return getActiveFolder().tasks.find((item) => item.id === activeTaskId);
    } else return null;
  };

  useEffect(() => {
    dispatch(pageMounted());
  }, []);

  return (
    <Container className="folders-container" fluid="true">
      {!isLoading && folders.length && (
        <Row className="m-auto">
          <Col xs lg="2">
            <FolderList tasks={folders} />
          </Col>
          <Col lg="4">
            <TasksList tasks={getActiveFolder().tasks} />
          </Col>
          <Col lg="6">
            <TaskContent
              name={getActiveTask()?.name}
              description={getActiveTask()?.description}
              date={getActiveTask()?.time}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
