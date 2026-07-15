import { useState } from "react";
import TaskModal from "../../components/TaskModel";

export default function Dashboard() {

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
     
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-linear-to-r from-blue-500 to-violet-600" />

          <span className="font-bold text-xl">
            TaskDev
          </span>
        </div>

        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-80 rounded-xl bg-slate-900 border border-slate-700 px-4 py-2 outline-none"
        />

        <div className="h-10 w-10 rounded-full bg-slate-700" />
      </header>

      <div className="flex">
        
        <aside className="w-64 border-r border-slate-800 p-4">
          <nav className="space-y-2">
            <MenuItem label="🏠 Dashboard" />
            <MenuItem label="📂 Projetos" />
            <MenuItem label="✅ Tarefas" />
            <MenuItem label="🤖 IA" />
            <MenuItem label="👥 Equipe" />
            <MenuItem label="⚙️ Configurações" />
          </nav>
        </aside>

        
        <main className="flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">

            <div>
              <h1 className="text-3xl font-bold">
                Olá, Eduardo 👋
              </h1>

              <p className="mt-2 text-slate-400">
                Aqui está um resumo das suas atividades.
              </p>
            </div>

            <button
              onClick={() => setIsTaskModalOpen(true)}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              + Nova tarefa
            </button>

          </div>

          
          <div className="grid gap-6 md:grid-cols-3">
            <StatCard
              title="Tarefas Ativas"
              value="12"
            />

            <StatCard
              title="Em Atraso"
              value="5"
            />

            <StatCard
              title="Sprint"
              value="89%"
            />
          </div>

          
          <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              ✨ Assistente IA
            </h2>

            <input
              type="text"
              placeholder="Ex: Organize minhas tarefas da semana"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none"
            />
          </section>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">
                Projetos Recentes
              </h2>

              <div className="space-y-5">
                <ProjectCard
                  name="Website Institucional"
                  progress={75}
                />

                <ProjectCard
                  name="Sistema de Licitação"
                  progress={40}
                />

                <ProjectCard
                  name="TaskDev"
                  progress={15}
                />
              </div>
            </section>

            
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">
                Kanban Resumido
              </h2>

              <div className="grid grid-cols-4 gap-3">
                <Column
                  title="Todo"
                  count={8}
                />

                <Column
                  title="Doing"
                  count={3}
                />

                <Column
                  title="Review"
                  count={2}
                />

                <Column
                  title="Done"
                  count={15}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
      <TaskModal
        open={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
      />
    </div>
  );
}



interface MenuItemProps {
  label: string;
}

function MenuItem({ label }: MenuItemProps) {
  return (
    <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-slate-800">
      {label}
    </button>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-4xl font-bold">
        {value}
      </h3>
    </div>
  );
}

interface ProjectCardProps {
  name: string;
  progress: number;
}

function ProjectCard({
  name,
  progress,
}: ProjectCardProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>{name}</span>
        <span>{progress}%</span>
      </div>

      <div className="h-2 rounded-full bg-slate-700">
        <div
          className="h-2 rounded-full bg-blue-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

interface ColumnProps {
  title: string;
  count: number;
}

function Column({
  title,
  count,
}: ColumnProps) {
  return (
    <div className="rounded-xl bg-slate-800 p-4 text-center">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {count}
      </p>
    </div>
  );
}