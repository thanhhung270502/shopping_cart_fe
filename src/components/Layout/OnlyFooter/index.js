import Footer from '../DefaultLayout/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
