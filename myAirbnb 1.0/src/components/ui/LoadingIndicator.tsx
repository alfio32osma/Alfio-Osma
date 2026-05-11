const LoadingIndicator = () => {
  return (
    <div className="flex min-h-[14rem] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white/70">
      <p className="text-sm font-medium text-zinc-600">Cargando alojamientos...</p>
    </div>
  );
};

export default LoadingIndicator;
