import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === "About Me"){
            return <About />;
        } if(currentPage === 'Portfolio'){
            return <Portfolio />;
        } if(currentPage === 'Resume'){
            return <Resume />;
        } return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(

        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>

    );
}