import { Router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import Container from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Layout } from "./layout";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Container className="flex-1 flex">
          <Layout>
            <Router />
          </Layout>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
