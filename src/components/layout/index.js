import Header from '../header';
import Footer from '../footer';

function Layout({children}) {
    return (
        <div className="main">
            <Header />
            <div className="min-h-60vh mx-auto w-9/12">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;