import { HeaderSection, FooterSections } from "components";

const GetPage = ({ out, Page }) => {
  return (
    <>
      <HeaderSection />
      <main>
        <Page />
      </main>
      <FooterSections />
    </>
  );
};

export default GetPage;
