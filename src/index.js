import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './output.css';
import * as Sentry from "@sentry/react";
Sentry.init({
    dsn: "https://3d67876978aff17f5ca491423bf94173@o4506696871575552.ingest.us.sentry.io/4506696873410560",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/erb-think.com/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

