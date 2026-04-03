import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";

export const Footer = () => {
  const renderIcon = (IconComp: any) => {
    if (!IconComp) return null;
    const C = IconComp as React.ComponentType<any>;
    // Tabler icons are React components; render them with sizing.
    return <C className="h-4 w-4 text-neutral-500" />;
  };

  return (
    <footer className="mt-auto border-t border-neutral-100 bg-white/70 backdrop-blur px-6 py-10 text-neutral-600">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-neutral-100 bg-gradient-to-br from-white/70 via-white/60 to-neutral-50/60 p-7 shadow-sm">
          <div className="absolute inset-0 pointer-events-none rounded-2xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.35]"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                Hussnain Mulazam
              </div>
              <p className="text-xs mt-2 text-neutral-600">
                Full-Stack Web Developer focused on AI-powered apps &
                automation.
              </p>

              <div className="mt-4 space-y-1 text-xs">
                <div>
                  <a
                    className="hover:underline underline-offset-2"
                    href="mailto:hussnainmulazam@gmail.com"
                  >
                    hussnainmulazam@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    className="hover:underline underline-offset-2"
                    href="tel:+923266655307"
                  >
                    +92 326 6655307
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-neutral-900">
                Quick links
              </div>
              <ul className="mt-3 space-y-2 text-xs">
                {navlinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-2 rounded-md px-2 py-1 hover:bg-neutral-100 transition-colors"
                    >
                      {renderIcon(l.icon)}
                      <span className="text-neutral-700 group-hover:text-neutral-900">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-neutral-900">Social</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-2 text-xs hover:bg-white transition-colors"
                  >
                    {renderIcon(s.icon)}
                    <span className="text-neutral-700">{s.label}</span>
                  </a>
                ))}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-2 text-xs hover:bg-white transition-colors"
                >
                  <span className="h-4 w-4 rounded bg-neutral-900/5 flex items-center justify-center">
                    ✉
                  </span>
                  <span className="text-neutral-700">Contact form</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 pt-4 border-t border-neutral-100 text-[11px] text-neutral-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Hussnain Mulazam</span>
        </div>
      </div>
    </footer>
  );
};
