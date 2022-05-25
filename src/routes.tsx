import { Suspense, lazy } from "react";
import type { PartialRouteObject } from "react-router";
import { Navigate } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import BlogLayout from "./components/blog/BlogLayout";
import BrowseLayout from "./components/BrowseLayout";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DocsLayout from "./components/docs/DocsLayout";
import GuestGuard from "./components/GuestGuard";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./components/MainLayout";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Browse pages

const Browse = Loadable(lazy(() => import("./pages/browse/Browse")));
const BrowseButtons = Loadable(
  lazy(() => import("./pages/browse/BrowseButtons"))
);
const BrowseCharts = Loadable(
  lazy(() => import("./pages/browse/BrowseCharts"))
);
const BrowseColors = Loadable(
  lazy(() => import("./pages/browse/BrowseColors"))
);
const BrowseDetailLists = Loadable(
  lazy(() => import("./pages/browse/BrowseDetailLists"))
);
const BrowseForms = Loadable(lazy(() => import("./pages/browse/BrowseForms")));
const BrowseGridLists = Loadable(
  lazy(() => import("./pages/browse/BrowseGridLists"))
);
const BrowseGroupedLists = Loadable(
  lazy(() => import("./pages/browse/BrowseGroupedLists"))
);
const BrowseInputs = Loadable(
  lazy(() => import("./pages/browse/BrowseInputs"))
);
const BrowseModals = Loadable(
  lazy(() => import("./pages/browse/BrowseModals"))
);
const BrowseQuickStats = Loadable(
  lazy(() => import("./pages/browse/BrowseQuickStats"))
);
const BrowseTables = Loadable(
  lazy(() => import("./pages/browse/BrowseTables"))
);
const BrowseTypography = Loadable(
  lazy(() => import("./pages/browse/BrowseTypography"))
);

// Authentication pages

const Login = Loadable(lazy(() => import("./pages/authentication/Login")));
const PasswordRecovery = Loadable(
  lazy(() => import("./pages/authentication/PasswordRecovery"))
);
const PasswordReset = Loadable(
  lazy(() => import("./pages/authentication/PasswordReset"))
);
const Register = Loadable(
  lazy(() => import("./pages/authentication/Register"))
);
const VerifyCode = Loadable(
  lazy(() => import("./pages/authentication/VerifyCode"))
);

// Blog pages

const BlogPostCreate = Loadable(
  lazy(() => import("./pages/blog/BlogPostCreate"))
);
const BlogPostDetails = Loadable(
  lazy(() => import("./pages/blog/BlogPostDetails"))
);
const BlogPostList = Loadable(lazy(() => import("./pages/blog/BlogPostList")));

// Dashboard pages

const Chat = Loadable(lazy(() => import("./pages/dashboard/Chat")));
// ++++++++++++ LIVE CHAT ++++++++++++++++
const ConsoleDashboard = Loadable(
  lazy(() => import("./pages/dashboard/ConsoleDashboard"))
);
const Livechat = Loadable(lazy(() => import("./pages/dashboard/LiveChat")));
const ChatMonitor = Loadable(
  lazy(() => import("./pages/dashboard/ChatMonitor"))
);
const Broadcast = Loadable(lazy(() => import("./pages/dashboard/Broadcast")));
// +++++++++++++LIVE CHAT ++++++++++++++++

// Docs pages

const Docs = Loadable(lazy(() => import("./pages/Docs")));

// Error pages

const AuthorizationRequired = Loadable(
  lazy(() => import("./pages/AuthorizationRequired"))
);
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));
const ServerError = Loadable(lazy(() => import("./pages/ServerError")));

// Other pages

const Checkout = Loadable(lazy(() => import("./pages/Checkout")));
const Contact = Loadable(lazy(() => import("./pages/Contact")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const Pricing = Loadable(lazy(() => import("./pages/Pricing")));

const routes: PartialRouteObject[] = [
  {
    path: "authentication",
    children: [
      {
        path: "login",
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: "login-unguarded",
        element: <Login />,
      },
      {
        path: "password-recovery",
        element: <PasswordRecovery />,
      },
      {
        path: "password-reset",
        element: <PasswordReset />,
      },
      {
        path: "register",
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        ),
      },
      {
        path: "register-unguarded",
        element: <Register />,
      },
      {
        path: "verify-code",
        element: <VerifyCode />,
      },
    ],
  },

  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "consoledashboard",
        children: [
          {
            path: "/",
            element: <ConsoleDashboard />,
          },
          {
            path: "new",
            element: <ConsoleDashboard />,
          },
          {
            path: ":threadKey",
            element: <ConsoleDashboard />,
          },
        ],
      },
      {
        path: "livechat",
        children: [
          {
            path: "/",
            element: <Livechat />,
          },
          {
            path: "new",
            element: <Livechat />,
          },
          {
            path: ":threadKey",
            element: <Livechat />,
          },
        ],
      },
      {
        path: "chatmonitor",
        children: [
          {
            path: "/",
            element: <ChatMonitor />,
          },
          {
            path: "new",
            element: <ChatMonitor />,
          },
          {
            path: ":threadKey",
            element: <ChatMonitor />,
          },
        ],
      },
      {
        path: "broadcast",
        children: [
          {
            path: "/",
            element: <Broadcast />,
          },
          {
            path: "new",
            element: <Broadcast />,
          },
          {
            path: ":threadKey",
            element: <Broadcast />,
          },
        ],
      },
    ],
  },
  {
    path: "docs",
    element: <DocsLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/docs/overview/welcome" replace />,
      },
      {
        path: "*",
        element: <Docs />,
      },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "browse",
        element: <BrowseLayout />,
        children: [
          {
            path: "/",
            element: <Browse />,
          },
          {
            path: "/buttons",
            element: <BrowseButtons />,
          },
          {
            path: "/inputs",
            element: <BrowseInputs />,
          },
          {
            path: "/charts",
            element: <BrowseCharts />,
          },
          {
            path: "/colors",
            element: <BrowseColors />,
          },
          {
            path: "/data-display/detail-lists",
            element: <BrowseDetailLists />,
          },
          {
            path: "/data-display/quick-stats",
            element: <BrowseQuickStats />,
          },
          {
            path: "/data-display/tables",
            element: <BrowseTables />,
          },
          {
            path: "/forms",
            element: <BrowseForms />,
          },
          {
            path: "/modals",
            element: <BrowseModals />,
          },
          {
            path: "/lists/grouped-lists",
            element: <BrowseGroupedLists />,
          },
          {
            path: "/lists/grid-lists",
            element: <BrowseGridLists />,
          },
          {
            path: "/typography",
            element: <BrowseTypography />,
          },
        ],
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "401",
        element: <AuthorizationRequired />,
      },
      {
        path: "404",
        element: <NotFound />,
      },
      {
        path: "500",
        element: <ServerError />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
