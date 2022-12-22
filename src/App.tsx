import React from 'react';
import { Pane, Tablist, SidebarTab } from 'evergreen-ui';
// Components
import NavbarScreen from './components/navbar/Navbar.screen';
import { locales } from './locales';
import ControllerScreen from './components/controller/controller.screen';
import ExecutionScreen from './components/execution/execution.screen';
import MonitorScreen from './components/monitor/monitor.screen';

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [tabs] = React.useState([
    { label: locales.controllerTitle, screen: <ControllerScreen /> },
    { label: locales.executionTitle, screen: <ExecutionScreen /> },
    { label: locales.monitorTitle, screen: <MonitorScreen /> },
  ]);

  return (
    <>
      <NavbarScreen />
      <Pane display='flex' height={240} marginLeft={16}>
        <Tablist marginBottom={20} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <SidebarTab
              key={tab.label}
              id={tab.label}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab}`}
            >
              {tab.label}
            </SidebarTab>
          ))}
        </Tablist>
        <Pane padding={16} flex='1' marginRight={16}>
          {tabs.map((tab, index) => (
            <Pane
              key={tab.label}
              id={`panel-${tab.label}`}
              role='tabpanel'
              aria-labelledby={tab.label}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? 'block' : 'none'}
            >
              {tab.screen}
            </Pane>
          ))}
        </Pane>
      </Pane>
    </>
  );
}

export default App;
