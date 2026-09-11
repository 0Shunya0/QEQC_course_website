import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="layout__main">
        <button className="layout__menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div className="layout__content">
          {!isHome && (
            <Link to="/" className="layout__home-link">&larr; Home</Link>
          )}
          {children}
          <Footer />
        </div>
      </main>
      {sidebarOpen && <div className="layout__overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
}
