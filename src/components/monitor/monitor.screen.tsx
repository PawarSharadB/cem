import React from 'react';
import { locales } from '../../locales';

export type MonitorScreenProps = {};

const MonitorScreen: React.FC<MonitorScreenProps> = ({}) => {
  return (
    <div>
      <div className='subTitle'>{locales.monitorTitle}</div>
    </div>
  );
};

export default MonitorScreen;
