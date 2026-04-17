// Vercel Speed Insights initialization
// This script imports and initializes Vercel Speed Insights for performance tracking

import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2/+esm';

// Initialize Speed Insights
// The script automatically tracks Core Web Vitals and performance metrics
injectSpeedInsights();
