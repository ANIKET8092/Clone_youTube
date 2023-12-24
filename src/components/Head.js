import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow sticky top-0 z-10 ">
      <div className="flex  ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer bg-black"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="Hamburger"
        />
        <img
          className="h-12 mx-2 mt-[-0.5rem]"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-2 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user logo"
        />
      </div>
    </div>
  );
};
export default Head;
