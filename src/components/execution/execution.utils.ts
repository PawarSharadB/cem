import { isEmpty } from '../../app/utils';
import { locales } from '../../locales';

export const notebookTask = {
  label: locales.notebookTask,
  required: true,
  description: '',
  options: [
    {
      label: '/Shared/Bizmetric/automations/data-quality/DataQualityChecks',
      value: 'write',
    }, //selected
  ],
};

export const clusterOptions = [
  { label: locales.existingCluster, value: 'existingCluster' },
  { label: locales.newCluster, value: 'newCluster' },
];

export function checkIfAllValuesEntered(formData: {
  jobName: string;
  clusterId: string;
  radioValue: string;
}): boolean | undefined {
  const checkClusterId =
    formData.radioValue === clusterOptions[0].value &&
    isEmpty(formData.jobName);
  if (isEmpty(formData.jobName) || checkClusterId) {
    return true;
  }
  return false;
}
