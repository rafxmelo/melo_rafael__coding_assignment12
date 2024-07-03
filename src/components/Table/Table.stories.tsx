import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';
import { TableProps } from './Table.types';


export default {
  title: 'Components/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => (
  <Table {...args}>
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

export const Default = Template.bind({});
Default.args = {};
