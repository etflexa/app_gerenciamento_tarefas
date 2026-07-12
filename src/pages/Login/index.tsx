import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { user, signIn, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 overflow-hidden relative">

      {/* Efeitos de fundo */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-violet-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

        {/* Hero */}
        <div className="hidden lg:block text-white">

          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-blue-500 to-violet-600">
              <Sparkles size={28} />
            </div>

            <h1 className="text-5xl font-bold">
              Task<span className="text-blue-500">Dev</span>
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Gerencie tarefas com ajuda da IA
          </h2>

          <p className="text-slate-400 text-lg mb-8 max-w-xl">
            Planeje projetos, organize equipes e deixe a inteligência
            artificial sugerir prioridades, criar tarefas e acelerar
            sua produtividade.
          </p>

          
        </div>

        {/* Card Login */}
        <div className="w-full max-w-md mx-auto">

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              shadow-2xl
            "
          >
            <div className="text-center">

              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-linear-to-r
                  from-blue-500
                  to-violet-600
                "
              >
                <Sparkles className="text-white" size={36} />
              </div>

              <h2 className="text-3xl font-bold text-white">
                Bem-vindo
              </h2>

              <p className="mt-2 text-slate-400">
                Faça login para acessar seus projetos
              </p>
            </div>

            <button
              onClick={signIn}
              disabled={loading}
              className="
                mt-8
                w-full
                rounded-2xl
                bg-linear-to-r
                from-blue-600
                to-violet-600
                px-4
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-lg
                hover:shadow-blue-500/30
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading
                ? "Entrando..."
                : "Entrar com Google"}
            </button>

            
          </div>

        </div>

      </div>
      
    </div>
    
    
  );
  
}

