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
    <TableCaption className='govuk-table__caption--m'>
      Active users by role
    </TableCaption>
    <TableHead>
      <TableRow>
        <TableColumnHeader className='govuk-!-width-one-half'>Role</TableColumnHeader>
        <TableColumnHeader className='govuk-!-width-one-quarter'>Application A</TableColumnHeader>
        <TableColumnHeader className='govuk-!-width-one-quarter'>Application B</TableColumnHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableRowHeader>Developer</TableRowHeader>
        <TableCell>10 per day</TableCell>
        <TableCell>25 per day</TableCell>
      </TableRow>
      <TableRow>
        <TableRowHeader>User researcher</TableRowHeader>
        <TableCell>25 per day</TableCell>
        <TableCell>10 per day</TableCell>
      </TableRow>
      <TableRow>
        <TableRowHeader>Delivery manager</TableRowHeader>
        <TableCell>5 per day</TableCell>
        <TableCell>10 per day</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
