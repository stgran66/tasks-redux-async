import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { selectIsLoading, selectError } from 'redux/selectors';

const MessageContainer = styled.div`
  height: 20px;
`;

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <MessageContainer>
        {isLoading && <p>Loading tasks.........</p>}
        {error && <p>{error}</p>}
      </MessageContainer>
      <TaskList />
    </Layout>
  );
};
