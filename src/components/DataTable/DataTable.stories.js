import { DataTable } from './DataTable';
const columns = [
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
    { key: 'city', title: 'City', dataIndex: 'city' },
];
const meta = {
    title: 'Components/DataTable',
    component: DataTable,
};
export default meta;
export const Default = {
    args: {
        columns,
        data: [
            { name: 'John', age: 30, city: 'New York' },
            { name: 'Alice', age: 25, city: 'London' },
            { name: 'Bob', age: 40, city: 'Paris' },
        ],
    },
};
export const Selectable = {
    args: {
        columns,
        data: [
            { name: 'John', age: 30, city: 'New York' },
            { name: 'Alice', age: 25, city: 'London' },
            { name: 'Bob', age: 40, city: 'Paris' },
        ],
        selectable: true,
    },
};
export const Loading = {
    args: {
        columns,
        data: [],
        loading: true,
    },
};
export const Empty = {
    args: {
        columns,
        data: [],
    },
};
