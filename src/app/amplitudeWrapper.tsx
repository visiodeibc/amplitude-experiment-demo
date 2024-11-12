"use client";
import React from "react";
import { useEffect, createContext, type ReactNode } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import { Experiment } from "@amplitude/experiment-js-client";

// Please replace "your-deployment-key" with the actual deployment key provided by Amplitude.
// Please replace "project-api-key" with the actual api key provided by Amplitude.

// (1) Initialize the experiment client with Amplitude Analytics.
export const experiment = Experiment.initializeWithAmplitudeAnalytics(
  "your-deployment-key"
);

// export const experiment = Experiment.initialize(
//   "your-deployment-key"
// );

export const AmplitudeContext = createContext({});

interface AmplitudeContextProviderProps {
  children: ReactNode;
}

const AmplitudeContextProvider = ({
  children,
}: AmplitudeContextProviderProps) => {
  useEffect(() => {
    async function init() {
      const random = Math.random() > 0.5;
      const winner = random ? "bear@amplitude.com" : "rabbit@amplitude.com";

      amplitude.init("project-api-key", winner, {
        defaultTracking: true,
        autocapture: { elementInteractions: true },
      });

      // 1. initializeWithAmplitudeAnalytics
      await experiment.start();

      // //2. without initializeWithAmplitudeAnalytics
      // const user = {
      //   user_id: winner,
      //   device_id: "DEVICE-ID",
      //   user_properties: {
      //     custom: "value",
      //   },
      // };
      // await experiment.fetch(user);

      console.log("🔥", experiment);
    }
    init();
  }, []);
  const trackAmplitudeEvent = (
    eventName: string,
    eventProperties: Record<string, unknown>
  ) => amplitude.track(eventName, eventProperties);

  const value = { trackAmplitudeEvent };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
