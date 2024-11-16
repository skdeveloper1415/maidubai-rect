import jsPDF from 'jspdf';
import * as React from 'react';
import autoTable from "jspdf-autotable";
import { useState } from 'react';
import { applyPlugin } from 'jspdf-autotable'
applyPlugin(jsPDF)


const PdfDownloader = (props) => {


    const { isDetailedExport, title } = props
    const [array, setArray] = useState([]);
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        // const doc = new jsPDF(orientation, unit, size);

        // doc.setFontSize(15);

        // const title = title||'';

        const data = props.data;
        // doc.text(title, marginLeft, 20);
        // console.log("data values", data)

        if (data && data[0] && Array.isArray(data[0])) {

            data.forEach((item, index) => {
                var header_column = Object.keys(Object.assign({}, ...item));
                var columns = []
                let columnconfig = {}
                header_column.map(col => {
                    columnconfig = {
                        title: col,
                        dataKey: col
                    }
                    columns.push(columnconfig)
                })
                var rows = item
                var imgData = 'data:image/png;base64,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';

                var doc = new jsPDF();
                doc.autoTable(columns, rows, {
                    // Table animations
                    headStyles: { fillColor: "#019049" },
                    alternateRowStyles: { fillColor: "#e2fff1" },
                    tableLineColor: "#019049",
                    tableLineWidth: 0.1,
                    margin: { top: 20 },
                    styles: {
                        fontSize: 6,
                    },
                    theme: "grid",
                    showHead: "everyPage",
                    didDrawPage: function (data) {
                        doc.addImage(imgData, 'JPEG', 14, 5, 33, 10);
                        // Header

                        doc.setFontSize(8);
                        doc.setTextColor('black');
                        doc.addFont('ArialMS', 'Arial', 'normal');
                        doc.setFont('Arial');
                        doc.text(title, 90, 18, { halign: 'center' });

                        // Footer
                        var str = "Page " + doc.internal.getNumberOfPages();

                        doc.setFontSize(8);

                        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
                        var pageSize = doc.internal.pageSize;
                        var pageHeight = pageSize.height
                            ? pageSize.height
                            : pageSize.getHeight();
                        doc.text(str, data.settings.margin.left, pageHeight - 10);
                    }

                });

                doc.save('Report.pdf');
            })
        }
        else {
            var header_column = Object.keys(Object.assign({}, ...data));
            var columns = []
            let columnconfig = {}
            header_column.map(item => {
                columnconfig = {
                    title: item,
                    dataKey: item
                }
                columns.push(columnconfig)

            })
            var rows = data
            var imgData = 'data:image/png;base64,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';

            var doc = new jsPDF();

            // console.log('doc is: ', doc)

            doc.autoTable(columns, rows, {
                // Table animations
                headStyles: { fillColor: "#019049" },
                alternateRowStyles: { fillColor: "#e2fff1" },
                tableLineColor: "#019049",
                tableLineWidth: 0.1,
                margin: { top: 20 },
                styles: {
                    fontSize: 7,
                },
                theme: "grid",
                showHead: "everyPage",
                didDrawPage: function (data) {
                    doc.addImage(imgData, 'JPEG', 14, 3, 33, 10);
                    // Header

                    doc.setFontSize(11);
                    doc.setTextColor('black');
                    doc.addFont('ArialMS', 'Arial', 'normal');
                    doc.setFont('Arial');
                    // doc.text(title, 14, 18);

                    // Footer
                    var str = "Page " + doc.internal.getNumberOfPages();

                    doc.setFontSize(8);

                    // jsPDF 1.4+ uses getWidth, <1.4 uses .width
                    var pageSize = doc.internal.pageSize;
                    var pageHeight = pageSize.height
                        ? pageSize.height
                        : pageSize.getHeight();
                    doc.text(str, data.settings.margin.left, pageHeight - 10);
                }

            });


            doc.save('Report.pdf');
        }
    }

    return (
        <>
            <h6 className='pdf' onClick={exportPDF}>Export as Pdf</h6>
        </>
    )
}

export default PdfDownloader