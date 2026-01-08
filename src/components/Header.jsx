import React from "react";
import logo from "../assets/img/header-logo.png";

export default function Header() {
    return (
        <header>
            <div className="d-flex justify-content-between align-items-center p-2 pt-2 pb-2">
                <div className="d-flex gap-2 alig-items-center">
                    <i className="bi bi-list d-flex align-items-center fs-3"></i>
                    <img src={logo} alt="Logo" width={80}/>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <i className="bi bi-brightness-high-fill"></i>
                    <span>Welcome <strong>UserName</strong></span>
                    <strong className="border border-2 border-dark rounded p-2 pt-1 pb-1">FN</strong>
                    <i className="bi bi-person-fill border border-2 border-dark rounded p-2 pt-1 pb-1"></i>
                </div>
            </div>
        </header>
    );
}