import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

export type ILoaderScreenProps = {};

const LoaderScreen: React.FC<ILoaderScreenProps> = ({}) => {
  return (
    <div>
      <Pane
        display='flex'
        alignItems='center'
        justifyContent='center'
        height={400}
      >
        <Spinner />
      </Pane>
    </div>
  );
};

export default LoaderScreen;
