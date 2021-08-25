import { Nav } from "./common/components/Nav";
import { PermissionWidget } from "./common/components/PermissionWidget";
import logoSVG from "./assets/images/logo.svg";

function App() {
  return (
    <div className="bg-m-blue-400 min-h-screen bg-robot-image">
      <Nav />
      <div className="block text-white">
        <div className="inline-block w-1/2 align-top">
          <h1
            className="text-5xl font-sans py-24 px-12 leading-snug font-semibold"
            style={{ maxWidth: "32rem" }}
          >
            Give Floof access to your financial data
          </h1>
        </div>
        <div className="inline-block w-1/2 align-top text-gray-800 py-8 font-mono text-center">
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
