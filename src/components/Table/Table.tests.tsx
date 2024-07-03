import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';
import '@testing-library/jest-dom/extend-expect';

test('renders the table', () => {
  render(
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Header 1</TableHeader>
          <TableHeader>Header 2</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
  const headerElement = screen.getByText(/Header 1/i);
  expect(headerElement).toBeVisible();
});
