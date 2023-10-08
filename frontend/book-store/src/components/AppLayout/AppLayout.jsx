import React from 'react';
import './AppLayout.css';

function AppLayout({ children }) {
    return (
        <div className="app-layout">
            <header>
                {/* header components like logo, navigation links, etc. */}
            </header>
            <main>
                {children}
                {/* this will render the content passed to applayout */}
            </main>
            <footer>
                {/* footer components */}
            </footer>
        </div>
    );
}

export default AppLayout;
