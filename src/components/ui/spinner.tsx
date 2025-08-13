export default function Spinner() {
  return (
    <div role="status" aria-live="polite" className="grid place-items-center">
      <div className="w-[40px] h-[40px] border-t border-b border-slate-400 rounded-full animate-spin"></div>
    </div>
  );
}
