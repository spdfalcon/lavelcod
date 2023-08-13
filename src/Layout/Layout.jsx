import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            <section className="grid">
            </section>
                {children}
            <Footer />
        </div>
    );
}

export default Layout;