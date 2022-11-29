import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

export default function MainLayout() {
    return (
        <div>
            <Sidebar />
            <main className="ml-[15em]">
                <Navbar />
                <Outlet />
            </main>
        </div>
    );
}