import React from "react";
import useBootstrapTooltip from "../hooks/useBootstrapTooltip";

export default function Asidebar() {
    useBootstrapTooltip()
    return (
        <aside>
            <ul className="list-unstyled">
                <li className="d-flex justify-content-start ps-2 mb-3">
                    <a href="" className="d-flex align-items-center gap-2 text-decoration-none">
                        <i className="bi bi-house-fill text-dark fs-5"></i> 
                        <span className="text-dark text-nowrap">Admin Dashboard</span>
                    </a>
                </li>
                <li className="d-flex justify-content-start ps-2 mb-3">
                    <a href="" className="d-flex align-items-center gap-2 text-decoration-none">
                        <i className="bi bi-person-lines-fill text-dark fs-5"></i>
                        <span className="text-dark text-nowrap">Reports</span>
                    </a>
                </li>
                <li className="d-flex justify-content-start ps-2">
                    <a href="" className="d-flex align-items-center gap-2 text-decoration-none">
                        <i className="bi bi-receipt text-dark fs-5"></i>
                        <span className="text-dark text-nowrap">Billing</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}