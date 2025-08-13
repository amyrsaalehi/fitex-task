export default function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="bg-white border-1 border-slate-400 rounded-2xl p-4 shadow-xl"
      aria-label={title}
    >
      {title && <h2 className="m-0 mb-3 text-lg">{title}</h2>}
      {children}
    </section>
  );
}
