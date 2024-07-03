import React from 'react';
import styled from 'styled-components';
import { TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableFooterProps } from './Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
  background-color: #f1f1f1;
  padding: 8px;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const StyledTableCell = styled.td`
  padding: 8px;
`;

const StyledTableFooter = styled.tfoot`
  background-color: #f1f1f1;
`;

const Table: React.FC<TableProps> = ({ children }) => <StyledTable>{children}</StyledTable>;
const TableHeader: React.FC<TableHeaderProps> = ({ children }) => <StyledTableHeader>{children}</StyledTableHeader>;
const TableRow: React.FC<TableRowProps> = ({ children }) => <StyledTableRow>{children}</StyledTableRow>;
const TableCell: React.FC<TableCellProps> = ({ children }) => <StyledTableCell>{children}</StyledTableCell>;
const TableFooter: React.FC<TableFooterProps> = ({ children }) => <StyledTableFooter>{children}</StyledTableFooter>;

export { Table, TableHeader, TableRow, TableCell, TableFooter };
