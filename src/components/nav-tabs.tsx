import { NavLink } from 'react-router-dom';

export default function NavTabs() {
  const base = 'px-3 py-2 rounded';
  const active = 'bg-black text-white';

  return (
    <nav className="flex gap-2 mb-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `${base} ${isActive ? active : ''}`}
      >
        Overview
      </NavLink>
    </nav>
  );
}
