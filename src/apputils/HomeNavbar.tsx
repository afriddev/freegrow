import { useNavigate } from "react-router-dom";

function HomeNavBar() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <div className="  w-[100vw] h-fit py-2 px-8">
      <div
        onClick={handleLogoClick}
        className="cursor-pointer  w-fit z-50  absolute "
      >
        <div className="flex mt-5">
          <div className="w-6 h-3 rotate-90 rounded-t-full bg-blue-500"></div>
          <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-blue-500"></div>
        </div>
        <p className=" font-semibold -mt-6 ml-6 text-xl leading-[50px]">
          Free Grow
        </p>
      </div>
    </div>
  );
}

export default HomeNavBar;
