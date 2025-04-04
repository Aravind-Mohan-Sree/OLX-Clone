import Header from "../components/Header";
import YourPostsSection from "../components/YourPostsSection";
import RecommendationsSection from "../components/RecommendationsSection";
import PhoneAppSection from "../components/PhoneAppSection";
import FooterTop from "../components/FooterTop";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  
  return (
    <>
      <Header />
      <div className="mt-25">
        {user ? <YourPostsSection /> : null} 
        <RecommendationsSection />
        <PhoneAppSection /> 
        <FooterTop />
      </div>
    </>
  );
};

export default Home;
