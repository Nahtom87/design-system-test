import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=164-18405';

const data = [
  { id: 'INV-001', navn: 'Anna Moth',    status: 'Aktiv',    beløb: '1.250 kr.' },
  { id: 'INV-002', navn: 'Lars Jensen',  status: 'Afventer', beløb: '850 kr.'   },
  { id: 'INV-003', navn: 'Sara Nielsen', status: 'Aktiv',    beløb: '4.200 kr.' },
  { id: 'INV-004', navn: 'Mads Olsen',   status: 'Inaktiv',  beløb: '320 kr.'   },
];

const statusVariant = { Aktiv: 'primary', Afventer: 'secondary', Inaktiv: 'outline' };

export default {
  title: 'Design System/Table',
  component: Table,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    showCaption: { control: 'boolean', description: 'Vis tabel-undertekst' },
    striped:     { control: 'boolean', description: 'Skiftende rækkefarver (via className)' },
  },
  args: {
    showCaption: true,
    striped: false,
  },
};

export const Playground = {
  render: ({ showCaption, striped }) => (
    <Table>
      {showCaption && <TableCaption>Oversigt over brugere</TableCaption>}
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
          <TableRow key={row.id} className={striped ? 'even:bg-muted/50' : undefined}>
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

const medarbejdere = [
  { navn: 'Anna Moth',    afdeling: 'Design',        rolle: 'Senior Designer',    status: 'Aktiv' },
  { navn: 'Lars Jensen',  afdeling: 'Udvikling',     rolle: 'Frontend Developer', status: 'Aktiv' },
  { navn: 'Sara Nielsen', afdeling: 'Borgerservice', rolle: 'Sagsbehandler',      status: 'Afventer' },
  { navn: 'Mads Olsen',   afdeling: 'Økonomi',       rolle: 'Controller',         status: 'Inaktiv' },
  { navn: 'Lise Poulsen', afdeling: 'HR',            rolle: 'HR-koordinator',     status: 'Aktiv' },
];

export const Default = {
  name: 'Medarbejderoversigt',
  render: () => (
    <Table>
      <TableCaption>Medarbejderoversigt</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Navn</TableHead>
          <TableHead>Afdeling</TableHead>
          <TableHead>Rolle</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {medarbejdere.map((row) => (
          <TableRow key={row.navn}>
            <TableCell>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Avatar size="extra-tiny" roundness="round">
                  <AvatarFallback size="extra-tiny">
                    {row.navn.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {row.navn}
              </div>
            </TableCell>
            <TableCell>{row.afdeling}</TableCell>
            <TableCell>{row.rolle}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const TomTabel = {
  name: 'Tom tabel',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Navn</TableHead>
          <TableHead>Status</TableHead>
          <TableHead style={{ textAlign: 'right' }}>Beløb</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: 'center', color: '#737373', padding: '32px 8px' }}>
            Ingen data fundet
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
