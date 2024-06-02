import { Router } from "./routes";
import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Layout } from "./layout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container className="flex-1 flex">
        <Layout>
          <Router />
        </Layout>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
