import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { navItems } from "@/data/content";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); setMenuOpen(false); }, [location]);
  return <div className="site-shell">
    <div className="announcement"><span>RIYADVI / DIGITAL GROWTH PARTNER</span><span className="announcement__desktop">Now booking Q4 transformation sprints <ArrowRight size={13} /></span><span className="announcement__mobile">Q4 sprints open</span></div>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Riyadvi home"><span className="brand-mark">R</span><span>riyadvi<span className="brand-dot">.</span></span></Link>
      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>{navItems.map(item => <Link key={item.href} href={item.href} className={location.startsWith(item.href) ? "is-active" : ""}>{item.label}</Link>)}<Link href="/software-project-planning-guide" className="nav-lead">Planning guide <ArrowRight size={15} /></Link></nav>
      <Link href="/contact" className="header-cta">Let's talk <ArrowRight size={16} /></Link>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {children}
    <Footer />
  </div>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><span className="eyebrow">A sharper way forward</span><h2>Make your next move<br /><em>matter.</em></h2></div><Link href="/contact" className="round-arrow" aria-label="Contact Riyadvi"><ArrowRight /></Link></div><div className="footer-grid"><div><Link href="/" className="brand brand--footer"><span className="brand-mark">R</span><span>riyadvi<span className="brand-dot">.</span></span></Link><p>Technology, design and growth<br />for businesses ready to move.</p></div><div><span className="footer-label">Explore</span><Link href="/services">Capabilities</Link><Link href="/portfolio">Work</Link><Link href="/about">About</Link><Link href="/blog">Insights</Link></div><div><span className="footer-label">Connect</span><a href="mailto:hello@riyadvisoftwaretechnologies.com">Email us</a><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp</a><Link href="/contact">Book a consultation</Link><Link href="/careers">Join the team</Link></div><div><span className="footer-label">Studio</span><p>Chennai, Tamil Nadu<br />India · +91 99999 99999</p><p className="footer-muted">© 2026 Riyadvi Software Technologies</p></div></div></footer>;
}

export function PageIntro({ kicker, title, description, children }: { kicker: string; title: React.ReactNode; description?: string; children?: React.ReactNode }) {
  return <section className="page-intro"><div className="container page-intro__inner"><span className="eyebrow">{kicker}</span><h1>{title}</h1>{description && <p>{description}</p>}{children}</div></section>;
}

export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) { return <div className="section-label"><span>{index}</span><span>{children}</span></div>; }

export function LinkArrow({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link href={href} className={`link-arrow ${light ? "link-arrow--light" : ""}`}>{children}<ArrowRight size={16} /></Link>; }

export function Grain() { return <div className="grain" aria-hidden="true" />; }
