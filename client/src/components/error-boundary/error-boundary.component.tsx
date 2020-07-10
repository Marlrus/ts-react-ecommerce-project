import React, { ErrorInfo } from 'react';

import {
   ErrorImageContainer,
   ErrorImageOverlay,
   ErrorImageText,
} from './error-boundary.styles';

interface ErrorBoundaryState {
   hasErrored: boolean;
   errMessage?: string;
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
      return { hasErrored: true, errMessage: err.message };
   }

   componentDidCatch(err: Error, errInfo: ErrorInfo) {
      console.log(err, errInfo);
   }

   render() {
      const { errMessage } = this.state;
      return this.state.hasErrored ? (
         <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
            <ErrorImageText>
               Sorry, something went wrong with the page uWu.
               <br />
               {errMessage ? <span>Error: {errMessage}</span> : null}
            </ErrorImageText>
         </ErrorImageOverlay>
      ) : (
         this.props.children
      );
   }
}

export default ErrorBoundary;
