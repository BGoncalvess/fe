import { ErrorInfo } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback/Fallback";

export type ErrorBoundaryProps = {
  children: React.ReactNode;
};

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const logError = (error: Error, info: ErrorInfo) => {
    console.log(error, info);
  };

  return (
    <ReactErrorBoundary FallbackComponent={Fallback} onError={logError}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
