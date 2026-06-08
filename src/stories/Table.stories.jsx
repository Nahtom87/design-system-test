import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=164-18405';

const data = [
  { id: 'INV-001', navn: 'Anna Moth',    status: 'Aktiv',     beløb: '1.250 kr.' },
  { id: 'INV-002', navn: 'Lars Jensen',  status: 'Afventer',  beløb: '850 kr.'   },
  { id: 'INV-003', navn: 'Sara Nielsen', status: 'Aktiv',     beløb: '4.200 kr.' },
  { id: 'INV-004', navn: 'Mads Olsen',   status: 'Inaktiv',   beløb: '320 kr.'   },
];

const statusVariant = { Aktiv: 'primary', Afventer: 'secondary', Inaktiv: 'outline' };

export default {
  title: 'Design System/Table',
  component: Table,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <Table>
      <TableCaption>Oversigt over brugere</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Navn</TableHead>
          <TableHead>Status</TableHead>
          <TableHead style={{ textAlign: 'right' }}>Beløb</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.navn}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
            </TableCell>
            <TableCell style={{ textAlign: 'right' }}>{row.beløb}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
