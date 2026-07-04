import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { signIn, loading } = useAuth();

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold">
          TaskDev
        </h1>

        <button
          onClick={signIn}
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? "Entrando..." : "Entrar com Google"}
        </button>

      </div>
    </div>
  );
}