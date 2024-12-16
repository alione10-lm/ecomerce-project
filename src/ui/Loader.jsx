import Spinner from "./Spinner";

function Loader() {
  return (
    <div className="absolute inset-0 flex z-30 items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader">
        <Spinner />
      </div>
    </div>
  );
}

export default Loader;
