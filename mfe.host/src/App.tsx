import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const AssistantApp = lazy(() => import("mfeAssistant/assistantApp"));

const App = () => {
  return (
    <ErrorBoundary>
      <div style={{ height: "100vh" }}>
        <div style={{ flex: "0 0 10%" }}>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <AssistantApp />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div style={{ display: "flex", height: "90%" }}>
          <div
            style={{
              flex: "1 1 33%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: "2 1 67%", border: "4px solid gold" }}>
              <p style={{ textAlign: "center" }}>
                [mfe.client-context placeholder]
              </p>
            </div>
            <div style={{ flex: "1 1 33%", border: "4px solid olivedrab" }}>
              <p style={{ textAlign: "center" }}>[mfe.cart placeholder]</p>
            </div>
          </div>
          <div style={{ flex: "2 1 67%", border: "4px solid dodgerblue" }}>
            <p style={{ textAlign: "center" }}>[mfe.products placeholder]</p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

console.log("mfe.a-context");
export default App;


