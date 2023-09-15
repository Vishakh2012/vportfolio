const Hero:React.FunctionComponent = () => {
  return (
    
      <div className="flex min-h-screen bg-base-200 w-screen justify-center items-center" id = "hero">
        <div className="hero-content text-center w-screen">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">Hello👋visitors</h1>
            <p className="py-6 text-2xl">
              I am Vishakh Prakash, a ML developer who dabbles in other
              technologies. I am passionate about reading and football⚽😎.
            </p>
            <a href="#project" style={{scrollBehavior: 'smooth'}}>
              <button className="btn btn-primary">See Projects</button>
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default Hero;
