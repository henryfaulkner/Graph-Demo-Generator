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

// Y-Axis
const flagList = [
  "Remit To Missing/Wrong",
  "Customer Address Wrong/Missing",
  "Customer Aging Hold",
  "Invoice PDF does not match terms",
  "Invoice PDF does not match submitted Invoice Date, Number and/or Amount",
  "NeedCredit",
];

// X-Axis
const invList = [
  "inv1",
  "inv2",
  "inv4",
  "inv8",
  "inv16",
  "inv32",
  "inv64",
  "inv128",
  "inv256",
  "inv512",
];

for (let i = 0; i < 10; i += 1) {
  const point: Point = {
    x: invList[faker.number.int({ min: 0, max: invList.length - 1 })],
    y: flagList[faker.number.int({ min: 0, max: flagList.length - 1 })],
  };
  data.push(point);
}

const dataset: ScatterDataset = {
  label,
  data,
};
const scatterSchema: ScatterDataSchema = {
  xTitle: "Invoices",
  yTitle: "Flags",
  xLabels: invList,
  yLabels: flagList,
  datasets: [dataset],
};

pushJsonToFile(`./data/${fileName}.json`, scatterSchema);
