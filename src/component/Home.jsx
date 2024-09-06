import Date from "./Date";

const Home = () => {
  
    return (
      <div className="bg-gradient-to-r from-slate-200 to-slate-500 flex">
       <h1 className="p-10 font-bold text-3xl">C<span className="text-slate-400">R</span>M</h1>
       <h1 className="font-semibold text-xl">Here our Dashboard</h1>
       <Date></Date>
      </div>
    );
  };
  
  export default Home;