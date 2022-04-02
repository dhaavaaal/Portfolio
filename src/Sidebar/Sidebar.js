// import * as React from "react";
// import styles from "./Sidebar.module.css";
// import SocialMediaIcons from "./SocialMediaIcons";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItemText from "@mui/material/ListItemText";
// import { ListItemButton } from "@mui/material";

// const drawerWidth = 270;

// export default function SideBar() {
//   return (
//     <div className="sidebar">
//       <Drawer
//         className={styles["side-bar"]}
//         sx={{
//           width: "300px",
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <div className={styles["name-initial"]}>
//           <Typography sx={{ fontSize: "52px", fontWeight: "800" }}>
//             M.
//           </Typography>
//         </div>
//         <Divider sx={{ backgroundColor: "white" }} />
//         <List>
//           {[
//             "Home",
//             "About",
//             "Education",
//             "Experience",
//             "Projects",
//             "Contact",
//           ].map((text, index) => (
//             <ListItemButton component="a" href={`/${text}`} key={text}>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           ))}
//         </List>
//         <Divider sx={{ backgroundColor: "white" }} />
//         <List>
//           {[
//             "{props.phoneNumber}",
//             "{props.mailId}",
//             "{props.locaion}",
//             <SocialMediaIcons />,
//           ].map((text, index) => (
//             <ListItemButton component="a" href={`/${text}`} key={text}>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//     //
//   );
// }
