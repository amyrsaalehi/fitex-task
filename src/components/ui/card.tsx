export default function Card({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`bg-white border-1 border-slate-400 rounded-2xl p-4 shadow-xl ${className ? ` ${className}` : ''}`}
      aria-label={title}
    >
      {title && (
        <h2 className="m-0 mb-3 text-lg text-center font-bold">{title}</h2>
      )}
      {children}
    </section>
  );
}
