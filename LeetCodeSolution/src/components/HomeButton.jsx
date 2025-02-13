import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <button
      className="z-20 flex items-center space-x-2 rounded  mt-5"
      onClick={() => navigate('/')}
    >
      <IoHome className="text-black" size={20} />
    </button>
  );
}

export default HomeButton;

