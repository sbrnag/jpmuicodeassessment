import React from 'react';
import { render, screen } from '@testing-library/react';
import FITable from './FITable';
import { tableData } from '../data/data';

test('renders table', () => {
  render(<FITable data={tableData}/>);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});