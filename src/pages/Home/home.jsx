import Banner from "../../components/banner/banner";
import About from "../../components/about/about";
import Photobooth from "../../components/photobooth/photobooth";
import Service from "../../components/service/service";
import Book from "../../components/book/book";

const home = () => {
  return (
    <>
      <Banner />
      <About />
      <Photobooth />
      <Service />
      <Book />
    </>
  );
};

export default home;
