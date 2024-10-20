import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const formatDate = (date: Date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString();
    return `${month} ${year}`; // Add a space here
  };

  const start = formatDate(startDate);
  let end;

  if (endDate) {
    if (typeof endDate === "string") {
      end = endDate;
    } else {
      end = formatDate(endDate);
    }
  } else {
    end = "Present";
  }

  return `${start} - ${end}`;
}
