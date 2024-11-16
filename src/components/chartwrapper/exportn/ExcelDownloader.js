import * as React from 'react';
import * as XLSX from 'xlsx';

const ExcelDownloader = (props) => {

    const handleExport = () => {
        var ws = XLSX.utils.json_to_sheet(props?.data);
        ws['!cols'] = [];
        // ws['!cols'][0] = { hidden: true };
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'MySheet1');
        XLSX.writeFile(wb, 'mySheet.xlsx');
    }


    return (
        <>
            <h6 onClick={handleExport}>Export as Xlsx</h6>
        </>
    );
}

export default ExcelDownloader