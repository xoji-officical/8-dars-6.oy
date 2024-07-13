import { Outlet } from "react-router-dom"


import { Navbar } from "../companents"



function MainLayouyt() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayouyt