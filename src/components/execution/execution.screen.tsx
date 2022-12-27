import {
  Button,
  RadioGroup,
  SelectField,
  SmallTickIcon,
  toaster,
} from 'evergreen-ui';
import React, { useEffect } from 'react';
import { locales } from '../../locales';
import TextFieldScreen from '../text-field/TextField.screen';
import {
  notebookTask,
  clusterOptions,
  checkIfAllValuesEntered,
} from './execution.utils';
import LoaderScreen from '../loader/loader.screen';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postClusterData, reset } from './executionSlice';

import './execution.styles.css';

export type ExecutionScreenProps = {};

const ExecutionScreen: React.FC<ExecutionScreenProps> = ({}) => {
  const { loading, error, clusterSuccessData } = useAppSelector(
    (state) => state.execution
  );

  const dispatch = useAppDispatch();

  const [jobName, setJobName] = React.useState('');
  const [clusterId, setClusterId] = React.useState('');

  const [radioValue, setRadioValue] = React.useState(clusterOptions[1].value);
  const [notebookTaskValue, setNotebookTaskValue] = React.useState(
    notebookTask.options[0].label
  );

  useEffect(() => {
    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clusterSuccessData?.job_id]);

  const onInputChange = (e: any) => {
    switch (e.target.id) {
      case 'jobName':
        setJobName(e.target.value);
        break;
      case 'clusterId':
        setClusterId(e.target.value);
        break;
      default:
    }
  };

  const onSave = () => {
    const data = {
      jobName,
      notebookTaskValue,
      clusterId,
    };
    dispatch(postClusterData(data));
  };

  const isSaveEnabled = checkIfAllValuesEntered({
    jobName,
    clusterId,
    radioValue,
  });

  return (
    <div className='executionContainer'>
      <div className='subTitle'>{locales.executionTitle}</div>
      {error?.name &&
        !loading &&
        toaster.danger('Something went wrong!', error.name)}
      {clusterSuccessData?.job_id &&
        !loading &&
        toaster.success('Job Created successfully!')}
      {loading ? (
        <LoaderScreen />
      ) : (
        <>
          <div className='executionContentContainer'>
            <TextFieldScreen
              id={`jobName`}
              label={locales.jobName}
              required={true}
              placeholder={locales.namePlaceholder}
              onChange={onInputChange}
            />
            <div>
              <RadioGroup
                label={locales.clusterType}
                size={16}
                value={radioValue}
                options={clusterOptions}
                onChange={(event) => setRadioValue(event.target.value)}
              />
            </div>
            {radioValue === 'existingCluster' && (
              <TextFieldScreen
                id={`clusterId`}
                label={locales.existingClusterId}
                required={true}
                placeholder={locales.clusterIdPlaceholder}
                onChange={onInputChange}
              />
            )}
            <SelectField
              label={notebookTask.label}
              value={notebookTaskValue}
              onChange={(e) => {
                setNotebookTaskValue(e.target.value);
              }}
            >
              {notebookTask.options.map((item) => (
                <option value={item.label}>{item.label}</option>
              ))}
            </SelectField>
          </div>
          <div className='buttons-container'>
            <Button
              size='large'
              marginY={12}
              disabled={isSaveEnabled}
              intent='success'
              marginRight={16}
              onClick={onSave}
              iconBefore={SmallTickIcon}
            >
              {locales.createJob}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExecutionScreen;
