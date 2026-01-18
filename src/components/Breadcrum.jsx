import React from "react";

export default function Breadcrum() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item w-100" aria-current="page"><a href="#" className="text-dark fw-bold text-decoration-none border-bottom w-100 d-flex pb-2">Home</a></li>
            </ol>
        </nav>
    );
}