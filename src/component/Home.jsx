import Chart from "./Chart";
import DateP from "./DateP";
import LineC from "./LineC";

const Home = () => {

  return (
    <div className="">
    <div className="bg-gradient-to-r from-slate-200 to-slate-500 flex justify-around p-4">
      <h1 className="text-4xl font-bold pt-3">
        C<span className="text-slate-400">R</span>M
      </h1>
      <h1 className="text-4xl font-bold pt-3 hidden md:block lg:block">Dashboard</h1>
      <DateP></DateP>
    </div>
      <Chart></Chart>
      <LineC></LineC>
    </div>
  );
};

export default Home;
