import FooterTop from "../components/FooterTop";
import Header from "../components/Header";
import ItemDetail from "../components/ItemDetail";

const Item = () => {
  return (
    <>
      <Header />
      <div className="mt-16">
        <ItemDetail />
        <FooterTop />
      </div>
    </>
  );
};

export default Item;
