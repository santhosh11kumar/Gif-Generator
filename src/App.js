import './App.css';
import Display from './Components/Display';
import Random from './Components/Random';

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg uppercase w-full text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random ></Random>
        <Display></Display>
      </div>
    </div>
  );
}

export default App;
