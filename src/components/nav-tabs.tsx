import { NavLink } from 'react-router-dom';

export default function NavTabs() {
  const base = 'px-3 py-2 rounded';
  const active = 'bg-black text-white';

  return (
    <nav className="w-full flex gap-2 mb-6 whitespace-nowrap overflow-auto pe-8 pb-2">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `${base} ${isActive ? active : ''}`}
      >
        Overview
      </NavLink>
      <NavLink
        to="/campaigns"
        end
        className={({ isActive }) => `${base} ${isActive ? active : ''}`}
      >
        Campaigns
      </NavLink>
      <NavLink
        to="/create"
        end
        className={({ isActive }) => `${base} ${isActive ? active : ''}`}
      >
        Create Campaigns
      </NavLink>
    </nav>
  );
}
