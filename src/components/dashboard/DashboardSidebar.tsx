import { useEffect } from "react";
import type { FC } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core";
import ReceiptIcon from "@material-ui/icons/Receipt";
import useAuth from "../../hooks/useAuth";
import BriefcaseIcon from "../../icons/Briefcase";
import CalendarIcon from "../../icons/Calendar";
import ChartPieIcon from "../../icons/ChartPie";
import ChartSquareBarIcon from "../../icons/ChartSquareBar";
import ChatAltIcon from "../../icons/ChatAlt";
import ClipboardListIcon from "../../icons/ClipboardList";
import FolderOpenIcon from "../../icons/FolderOpen";
import MailIcon from "../../icons/Mail";
import ShareIcon from "../../icons/Share";
import ShoppingBagIcon from "../../icons/ShoppingBag";
import ShoppingCartIcon from "../../icons/ShoppingCart";
import UserIcon from "../../icons/User";
import UsersIcon from "../../icons/Users";
import Logo from "../Logo";
import NavSection from "../NavSection";
import Scrollbar from "../Scrollbar";
import MonitorIcon from '@mui/icons-material/Monitor';

interface DashboardSidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const sections = [
  {
    title: "",
    items: [
      {
        title: "Dashboard",
        path: "/consoledashboard",
        icon: <ClipboardListIcon fontSize="small" />,
      },
      {
        title: "Live Chat",
        path: "/livechat",
        icon: <ChatAltIcon fontSize="small" />,
      },
      {
        title: "Chat Monitor",
        path:"/chatmonitor",
        icon: <MonitorIcon fontSize="small"/>
      },
      {
        title: "Broadcast",
        path: "/broadcast",
        icon: <MailIcon fontSize="small" />,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: <CalendarIcon fontSize="small" />,
      },
    ],
  },
];

const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
            }}
          >
            <RouterLink to="/">
              <Logo
                sx={{
                  height: 40,
                  width: 40,
                }}
              />
            </RouterLink>
          </Box>
        </Hidden>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                "& + &": {
                  mt: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          PaperProps={{
            sx: {
              backgroundColor: "background.paper",
              width: 230,
            },
          }}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          PaperProps={{
            sx: {
              backgroundColor: "background.paper",
              height: "calc(100% - 64px) !important",
              top: "64px !Important",
              width: 180,
            },
          }}
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
