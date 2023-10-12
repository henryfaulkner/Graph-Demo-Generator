import * as fs from "fs";

export function pushJsonToFile(path: string, json: object): void {
  const jsonStr = JSON.stringify(json, null, 2);
  fs.writeFileSync(path, jsonStr);
}
