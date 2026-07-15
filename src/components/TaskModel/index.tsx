import TaskForm from "../TaskForm";

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TaskModal({
  open,
  onClose,
}: TaskModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">

      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 p-6">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-slate-400 transition hover:text-white"
        >
          ✕
        </button>

        <h2 className="mb-6 text-2xl font-bold">
          Nova tarefa
        </h2>

        <TaskForm />

      </div>

    </div>
  );
}