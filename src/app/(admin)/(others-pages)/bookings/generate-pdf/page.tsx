"use client"

import html2pdf from "html2pdf.js"

export default function GeneratePDF() {

    const generatePDF = () => {
        const element = document.getElementById("pdf-content");
        if (!element) return;

        html2pdf().set({
            margin: 10,
            filename: "booking.pdf",
            html2canvas: {
                scale: 2,
                useCORS: true,

                onclone: (doc) => {
                    const elements = doc.querySelectorAll("*")

                    elements.forEach((el) => {
                        const style = doc.defaultView?.getComputedStyle(el)

                        if (!style) return

                        if (style.color.includes("oklch")) {
                            el.style.color = "rgb(0,0,0)"
                        }

                        if (style.backgroundColor.includes("oklch")) {
                            el.style.backgroundColor = "rgb(255,255,255)"
                        }

                        if (style.borderColor.includes("oklch")) {
                            el.style.borderColor = "rgb(200,200,200)"
                        }
                    })
                }
            },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        })
            .from(element)
            .save()
    }

    return (
        <div className="min-h-screen bg-neutral-100 p-8 flex flex-col items-center">
            <button
                onClick={generatePDF}
                className="mb-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
            >
                Download Receipt
            </button>

            <div id="pdf-content" className="bg-white text-black p-10 w-full max-w-3xl shadow-lg border border-neutral-200 mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start border-b border-neutral-200 pb-8 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-800 tracking-tight">RECEIPT</h1>
                        <p className="text-sm text-neutral-500 mt-1">Receipt #REC-1029384</p>
                    </div>
                    <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">RF-Travels</div>
                        <p className="text-sm text-neutral-500 mt-1">123 Travel Lane<br />Wanderlust City, WL 90210<br />contact@rftravels.com</p>
                    </div>
                </div>

                {/* Customer & Date Info */}
                <div className="flex justify-between mb-10">
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Billed To</h3>
                        <p className="font-medium text-neutral-800">John Doe</p>
                        <p className="text-sm text-neutral-600">john.doe@example.com</p>
                        <p className="text-sm text-neutral-600">+1 (555) 123-4567</p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Payment Details</h3>
                        <p className="text-sm text-neutral-600"><span className="font-medium">Date:</span> Oct 25, 2026</p>
                        <p className="text-sm text-neutral-600"><span className="font-medium">Method:</span> Credit Card ending in 4242</p>
                        <p className="text-sm text-neutral-600"><span className="font-medium">Status:</span> <span className="text-green-600 font-semibold">PAID</span></p>
                    </div>
                </div>

                {/* Table */}
                <div className="mb-8">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-neutral-200">
                                <th className="py-3 font-semibold text-neutral-700">Description</th>
                                <th className="py-3 font-semibold text-neutral-700 text-center">Qty</th>
                                <th className="py-3 font-semibold text-neutral-700 text-right">Unit Price</th>
                                <th className="py-3 font-semibold text-neutral-700 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-neutral-100">
                                <td className="py-4">
                                    <div className="font-medium text-neutral-800">Luxury Resort Stay - Maldives</div>
                                    <div className="text-sm text-neutral-500">5 Nights, Ocean View Villa</div>
                                </td>
                                <td className="py-4 text-center text-neutral-600">1</td>
                                <td className="py-4 text-right text-neutral-600">$1,200.00</td>
                                <td className="py-4 text-right font-medium text-neutral-800">$1,200.00</td>
                            </tr>
                            <tr className="border-b border-neutral-100">
                                <td className="py-4">
                                    <div className="font-medium text-neutral-800">Roundtrip Flights</div>
                                    <div className="text-sm text-neutral-500">Business Class (JFK - MLE)</div>
                                </td>
                                <td className="py-4 text-center text-neutral-600">2</td>
                                <td className="py-4 text-right text-neutral-600">$850.00</td>
                                <td className="py-4 text-right font-medium text-neutral-800">$1,700.00</td>
                            </tr>
                            <tr className="border-b border-neutral-100">
                                <td className="py-4">
                                    <div className="font-medium text-neutral-800">Airport Transfer</div>
                                    <div className="text-sm text-neutral-500">Private speedboat</div>
                                </td>
                                <td className="py-4 text-center text-neutral-600">1</td>
                                <td className="py-4 text-right text-neutral-600">$150.00</td>
                                <td className="py-4 text-right font-medium text-neutral-800">$150.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Summary */}
                <div className="flex justify-end mb-10">
                    <div className="w-1/2">
                        <div className="flex justify-between py-2 border-b border-neutral-100">
                            <span className="text-neutral-600">Subtotal</span>
                            <span className="font-medium text-neutral-800">$3,050.00</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-neutral-100">
                            <span className="text-neutral-600">Taxes & Fees (10%)</span>
                            <span className="font-medium text-neutral-800">$305.00</span>
                        </div>
                        <div className="flex justify-between py-3 border-b-2 border-neutral-800 mt-2">
                            <span className="font-bold text-neutral-800 text-lg">Total</span>
                            <span className="font-bold text-neutral-800 text-lg">$3,355.00</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-neutral-500 pt-8 border-t border-neutral-200">
                    <p>Thank you for booking with RF-Travels!</p>
                    <p className="mt-1">For questions regarding this receipt, contact us at contact@rftravels.com</p>
                </div>
            </div>
        </div>
    )
}