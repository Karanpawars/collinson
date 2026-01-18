import React from "react";
import Header from "../components/Header";
import Asidebar from "../components/Asidebar";
import Footer from "../components/Footer";
import DashboardInvoiceCard from "../components/DashboardInvoiceCards";

export default function DashboardLayout() {
  return (
    <div>
      <Header />
      <Asidebar/>
      <DashboardInvoiceCard/>
      <Footer />
    </div>
  );
}
