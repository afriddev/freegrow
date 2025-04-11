import { Outlet } from "react-router-dom";

function UnProtected() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UnProtected;
