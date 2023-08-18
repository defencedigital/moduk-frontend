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
      Users by role
    </TableCaption>
    <TableHead>
      <TableRow>
        <TableColumnHeader>Role</TableColumnHeader>
        <TableColumnHeader format='numeric'>Application A</TableColumnHeader>
        <TableColumnHeader format='numeric'>Application B</TableColumnHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableRowHeader>Developer</TableRowHeader>
        <TableCell format='numeric'>10</TableCell>
        <TableCell format='numeric'>25</TableCell>
      </TableRow>
      <TableRow>
        <TableRowHeader>User researcher</TableRowHeader>
        <TableCell format='numeric'>25</TableCell>
        <TableCell format='numeric'>10</TableCell>
      </TableRow>
      <TableRow>
        <TableRowHeader>Delivery manager</TableRowHeader>
        <TableCell format='numeric'>5</TableCell>
        <TableCell format='numeric'>10</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
