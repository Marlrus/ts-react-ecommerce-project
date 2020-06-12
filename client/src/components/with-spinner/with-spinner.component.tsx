import React from 'react';

import {
   SpinnerContainer,
   SpinnerOverlay,
} from './with-spinner.styles';

type WithSpinnerProps = { isLoading: boolean };

const WithSpinner = (WrappedComponent: React.ComponentType<any>) => ({
   isLoading,
   ...otherProps
}: WithSpinnerProps) => {
   return isLoading ? (
      <SpinnerOverlay>
         <SpinnerContainer />
      </SpinnerOverlay>
   ) : (
      <WrappedComponent {...otherProps} />
   );
};

export default WithSpinner;
