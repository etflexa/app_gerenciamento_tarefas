import type { ITask } from "../../types/Task";

interface TaskCardProps {
  task: ITask;
}

export default function TaskCard({
  task,
}: TaskCardProps) {
  const priorityColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-blue-500">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-white">
          {task.title}
        </h3>

        <span
          className={`h-3 w-3 rounded-full ${
            priorityColors[task.priority]
          }`}
        />
      </div>

      {task.description && (
        <p className="mt-2 text-sm text-slate-400">
          {task.description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-blue-600 px-2 py-1 text-xs">
          {task.category}
        </span>

        <span className="rounded-md bg-slate-700 px-2 py-1 text-xs">
          {task.priority}
        </span>

        {task.dueDate && (
          <span className="rounded-md bg-slate-700 px-2 py-1 text-xs">
            📅 {task.dueDate}
          </span>
        )}
      </div>
    </div>
  );
}