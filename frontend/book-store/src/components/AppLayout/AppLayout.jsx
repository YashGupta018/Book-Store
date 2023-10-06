import React from 'react';
import './AppLayout.css';

function AppLayout({ children }) {
    return (
        <div className="app-layout">
            <header>
                {/* Your header components like logo, navigation links, etc. */}
            </header>
            <main>
                {children}
                {/* This will render the content passed to AppLayout */}
            </main>
            <footer>
                {/* Your footer components */}
            </footer>
        </div>
    );
}

export default AppLayout;
