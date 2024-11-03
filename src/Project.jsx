const Project = () => {
  return (
    <div className="mb-20">
      <p className="text-4xl  mt-28 mb-10 text-center" style={{ fontFamily: "'Tilt Prism', cursive" }}>
        Projects
      </p>
      <hr /> 
      <div className="flex gap-10 md:gap-48 md:ms-64 font-bold">
      <p>HTML CSS</p> 
       <p>React Tailwind Firebase</p> 
       <p>MERN Stack </p> 
      </div>
      <div >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  ">
        
          <div className="colmdx"></div>
          <div className="colmdx"></div>
          <div className="colmdx"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;