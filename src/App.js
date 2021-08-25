import { Nav } from "./common/components/Nav";

function App() {
  return (
    <div className="bg-m-blue-400 h-screen bg-robot-image">
      <Nav />
      <div className="block text-white">
        <div className="inline-block w-1/2 align-top">
          <h1 className="text-5xl font-sans py-24 px-12 leading-snug font-semibold">
            Give Floof access to your financial data
          </h1>
        </div>
        <div className="inline-block w-1/2 align-top"></div>
      </div>
    </div>
  );
}

export default App;
