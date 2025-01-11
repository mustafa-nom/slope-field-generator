import Header from "./helpers/Header";
import CodeToMathInfo from "./helpers/CodeToMathInfo";
import GraphApp from "./helpers/GraphApp";
import Footer from "./helpers/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <GraphApp />
      <CodeToMathInfo />
      <Footer />
    </div>
  );
}
