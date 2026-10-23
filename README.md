# CodeFlex AI

CodeFlex AI is a fitness web app that creates personalized workout and meal plans through a voice conversation with an AI assistant.

Users share their fitness goals, experience, available workout days, dietary preferences, and physical limitations. The app uses these details to generate a plan and saves it to their profile.

## How it works

1. **Sign in** or create an account with Clerk.
2. **Start a voice conversation** with the Vapi assistant and answer questions about your goals and needs.
3. **Generate your plan.** Vapi sends the collected information to the Convex backend, where Google Gemini creates the workout and meal plans.
4. **Save the results.** The backend validates the generated data and stores it in Convex. Previous plans are kept, and the new plan becomes active.
5. **View your profile** to browse saved plans, see exercises with sets and reps, and check meals and daily calorie targets.

## Tech stack

| Technology | Purpose |
| --- | --- |
| Next.js, React, and TypeScript | App pages, components, and application logic |
| Tailwind CSS and shadcn/ui | Styling and reusable UI components |
| Clerk | Sign-up, sign-in, and user authentication |
| Vapi | Voice conversations with the AI assistant |
| Google Gemini | Workout and meal plan generation |
| Convex | Backend functions, database, and live updates to saved plans |
| Lucide React and Phosphor Icons | Interface icons |
