import { Nav } from "./common/components/Nav";
import { PermissionWidget } from "./common/components/PermissionWidget";
import logoSVG from "./assets/images/logo.svg";

function App() {
  return (
    <div className="bg-m-blue-400 min-h-screen bg-robot-image">
      <Nav />
      <div className="block text-white">
        <div className="inline-block w-full lg:w-1/2 align-top">
          <h1
            className="text-3xl lg:text-5xl font-sans py-2 lg:py-24 px-12 leading-snug lg:font-semibold w-full lg:w-128"
          >
            Give Floof access to your financial data
          </h1>
        </div>
        <div className="inline-block w-full lg:w-1/2 align-top text-gray-800 px-4 sm:px-8 md:px-24 lg:px-0 py-8 font-mono text-center">
          <PermissionWidget />
          <div className="py-4">
            <span className="inline-block text-white bg-m-blue-500 px-2 py-1 rounded">
              Powered by <img className="inline h-4" src={logoSVG} alt="Logo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
