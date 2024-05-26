import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"

const RootLayout = ({
    children
} : {
    children : React.ReactNode
}) => {
    return (
        <>
            <div className="flex h-screen flex-col overflow-x-hidden">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default RootLayout;