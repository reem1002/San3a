import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./AppLoader.css";

export default function AppLoader() {
    const fullText = "أهلًا بكم في صنعة — المكان المناسب لتنمية صنعتك";
    const [displayedText, setDisplayedText] = useState("");
    const [doneTyping, setDoneTyping] = useState(false);

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
                clearInterval(typing);
                setDoneTyping(true);
            }
        }, 50);
        return () => clearInterval(typing);
    }, []);

    return (
        <motion.div
            className="app-loader"
            initial={{ opacity: 1 }}
            animate={doneTyping ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
                pointerEvents: doneTyping ? "none" : "auto",
            }}
        >
            <motion.div
                className="loader-logo"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <img src="/imgs/logo.png" alt="صنعة" className="logo" />
            </motion.div>

            <motion.h2
                className="loader-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <span className="typing-text">{displayedText}</span>
                <span className="cursor">|</span>
            </motion.h2>


            <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </motion.div>
    );
}
