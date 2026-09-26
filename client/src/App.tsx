import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Lenis from "lenis";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Grain, SiteLayout } from "./components/SiteLayout";
import { Route, Switch } from "wouter";
import { About, Admin, Blog, BlogDetail, Careers, CareerDetail, CaseStudy, Contact, HealthCheckup, Home, NotFound, PlanningGuide, Portfolio, ServiceDetail, Services } from "./pages/Pages";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/services/:slug" component={ServiceDetail} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/portfolio/:slug" component={CaseStudy} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="/blog/:slug" component={BlogDetail} />
    <Route path="/careers" component={Careers} />
    <Route path="/careers/:slug" component={CareerDetail} />
    <Route path="/contact" component={Contact} />
    <Route path="/business-health-checkup" component={HealthCheckup} />
    <Route path="/software-project-planning-guide" component={PlanningGuide} />
    <Route path="/admin" component={Admin} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);
  return null;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><SmoothScroll /><SiteLayout><Grain /><Router /></SiteLayout></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
