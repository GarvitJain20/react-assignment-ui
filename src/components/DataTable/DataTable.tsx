/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export const DataTable = <T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  const handleRowSelect = (row: T) => {
    let newSelectedRows: T[];
    if (selectedRows.includes(row)) {
      newSelectedRows = selectedRows.filter(r => r !== row);
    } else {
      newSelectedRows = selectable ? [...selectedRows, row] : [row];
    }
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === column.dataIndex && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: column.dataIndex, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      return 0;
    });
  }, [data, sortConfig]);

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="p-4 text-center text-gray-500">No data available</div>;
  }

  return (
    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="px-4 py-2"></th>}
          {columns.map(column => (
            <th
              key={column.key}
              className={`px-4 py-2 text-left cursor-pointer ${column.sortable ? 'hover:underline' : ''}`}
              onClick={() => handleSort(column)}
            >
              {column.title}
              {sortConfig?.key === column.dataIndex && (
                <span>{sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {sortedData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${selectedRows.includes(row) ? 'bg-blue-100' : ''} hover:bg-gray-50 cursor-pointer`}
            onClick={() => selectable && handleRowSelect(row)}
          >
            {selectable && (
              <td className="px-4 py-2">
                <input type="checkbox" checked={selectedRows.includes(row)} readOnly />
              </td>
            )}
            {columns.map(column => (
              <td key={column.key} className="px-4 py-2">
                {row[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
