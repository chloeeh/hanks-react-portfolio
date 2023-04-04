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
        if(currentPage === "Contact"){
            return <Contact />;
        } if(currentPage === 'Portfolio'){
            return <Portfolio />;
        } if(currentPage === 'Resume'){
            return <Resume />;
        } return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(

        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>

    );
}