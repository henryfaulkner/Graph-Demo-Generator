import { faker } from "@faker-js/faker";
import { pushJsonToFile } from "../helpers/push-json-to-file.func";
import {
  Point,
  ScatterDataSchema,
  ScatterDataset,
} from "../schemata/scatter/dataset-schema.type";

const fileName = "flagged-invoice-count";
const label = "Flagged Invoice Count";
const data: Point[] = [];

for (let i = 0; i < 50; i += 1) {
  const point: Point = {
    x: faker.number.int({ min: 0, max: 350 }),
    y: faker.number.int({ min: 0, max: 500 }),
  };
  data.push(point);
}

const dataset: ScatterDataset = {
  label,
  data,
};
const scatterData: ScatterDataSchema = { datasets: [dataset] };

pushJsonToFile(`./data/${fileName}.json`, scatterData);
