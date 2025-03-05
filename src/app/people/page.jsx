import React from 'react';

const PeoplePage = () => {
    return (
        <div className="relative w-full h-[600px]">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}>
                {/* Black Overlay (Shadow) on top of the image */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content on top of the background */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold p-4">
                <div className="text-center">
                    Welcome to the People Page
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;
