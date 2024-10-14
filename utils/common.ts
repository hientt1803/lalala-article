export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;


// *************************** STRING ****************************
export function convertToTitleCase(input: string): string {
    return input
      .split("_")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1)
          : word.toLowerCase()
      )
      .join(" ");
  }