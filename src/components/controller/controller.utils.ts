import { locales } from '../../locales';

export const formFieldData = [
  {
    label: locales.key,
    required: true,
    description: '',
    placeholder: 'Please enter key value!',
  },
  {
    label: locales.type,
    required: true,
    description: '',
    placeholder: 'Please enter type!',
  },
  {
    label: locales.sourcePath,
    required: true,
    description: '',
    placeholder: 'Please Source Path!',
  },
  {
    label: locales.destinationPath,
    required: true,
    description: '',
    placeholder: 'Please enter Destination Path!',
  },
  {
    label: locales.databaseName,
    required: true,
    description: '',
    placeholder: 'Please enter Database Name!',
  },
  {
    label: locales.tableName,
    required: true,
    description: '',
    placeholder: 'Please enter Table Name!',
  },
  {
    label: locales.tableColumn,
    required: true,
    description: '',
    placeholder: 'Please enter Table Column Name!',
  },
  {
    label: locales.piiColumn,
    required: false,
    description: '',
    placeholder: 'Please enter PII Column Name!',
  },
  {
    label: locales.watermarkColumn,
    required: false,
    description: '',
    placeholder: 'Please enter Watermark Column Name!',
  },
  {
    label: locales.primaryKey,
    required: false,
    description: '',
    placeholder: 'Please enter Primary Key!',
  },
  {
    label: locales.partitionKey,
    required: false,
    description: '',
    placeholder: 'Please enter Partition Key!',
  },
  {
    label: locales.bvc,
    required: true,
    description: '',
    placeholder: 'Please enter BVC value!',
  },
];

export const formatData = {
  label: locales.format,
  required: true,
  description: '',
  options: [
    { label: 'CSV', value: 'write' }, //selected
    { label: 'Praquet', value: 'write' },
    { label: 'JDBC', value: 'write' },
  ],
};

export const activeFlagData = {
  label: locales.activeFlag,
  required: true,
  description: '',
  options: [
    { label: 'Enabled', value: 'write' }, //selected
    { label: 'Disabled', value: 'write' },
  ],
};

export const loadTypeData = {
  label: locales.loadType,
  required: true,
  description: '',
  options: [
    { label: 'Delta', value: 'write' },
    { label: 'Full', value: 'write' }, //selected
  ],
};

export const fieldKeys: any = {
  Key: 'datasetKey',
  Type: 'datasetType',
  'Source Path': 'srcPath',
  'Destination Path': 'dstPath',
  'Database Name': 'databaseName',
  'Table Name': 'tableName',
  'Table Column': 'tableColumn',
  'PII Column': 'piiColumn',
  'Watermark Column': 'watermarkColumn',
  'Primary Key': 'primaryKey',
  'Partition Key': 'partitionKey',
  BVC: 'bvc',
  Format: 'format',
  "Active Flag'": 'activeFlag',
  'Load Type': 'loadType',
};

const isEmpty = (str: string) => !str.trim().length;

export const INITIAL_STATE = {
  datasetKey: '',
  datasetType: '',
  srcPath: '',
  dstPath: '',
  databaseName: '',
  tableName: '',
  tableColumn: '',
  piiColumn: '',
  watermarkColumn: '',
  primaryKey: '',
  partitionKey: '',
  bvc: '',
};

export function checkIfAllValuesEntered(formData: {
  datasetKey: string;
  datasetType: string;
  srcPath: string;
  dstPath: string;
  databaseName: string;
  tableName: string;
  tableColumn: string;
  piiColumn: string;
  watermarkColumn: string;
  primaryKey: string;
  partitionKey: string;
  bvc: string;
}): boolean | undefined {
  if (
    isEmpty(formData.datasetKey) ||
    isEmpty(formData.datasetType) ||
    isEmpty(formData.srcPath) ||
    isEmpty(formData.dstPath) ||
    isEmpty(formData.databaseName) ||
    isEmpty(formData.tableName) ||
    isEmpty(formData.tableColumn) ||
    isEmpty(formData.bvc)
  ) {
    return true;
  }
  return false;
}
