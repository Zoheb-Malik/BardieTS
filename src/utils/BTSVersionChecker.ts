import { version } from "../../package.json";

async function fetchLatestBardieTS() {
  try {
    const response = await fetch("https://registry.npmjs.org/bardie-ts");
    const data = await response.json();
    return data["dist-tags"].latest;
  } catch (error: any) {
    console.error("\x1b[33mUnable to compare the versions of bardie-ts. Please update the package by installing 'bardie-ts@latest' if you are not on the latest version.\x1b[0m", `\x1b[31m(Error: ${error.message})\n\x1b[0m`);
  }
}

export async function checkBardieTSVersion() {
  const latestVersion = await fetchLatestBardieTS();
  if (latestVersion && latestVersion !== version) {
    console.warn(`\x1b[33mYour version of bardie-ts (${version}) is outdated. Please update to the latest version (${latestVersion}) by installing 'bardie-ts@latest'.\x1b[0m`, "\n");
  }
}
