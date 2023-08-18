import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableColumnHeader,
  TableHead,
  TableRow,
  TableRowHeader,
} from '@moduk/frontend/react'

export const Example = () => (
  <Table>
    <TableCaption className='govuk-table__caption--l'>
      Dates and amounts
    </TableCaption>
    <TableHead>
      <TableRow>
        <TableColumnHeader>Date</TableColumnHeader>
        <TableColumnHeader>Amount</TableColumnHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableRowHeader>First 6 weeks</TableRowHeader>
        <TableCell>£109.80 per week</TableCell>
      </TableRow>
      <TableRow>
        <TableRowHeader>Next 33 weeks</TableRowHeader>
        <TableCell>£109.80 per week</TableCell>
      </TableRow>
      <TableRow>
        <TableRowHeader>Total estimated pay</TableRowHeader>
        <TableCell>£4,282.20</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
