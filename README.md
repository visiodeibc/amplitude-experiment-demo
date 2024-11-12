This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Setup

To set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Setting Up Amplitude

This project uses Amplitude for analytics and experiments. Follow these steps to configure Amplitude:

### Project API Key

- **Purpose**: Used to initialize the Amplitude Analytics SDK, allowing it to send data to the correct project.
- **Configuration**: Replace `"project-api-key"` in the `amplitudeWrapper.tsx` file with your actual API key from the Amplitude project settings.
  ```typescript
  amplitude.init("project-api-key", winner, {
    defaultTracking: true,
    autocapture: { elementInteractions: true },
  });
  ```

### Deployment Key

- **Purpose**: Used to initialize the Amplitude Experiment SDK, managing feature flags and experiment variants.
- **Configuration**: Replace `"your-deployment-key"` in the `amplitudeWrapper.tsx` file with the actual deployment key provided by Amplitude.
  ```typescript
  export const experiment = Experiment.initializeWithAmplitudeAnalytics(
    "your-deployment-key"
  );
  ```

## Setting Up Experiments

1. **Initialize Amplitude Analytics**: Ensure that Amplitude Analytics is initialized in your application as described above.

2. **Define Experiment Variants**: In your application, define and use experiment variants. For example, in `game.tsx`:

   ```typescript
   const handleButtonClick = () => {
     setImageSrc(
       `/${experiment.variant("your-experiment-feature-flag")?.value}.png`
     );
   };
   ```

3. **Start the Experiment**: Ensure the experiment is started in the `AmplitudeContextProvider`:

   ```typescript
   useEffect(() => {
     async function init() {
       await experiment.start();
     }
     init();
   }, []);
   ```

4. **Track Events**: Use the `trackAmplitudeEvent` function to track events:

   ```typescript
   const trackAmplitudeEvent = (
     eventName: string,
     eventProperties: Record<string, unknown>
   ) => amplitude.track(eventName, eventProperties);
   ```

5. **Configure Variants**: Configure your experiment variants in the Amplitude dashboard to control which variant is shown to users.

In experiment configuration assigne bear@amplitude.com" : "rabbit@amplitude.com" each to tester of control and variant.
everytime you refresh the data it will randomly assign to either one of them according to logic in `amplitudeWrapper.tsx`

>       const random = Math.random() > 0.5;

      const winner = random ? "bear@amplitude.com" : "rabbit@amplitude.com";

## Learn More

To learn more about setting up and using Amplitude Experiment, refer to the [Amplitude Experiment Documentation](https://www.docs.amplitude.com/experiment).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# experiment-test
