import React, { useState } from 'react';
import { InputField } from './components/InputField/InputField';
import { DataTable, Column } from './components/DataTable/DataTable';

interface User {
  name: string;
  age: number;
  city: string;
}

const initialData: User[] = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Alice', age: 25, city: 'London' },
  { name: 'Bob', age: 40, city: 'Paris' },
  { name: 'Emma', age: 35, city: 'Berlin' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'city', title: 'City', dataIndex: 'city' },
];

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<User[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = initialData.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()) ||
      user.city.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">React Assignment Demo</h1>

      {/* InputField Example */}
      <div className="max-w-md">
        <InputField
          label="Search Users"
          placeholder="Type name or city..."
          value={search}
          onChange={handleSearchChange}
          showClearButton
        />
      </div>

      {/* DataTable Example */}
      <DataTable
        columns={columns}
        data={data}
        selectable
        onRowSelect={setSelectedRows}
      />

      {/* Selected Rows Info */}
      {selectedRows.length > 0 && (
        <div className="mt-4 p-4 border rounded bg-blue-50">
          <strong>Selected Users:</strong>
          <ul className="list-disc ml-5">
            {selectedRows.map((user, index) => (
              <li key={index}>
                {user.name} ({user.city})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
