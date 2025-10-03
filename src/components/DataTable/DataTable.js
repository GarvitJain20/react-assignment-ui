import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
export const DataTable = ({ data, columns, loading = false, selectable = false, onRowSelect, }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);
    const handleRowSelect = (row) => {
        let newSelectedRows;
        if (selectedRows.includes(row)) {
            newSelectedRows = selectedRows.filter(r => r !== row);
        }
        else {
            newSelectedRows = selectable ? [...selectedRows, row] : [row];
        }
        setSelectedRows(newSelectedRows);
        onRowSelect?.(newSelectedRows);
    };
    const handleSort = (column) => {
        if (!column.sortable)
            return;
        let direction = 'asc';
        if (sortConfig?.key === column.dataIndex && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: column.dataIndex, direction });
    };
    const sortedData = React.useMemo(() => {
        if (!sortConfig)
            return data;
        const { key, direction } = sortConfig;
        return [...data].sort((a, b) => {
            if (a[key] > b[key])
                return direction === 'asc' ? 1 : -1;
            if (a[key] < b[key])
                return direction === 'asc' ? -1 : 1;
            return 0;
        });
    }, [data, sortConfig]);
    if (loading) {
        return _jsx("div", { className: "p-4 text-center text-gray-500", children: "Loading..." });
    }
    if (data.length === 0) {
        return _jsx("div", { className: "p-4 text-center text-gray-500", children: "No data available" });
    }
    return (_jsxs("table", { className: "min-w-full border border-gray-300 divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [selectable && _jsx("th", { className: "px-4 py-2" }), columns.map(column => (_jsxs("th", { className: `px-4 py-2 text-left cursor-pointer ${column.sortable ? 'hover:underline' : ''}`, onClick: () => handleSort(column), children: [column.title, sortConfig?.key === column.dataIndex && (_jsx("span", { children: sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽' }))] }, column.key)))] }) }), _jsx("tbody", { className: "divide-y divide-gray-200", children: sortedData.map((row, rowIndex) => (_jsxs("tr", { className: `${selectedRows.includes(row) ? 'bg-blue-100' : ''} hover:bg-gray-50 cursor-pointer`, onClick: () => selectable && handleRowSelect(row), children: [selectable && (_jsx("td", { className: "px-4 py-2", children: _jsx("input", { type: "checkbox", checked: selectedRows.includes(row), readOnly: true }) })), columns.map(column => (_jsx("td", { className: "px-4 py-2", children: row[column.dataIndex] }, column.key)))] }, rowIndex))) })] }));
};
