const Navbar = () => {
  return (
    <nav className="bg-primary fixed w-full px-4 pt-4 pb-6 flex">
      <h1 className="text-white text-xl">แล้วแต่แอป</h1>
      <h1 className="text-white text-xl ml-auto md:hidden">KMITL</h1>
      <h1 className="text-white text-xl ml-auto hidden lg:inline">
        King Mongkut&#39;s Institute of Technology Ladkrabang
      </h1>

      <div className="h-2 bg-secondary absolute bottom-0 inset-x-0"></div>
    </nav>
  );
};

export default Navbar;
