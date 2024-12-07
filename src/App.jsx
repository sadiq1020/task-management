import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import HeroSection from "./component/Hero/HeroSection";
import TaskBoard from "./component/Task/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
