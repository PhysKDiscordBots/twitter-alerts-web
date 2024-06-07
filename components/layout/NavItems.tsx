import { useNavigation } from "@/contexts/NavigationContext";
import classNames from "@/util/classNames";
const { navigation, setPage } = useNavigation();
const NavItems = () => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => setPage(item.name)}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};
export default NavItems;
