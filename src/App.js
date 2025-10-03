import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { InputField } from './components/InputField/InputField';
import { DataTable } from './components/DataTable/DataTable';
const initialData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'London' },
    { name: 'Bob', age: 40, city: 'Paris' },
    { name: 'Emma', age: 35, city: 'Berlin' },
];
const columns = [
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
    { key: 'city', title: 'City', dataIndex: 'city' },
];
const App = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(initialData);
    const [selectedRows, setSelectedRows] = useState([]);
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        const filtered = initialData.filter(user => user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.city.toLowerCase().includes(value.toLowerCase()));
        setData(filtered);
    };
    return (_jsxs("div", { className: "p-8 space-y-8", children: [_jsx("h1", { className: "text-2xl font-bold", children: "React Assignment Demo" }), _jsx("div", { className: "max-w-md", children: _jsx(InputField, { label: "Search Users", placeholder: "Type name or city...", value: search, onChange: handleSearchChange, showClearButton: true }) }), _jsx(DataTable, { columns: columns, data: data, selectable: true, onRowSelect: setSelectedRows }), selectedRows.length > 0 && (_jsxs("div", { className: "mt-4 p-4 border rounded bg-blue-50", children: [_jsx("strong", { children: "Selected Users:" }), _jsx("ul", { className: "list-disc ml-5", children: selectedRows.map((user, index) => (_jsxs("li", { children: [user.name, " (", user.city, ")"] }, index))) })] }))] }));
};
export default App;
