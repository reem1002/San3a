import React, { useState } from "react";
import "./ImageWithLoader.css";

export default function ImageWithLoader({ src, alt, className, ...props }) {
    const [loading, setLoading] = useState(true);

    return (
        <div className={`image-wrapper ${className || ""}`}>
            {loading && (
                <div className="custom-loader"></div>
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setLoading(false)}
                style={{ opacity: loading ? 0 : 1 }}
                {...props}
            />
        </div>
    );
}
