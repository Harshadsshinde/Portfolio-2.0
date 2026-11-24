import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import "./index.css";

if (typeof window !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

import SmoothScroll from "./lib/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
import RouteWipe from "./components/RouteWipe";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

import Landing from "./Pages/Landing";
import Work from "./Pages/Work";
import WorkDetail from "./Pages/WorkDetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const WebGLTest = lazy(() => import("./Pages/WebGLTest"));

// Remember the scroll offset of each history entry so Back/Forward returns you
// to where you were (e.g. the project you clicked) instead of the top.
const scrollPositions = new Map();

function ScrollToTop() {
  const { pathname, key } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only record positions from real scroll events — calling this on mount
    // would clobber a saved offset with the outgoing page's scroll before we
    // get a chance to restore it.
    const onScroll = () => scrollPositions.set(key, window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [key]);

  useEffect(() => {
    const isPop = navType === "POP" && scrollPositions.has(key);
    const target = isPop ? scrollPositions.get(key) : 0;

    const apply = () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { immediate: true });
        window.__lenis.resize();
      } else {
        window.scrollTo({ top: target, behavior: "auto" });
      }
      if (window.__scrollTriggerRefresh) window.__scrollTriggerRefresh();
    };

    apply();
    // Re-run after the new route's DOM has laid out so pinned sections and
    // lazy media can settle before we lock the final position.
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(apply);
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [pathname, key, navType]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition>
            <Landing />
          </PageTransition>
        }
      />
      <Route
        path="/work"
        element={
          <PageTransition>
            <Work />
          </PageTransition>
        }
      />
      <Route
        path="/work/:id"
        element={
          <PageTransition>
            <WorkDetail />
          </PageTransition>
        }
      />
      <Route
        path="/about"
        element={
          <PageTransition>
            <About />
          </PageTransition>
        }
      />
      <Route
        path="/contact"
        element={
          <PageTransition>
            <Contact />
          </PageTransition>
        }
      />
      <Route
        path="/webgl-test"
        element={
          <Suspense fallback={null}>
            <WebGLTest />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <RouteWipe />
        <ScrollToTop />
        <Navbar />
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>
      </SmoothScroll>
    </BrowserRouter>
  );
}
