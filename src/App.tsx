import AppRoutes from "./routes/AppRoutes";

const App = () => {
  localStorage.setItem("user", "yes");
  localStorage.setItem("userRole", "admin")
  return <AppRoutes />;
  // return "hiii"
};

export default App;