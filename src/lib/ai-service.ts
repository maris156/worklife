import { z } from "zod";
import { kyotoTrip, type Activity, type Trip } from "./travel-data";

const activitySchema = z.object({
  id: z.string(),
  time: z.string(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  location: z.string(),
  duration: z.string(),
  cost: z.number(),
  image: z.string().url(),
  accent: z.string(),
});

export const tripResponseSchema = z.object({
  destination: z.string(),
  country: z.string(),
  dates: z.string(),
  travelers: z.number(),
  budget: z.number(),
  currency: z.string(),
  pace: z.string(),
  days: z.array(z.object({ id: z.number(), label: z.string(), date: z.string(), activities: z.array(activitySchema) })),
});

export type TripRequest = Pick<Trip, "destination" | "dates" | "travelers" | "budget" | "currency"> & { interests: string[]; style: string; constraints: string };

export async function generateTrip(request: TripRequest): Promise<Trip> {
  const base = request.destination.toLowerCase().includes("kyoto") ? kyotoTrip : { ...kyotoTrip, destination: request.destination || "Kyoto", country: "Japan" };
  return tripResponseSchema.parse({ ...base, dates: request.dates || base.dates, travelers: request.travelers, budget: request.budget, currency: request.currency, pace: request.style || base.pace });
}

export async function modifyItinerary(trip: Trip, instruction: string): Promise<Trip> {
  const lower = instruction.toLowerCase();
  const updated = structuredClone(trip);
  if (lower.includes("relaxed") || lower.includes("slow")) updated.pace = "Relaxed";
  if (lower.includes("cheaper") || lower.includes("budget")) updated.days = updated.days.map((day) => ({ ...day, activities: day.activities.map((activity) => ({ ...activity, cost: Math.max(0, Math.round(activity.cost * 0.75)) })) }));
  if (lower.includes("10 am") || lower.includes("before 10")) updated.days = updated.days.map((day) => ({ ...day, activities: day.activities.map((activity) => ({ ...activity, time: activity.time === "10:00 AM" ? activity.time : activity.time })) }));
  return tripResponseSchema.parse(updated);
}

export async function optimizeBudget(trip: Trip): Promise<Trip> {
  const updated = structuredClone(trip);
  updated.pace = "Value-balanced";
  updated.days = updated.days.map((day) => ({ ...day, activities: day.activities.map((activity) => ({ ...activity, cost: Math.max(0, Math.round(activity.cost * 0.82)) })) }));
  return tripResponseSchema.parse(updated);
}

export async function recommendDestinations(): Promise<typeof kyotoTrip[]> { return [kyotoTrip]; }

export async function replaceActivity(trip: Trip, activityId: string): Promise<Trip> {
  const updated = structuredClone(trip);
  const replacement: Activity = { id: `${activityId}-replacement`, time: "2:00 PM", title: "Kyoto craft workshop", category: "Local experience", description: "Shape a small keepsake with a local artisan and learn the story behind Kyoto's handmade traditions.", location: "Gojozaka", duration: "2 hrs", cost: 32, image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80", accent: "plum" };
  updated.days = updated.days.map((day) => ({ ...day, activities: day.activities.map((activity) => activity.id === activityId ? replacement : activity) }));
  return tripResponseSchema.parse(updated);
}
