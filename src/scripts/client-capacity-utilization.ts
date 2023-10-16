import { faker } from "@faker-js/faker";
import { pushJsonToFile } from "../helpers/push-json-to-file.func";
import { truncFloat } from "../helpers/trunc-float.func";
import {
  StackedBarDataSchema,
  StackedBarDataset,
} from "../schemata/bar/stacked-bar/dataset-schema";

const fileName = "client-capacity-utilization";
const label = "Client Capacity Utilization";
const datasetStackSections: StackedBarDataset[] = [];

// X-Axis
// Client (single bar)
const clientName: string = faker.company.name();

// Y-Axis
// Generate customer sections
// Generated float amount
for (let i = 0; i < 6; i += 1) {
  const label = faker.company.name();
  const data = [truncFloat(faker.number.float({ min: 3000, max: 35000 }))];
  const stack = "stack 0";
  datasetStackSections.push({
    label,
    data,
    stack,
  });
}

// Generate unutilized capacity
const unutilizedLabel = "Unutilized Capacity";
const unutilizedCapacity = truncFloat(
  faker.number.float({ min: 0, max: 35000 })
);
const unutilizedStack = "stack 0";
datasetStackSections.push({
  label: unutilizedLabel,
  data: [unutilizedCapacity],
  stack: unutilizedStack,
});

const datasetSchema: StackedBarDataSchema = {
  xTitle: clientName,
  yTitle: "Capacity Utilization",
  labels: [clientName],
  datasets: datasetStackSections,
};
pushJsonToFile(`./data/${fileName}.json`, datasetSchema);
