import { useDispatch, useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import {
  getTasks,
  getStatusFilter,
  getIsLoading,
  getError,
} from '../../redux/selectors';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';
import { fetchTasks } from 'redux/operations';
import { useEffect } from 'react';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getTasks);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(items, statusFilter);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks.........</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && (
        <ul className={css.list}>
          {visibleTasks.map(task => (
            <li className={css.listItem} key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
