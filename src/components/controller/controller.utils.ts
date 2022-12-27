import { isEmpty } from '../../app/utils';
import { locales } from '../../locales';

export const RDBMSTypeData = [
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
];

export const FILESTypeData = [
  {
    label: locales.sourcePath,
    required: true,
    description: '',
    placeholder: 'Please Source Path!',
  },
];

export const formFieldData = [
  {
    label: locales.key,
    required: true,
    description: '',
    placeholder: 'Please enter key value!',
  },
  {
    label: locales.bpc,
    required: true,
    description: '',
    placeholder: 'Please enter BPC value!',
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
];

export const datasetTypeOptions = [
  { label: locales.rdbms, value: 'rdbms' },
  { label: locales.files, value: 'files' },
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
  'Dataset Type': 'datasetType',
  'Source Path': 'srcPath',
  'Database Name': 'databaseName',
  'Table Name': 'tableName',
  'Table Column': 'tableColumn',
  'PII Column': 'piiColumn',
  'Watermark Column': 'watermarkColumn',
  'Primary Key': 'primaryKey',
  'Partition Key': 'partitionKey',
  BPC: 'bpc',
  Format: 'format',
  "Active Flag'": 'activeFlag',
  'Load Type': 'loadType',
};

export const INITIAL_STATE = {
  datasetKey: '',
  datasetType: '',
  srcPath: '',
  databaseName: '',
  tableName: '',
  tableColumn: '',
  piiColumn: '',
  watermarkColumn: '',
  primaryKey: '',
  partitionKey: '',
  bpc: '',
};

export function checkValuesForDBMSType(formData: {
  datasetKey: string;
  datasetType: string;
  srcPath: string;
  databaseName: string;
  tableName: string;
  tableColumn: string;
  piiColumn: string;
  watermarkColumn: string;
  primaryKey: string;
  partitionKey: string;
  bpc: string;
}): boolean {
  if (
    isEmpty(formData.datasetKey) ||
    isEmpty(formData.databaseName) ||
    isEmpty(formData.tableName) ||
    isEmpty(formData.tableColumn) ||
    isEmpty(formData.bpc)
  ) {
    return true;
  }
  return false;
}

export function checkValuesForFilesType(formData: {
  datasetKey: string;
  datasetType: string;
  srcPath: string;
  databaseName: string;
  tableName: string;
  tableColumn: string;
  piiColumn: string;
  watermarkColumn: string;
  primaryKey: string;
  partitionKey: string;
  bpc: string;
}): boolean {
  if (
    isEmpty(formData.datasetKey) ||
    isEmpty(formData.srcPath) ||
    isEmpty(formData.bpc)
  ) {
    return true;
  }
  return false;
}

export function checkIfAllValuesEntered(formData: {
  datasetKey: string;
  datasetType: string;
  srcPath: string;
  databaseName: string;
  tableName: string;
  tableColumn: string;
  piiColumn: string;
  watermarkColumn: string;
  primaryKey: string;
  partitionKey: string;
  bpc: string;
}): boolean | undefined {
  if (
    isEmpty(formData.datasetKey) ||
    isEmpty(formData.datasetType) ||
    isEmpty(formData.srcPath) ||
    isEmpty(formData.databaseName) ||
    isEmpty(formData.tableName) ||
    isEmpty(formData.tableColumn) ||
    isEmpty(formData.bpc)
  ) {
    return true;
  }
  return false;
}
