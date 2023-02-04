import { FaSistrix } from "react-icons/fa";

const SearchSection = () => {
  return (
    <div className="search">
      <form className="flex items-center">
        <input type="text" id="search" placeholder="Arama Yap..." required />
        <button type="submit">
          <FaSistrix size={19} />
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
