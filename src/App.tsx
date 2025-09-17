import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductListingPage from './pages/ProductListingPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductListingPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;