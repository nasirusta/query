import { LeftSection, RightSection, Timeline } from "components";

const clubs = [
  {
    name: "Geceleri Uyumayanlar",
    avatar: "https://api.lorem.space/image/movie?w=150&h=220",
    createDate: "04.02.2023",
  },
  {
    name: "Bilim ve Felsefe",
    avatar: "https://api.lorem.space/image/movie?w=150&h=220",
    createDate: "04.02.2023",
  },
  {
    name: "Sanat Kültür",
    avatar: "https://api.lorem.space/image/movie?w=150&h=220",
    createDate: "04.02.2023",
  },
  {
    name: "Spor",
    avatar: "https://api.lorem.space/image/movie?w=150&h=220",
    createDate: "04.02.2023",
  },
];

const HomePage = () => {
  return (
    <div className="h-full container mx-auto flex">
      <LeftSection clubs={clubs} />
      <div className="w-6/12 h-auto px-6">
        <Timeline />
      </div>
      <RightSection clubs={clubs} />
    </div>
  );
};

export default HomePage;
