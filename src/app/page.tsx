import { Rocket, Shield, Zap, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />

            <div className="z-10 text-center space-y-8 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-pulse">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-300">SaaS Factory V3 Active</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Sideral SaaS
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    Esta es la plantilla base creada a partir de los comandos del <span className="text-blue-400">SaaS Factory</span>.
                    Un entorno optimizado para el desarrollo rápido con agentes de IA.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group">
                        <Zap className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-2">Desarrollo Ultra Rápido</h3>
                        <p className="text-gray-400 text-sm">Genera módulos completos con un solo comando en CLAUDE.md.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group">
                        <Shield className="w-10 h-10 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-2">Diseño Premium</h3>
                        <p className="text-gray-400 text-sm">Componentes con Glassmorphism y estética moderna por defecto.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group">
                        <Rocket className="w-10 h-10 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-2">Optimizado para IA</h3>
                        <p className="text-gray-400 text-sm">Contexto optimizado en CLAUDE.md y GEMINI.md para mejores resultados.</p>
                    </div>
                </div>

                <div className="pt-12">
                    <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                        Comenzar a Crear
                    </button>
                </div>
            </div>
        </main>
    );
}
