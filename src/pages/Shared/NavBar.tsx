import { Link } from "react-router-dom";
import { MenuLinks } from "../../utils/list";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../../components/ui/Drawer";
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="h-[60px] flex justify-between items-center lg:px-[60px] px-5 py-2 bg-primary-foreground/10 text-slate-950">
      <Link to={"/"} className="flex gap-x-2 items-center">
        <img src="FT.png" alt="" className="h-[42px]" />
        <p className="text-3xl font-bold">
          <span className="text-primary">Car</span>{" "}
          <span className="text-primary-foreground">Wash</span>
        </p>
      </Link>
      <div className="md:flex items-center gap-x-3 font-medium hidden">
        {MenuLinks?.map((menu, idx) => (
          <Link key={idx} to={menu?.path}>
            {menu?.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden block">
        <Drawer direction="right">
          <DrawerTrigger>
            <IoMenu className="text-2xl" />{" "}
          </DrawerTrigger>
          <DrawerContent className="right-0 top-0 mt-0 ms-[200px] rounded-r-none">
            <DrawerClose className="flex justify-end m-2">
              <AiOutlineCloseSquare className=" text-3xl p-1" />
            </DrawerClose>
            <div className="flex flex-col w-[200px] gap-y-3 font-medium px-4">
              {MenuLinks?.map((menu, idx) => (
                <Link key={idx} to={menu?.path}>
                  {menu?.name}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
