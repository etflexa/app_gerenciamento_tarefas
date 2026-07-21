import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { taskService } from "../../services/taskService";

export default function TaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    dueDate: "",
  });
  const { user } = useAuth();

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  if (!user) {
    return;
  }

  try {
    await taskService.createTask({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      priority: formData.priority as
        | "low"
        | "medium"
        | "high",
      status: "todo",
      dueDate: formData.dueDate,
      userId: user.uid,
    });

    console.log("Tarefa criada com sucesso");

  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block font-medium">
          Título
        </label>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Descrição
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block font-medium">
            Categoria
          </label>

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Prioridade
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 bg-slate-700"
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </div>

      </div>

      <div>
        <label className="mb-2 block font-medium">
          Prazo
        </label>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white"
      >
        Salvar tarefa
      </button>
    </form>
  );
}