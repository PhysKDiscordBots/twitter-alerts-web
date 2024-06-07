import Navigation from "@/components/layout/Navigation";

import { pageInfo } from "@/app/layout";

const Header = () => {
  return (
    <div className="bg-gray-800 pb-32">
      <Navigation />
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {pageInfo.title}
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
