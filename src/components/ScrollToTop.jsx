import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const root = document.documentElement; 
        const body = document.body;

        root.scrollTo({ top: 0, behavior: "smooth" });
        body.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}
