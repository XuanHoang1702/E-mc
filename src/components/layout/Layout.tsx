import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
    </div>
  );
}

export default Layout;