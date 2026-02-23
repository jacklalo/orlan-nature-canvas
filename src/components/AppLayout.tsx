import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/Footer";

const navLinks = [
  { label: "Nature Canvas", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "Biography", path: "/biography" },
  { label: "Sculptures", path: "/sculptures" },
  { label: "Work Detail", path: "/work-detail" },
  { label: "Concept", path: "/concept" },
  { label: "Exhibition", path: "/exhibition" },
  { label: "Index / Filter", path: "/index-filter" },
  { label: "Editorial", path: "/editorial" },
];

export const AppLayout = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-52 flex-col justify-between border-r border-border bg-background z-40 py-12 px-6">
        <div>
          <a
            href="https://www.orlan.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtitle tracking-[0.25em] block mb-16 link-underline"
          >
            ORLAN
          </a>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.12em] uppercase py-2 transition-opacity duration-300 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <p className="text-caption text-muted-foreground/50 text-[10px]">
          © {new Date().getFullYear()}
        </p>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-14 flex items-center justify-between px-6">
        <a
          href="https://www.orlan.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-subtitle tracking-[0.25em]"
        >
          ORLAN
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-xs tracking-[0.15em] uppercase text-foreground"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-background flex flex-col items-start justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-3xl tracking-tight transition-opacity duration-300 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 lg:ml-52 min-h-screen flex flex-col">
        <div className="flex-1 pt-14 lg:pt-0">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};
