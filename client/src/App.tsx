import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { jobs } from "./lib/fake-data";
import { CompanyPage } from "./pages/CompanyPage";
import { CreateJobPage } from "./pages/CreateJobPage";
import { HomePage } from "./pages/HomePage";
import { JobPage } from "./pages/JobPage";
import { LoginPage } from "./pages/LoginPage";

function AppLayout() {
  return (
    <>
      <NavBar user={null} onLogout={() => {}} />
      <main className="section">
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/companies/:companyId",
        element: <CompanyPage />,
      },
      {
        path: "/jobs/new",
        element: <CreateJobPage />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobPage jobs={jobs} />,
      },
      {
        path: "/login",
        element: <LoginPage onLogin={() => {}} />,
      },
      {
        path: "*",
        element: <div>page not found</div>,
      },
    ],
  },
]);

export function App() {
  // const navigate = useNavigate();
  // const [user, setUser] = useState(getUser);

  // const handleLogin = (user: User) => {
  //   setUser(user);
  //   navigate("/");
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   navigate("/");
  // };

  return <RouterProvider router={router} />;
}
