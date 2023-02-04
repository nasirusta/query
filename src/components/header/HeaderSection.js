import Logo from "./Logo";
import MyProfile from "./MyProfile";
import SearchSection from "./SearchSection";

const HeaderSection = () => {
  return (
    <header>
      <div id="header-container">
        <Logo />
        <SearchSection />
        <MyProfile />
      </div>
    </header>
  );
};

export default HeaderSection;
