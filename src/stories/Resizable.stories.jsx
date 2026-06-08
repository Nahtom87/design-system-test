import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=222-27675';

export default {
  title: 'Design System/Resizable',
  component: ResizablePanelGroup,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

const PanelContent = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '14px', color: '#737373', fontFamily: "'IBM Plex Sans', sans-serif" }}>
    {children}
  </div>
);

export const Horisontal = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" style={{ height: '200px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <ResizablePanel defaultSize={50}>
        <PanelContent>Venstre panel</PanelContent>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <PanelContent>Højre panel</PanelContent>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertikal = {
  render: () => (
    <ResizablePanelGroup direction="vertical" style={{ height: '300px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <ResizablePanel defaultSize={50}>
        <PanelContent>Øverste panel</PanelContent>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <PanelContent>Nederste panel</PanelContent>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const TrePaneler = {
  name: 'Tre paneler',
  render: () => (
    <ResizablePanelGroup direction="horizontal" style={{ height: '200px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <ResizablePanel defaultSize={25}>
        <PanelContent>Navigation</PanelContent>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <PanelContent>Indhold</PanelContent>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25}>
        <PanelContent>Detaljer</PanelContent>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
