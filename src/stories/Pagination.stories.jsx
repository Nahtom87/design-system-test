import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=133-10928';

export default {
  title: 'Design System/Pagination',
  component: Pagination,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Aktiv side',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Antal sider i alt',
    },
  },
  args: {
    currentPage: 2,
    totalPages: 8,
  },
};

function buildPageWindow(currentPage, totalPages) {
  const delta = 1;
  const pages = [];
  const rangeStart = Math.max(2, currentPage - delta);
  const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

  pages.push(1);

  if (rangeStart > 2) pages.push('ellipsis-start');

  for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);

  if (rangeEnd < totalPages - 1) pages.push('ellipsis-end');

  if (totalPages > 1) pages.push(totalPages);

  return pages;
}

export const Playground = {
  render: ({ currentPage, totalPages }) => {
    const pages = buildPageWindow(currentPage, totalPages);
    const isFirst = currentPage <= 1;
    const isLast = currentPage >= totalPages;

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" aria-disabled={isFirst} style={isFirst ? { opacity: 0.4, pointerEvents: 'none' } : undefined} />
          </PaginationItem>
          {pages.map((page, i) => {
            if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              return <PaginationItem key={page}><PaginationEllipsis /></PaginationItem>;
            }
            return (
              <PaginationItem key={page}>
                <PaginationLink href="#" isActive={page === currentPage}>{page}</PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext href="#" aria-disabled={isLast} style={isLast ? { opacity: 0.4, pointerEvents: 'none' } : undefined} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const Default = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">8</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const FørsteSide = {
  name: 'Første side',
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" style={{ opacity: 0.4, pointerEvents: 'none' }} />
        </PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const SidsteSide = {
  name: 'Sidste side',
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">8</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">9</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>10</PaginationLink></PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" style={{ opacity: 0.4, pointerEvents: 'none' }} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
