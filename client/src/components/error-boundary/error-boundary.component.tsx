import React, { ErrorInfo } from 'react';

interface ErrorBoundaryState {
   hasErrored: boolean;
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
   constructor(props: any) {
      super(props);

      this.state = {
         hasErrored: false,
      };
   }

   static getDerivedStateFromError(err: Error) {
      //process err
      return { hasErrored: true };
   }

   componentDidCatch(err: Error, errInfo: ErrorInfo) {
      console.log(err, errInfo);
   }

   render() {
      return this.state.hasErrored ? (
         <div>Something went wrong</div>
      ) : (
         this.props.children
      );
   }
}

export default ErrorBoundary;
