
import Dashboard from "./src/pages/neural-roots-workspace/DashboardPage";
import ProjectBoard from "./src/pages/neural-roots-workspace/ProjectBoardPage";
import ProjectDetail from "./src/pages/neural-roots-workspace/ProjectDetailsPage";
import ProjectMember from "./src/pages/neural-roots-workspace/ProjectMemberPage";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: ProjectBoard,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: ProjectMember,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: ProjectDetail,
    layout: "/admin",
  }
];

export default dashboardRoutes;
