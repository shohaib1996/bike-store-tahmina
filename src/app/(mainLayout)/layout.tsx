import Navbar from "@/components/Navbar/Navbar"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout
