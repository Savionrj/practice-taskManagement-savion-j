import { Link } from 'react-router-dom';

export default function TaskList({ tasks }) {

  return (
    <div>
      {tasks.map((task, index) =>
        <Link key={index} to={`/${task.id}`}>
          {task.title}
          <br />
        </Link>)}
    </div >
  );
}
