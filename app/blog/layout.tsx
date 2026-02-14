import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomFadeBlurOverlay from "../components/BottomFadeBlurOverlay";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <BottomFadeBlurOverlay />
            <main className="min-h-screen pt-[106px]">{children}</main>
            <Footer />
        </>
    );
}
