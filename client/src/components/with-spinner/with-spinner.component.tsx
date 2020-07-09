import React from 'react';

import Spinner from '../spinner/spinner.component';

type WithSpinnerProps = { isLoading: boolean };

const WithSpinner = (WrappedComponent: React.ComponentType<any>) => ({
   isLoading,
   ...otherProps
}: WithSpinnerProps) => {
   return isLoading ? (
      <Spinner />
   ) : (
      <WrappedComponent {...otherProps} />
   );
};

export default WithSpinner;
