import { useDispatch, useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectVisibleTasks } from '../../redux/selectors';
import css from './TaskList.module.css';
import { fetchTasks } from 'redux/operations';
import { useEffect } from 'react';

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectVisibleTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {tasks.length > 0 && (
        <ul className={css.list}>
          {tasks.map(task => (
            <li className={css.listItem} key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
