import React from "react";
import Breadcrum from "./Breadcrum";
import { PieChart, Pie, Label, } from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Group A', value: 400, fill: '#bfe2ff' },
  { name: 'Group B', value: 300, fill: '#00abaa' },
];

// #endregion
const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

export default function Header() {
    return (
        <main>
            <div className="container-fluid">
                <Breadcrum />
                <h5 className="border-bottom pb-2">Advertiser Invoices</h5>
                <section className="row g-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="invoice-card border rounded p-2">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <div>
                                    <span>Total <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                    <h6 className="fw-bold mb-0">$2500.00</h6>
                                </div>
                                <span className="bg-danger-subtle p-2 rounded text-danger fw-bold">
                                    -9,746.77%
                                </span>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '50%',
                                    }}
                                    >
                                    <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
                                        <MyPie />
                                        <Label position="center" fill="#000" style={{fontSize:'20px'}}>
                                        GBP
                                        </Label>
                                        {/* <RechartsDevtools /> */}
                                    </PieChart>
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Piad <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-danger-subtle p-2 rounded text-danger fw-bold w-100 text-center">
                                            -9,746.77%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Unpaid <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-success-subtle p-2 rounded text-success fw-bold w-100 text-center">
                                            9,746.77%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Bad Debt <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-secondary-subtle p-2 rounded text-secondary fw-bold w-100 text-center">
                                            NA
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="invoice-card border rounded p-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span>Total <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                    <h6 className="fw-bold mb-0">$2500.00</h6>
                                </div>
                                <span className="bg-danger-subtle p-2 rounded text-danger fw-bold">
                                    -9,746.77%
                                </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '50%',
                                    }}
                                    >
                                    <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
                                        <MyPie />
                                        <Label position="center" fill="#000" style={{fontSize:'20px'}}>
                                        GBP
                                        </Label>
                                        {/* <RechartsDevtools /> */}
                                    </PieChart>
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Piad <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-danger-subtle p-2 rounded text-danger fw-bold w-100 text-center">
                                            -9,746.77%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Unpaid <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-success-subtle p-2 rounded text-success fw-bold w-100 text-center">
                                            9,746.77%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Bad Debt <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-secondary-subtle p-2 rounded text-secondary fw-bold w-100 text-center">
                                            NA
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="invoice-card border rounded p-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span>Total <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                    <h6 className="fw-bold mb-0">$2500.00</h6>
                                </div>
                                <span className="bg-danger-subtle p-2 rounded text-danger fw-bold">
                                    -9,746.77%
                                </span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '50%',
                                    }}
                                    >
                                    <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
                                        <MyPie />
                                        <Label position="center" fill="#000" style={{fontSize:'20px'}}>
                                        GBP
                                        </Label>
                                        {/* <RechartsDevtools /> */}
                                    </PieChart>
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Piad <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-danger-subtle p-2 rounded text-danger fw-bold w-100 text-center">
                                            -9,746.77%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Unpaid <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-success-subtle p-2 rounded text-success fw-bold w-100 text-center">
                                            9,746.77%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center gap-5">
                                        <div>
                                            <span>Bad Debt <a href="" className="text-warning"><i className="bi bi-box-arrow-up-right ms-1"></i></a></span>
                                            <h6 className="fw-bold mb-0">$2500.00</h6>
                                        </div>
                                        <span className="bg-secondary-subtle p-2 rounded text-secondary fw-bold w-100 text-center">
                                            NA
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}