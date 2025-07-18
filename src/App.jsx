// src/App.jsx
import { createBrowserRouter, Outlet } from 'react-router-dom';

// Import Page Components (we will create these placeholder files next)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// AppLayout Component: The shell for all pages
const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        {/* The Outlet component renders the matched child route's component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// Router Configuration
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />, // Optional: A top-level error page
    children: [
      {
        index: true, // This marks it as the default child route for '/'
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
   // You can add other top-level routes here if needed (e.g., for an admin dashboard without the main header/footer)
]);

export default AppRouter;