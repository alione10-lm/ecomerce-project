import { FaReact } from "react-icons/fa";

function Spinner() {
  return (
    // <div className="w-14 h-14 border-4  absolute top-40 border-t-blue-500 border-gray-100 rounded-full animate-spin"></div>
    <FaReact className="animate-spin " size={48} color="#58c4dc" />
  );
}

export default Spinner;
