import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetail({ tasks }) {
  const { taskId } = useParams();

  const task = tasks.find(tsk => tsk.id === Number(taskId));
  console.log({ task });



  return (
    <div>
      <h1>{task ? task.description : `Error, ${taskId} is not a valid task ID. Please try again.`}</h1>
    </div>
  )
}
