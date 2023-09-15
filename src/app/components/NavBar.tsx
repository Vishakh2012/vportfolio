const NavBar: React.FunctionComponent = () => {
  return (
    <div className="navbar bg-base-100 w-screen sticky  z-50">
      <div className="navbar-start">
        <a href="https://medium.com/@vishakhpro2002">
          <button className="sm:btn sm:btn-primary sm:btn-outline w-[101px] h-[48px] sm:rounded-full hidden hover:rounded-full">
            Blog
          </button>
        </a>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl" href="#hero">
          Vishakh Prakash
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default NavBar;
