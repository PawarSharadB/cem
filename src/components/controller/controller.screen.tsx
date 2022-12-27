import React, { useEffect } from 'react';
import {
  Button,
  SmallTickIcon,
  SelectField,
  toaster,
  RadioGroup,
} from 'evergreen-ui';
import TextFieldScreen from '../text-field/TextField.screen';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  activeFlagData,
  checkIfAllValuesEntered,
  checkValuesForDBMSType,
  checkValuesForFilesType,
  datasetTypeOptions,
  fieldKeys,
  FILESTypeData,
  formatData,
  formFieldData,
  INITIAL_STATE,
  loadTypeData,
  RDBMSTypeData,
} from './controller.utils';
import LoaderScreen from '../loader/loader.screen';
import { postData, reset } from './controllerSlice';
import { locales } from '../../locales';
import './controller.styles.css';

export type ControllerScreenProps = {};

const ControllerScreen: React.FC<ControllerScreenProps> = ({}) => {
  const { loading, error, successData } = useAppSelector(
    (state) => state.controller
  );

  const dispatch = useAppDispatch();

  const [formatValue, setFormatValue] = React.useState(
    formatData.options[0].label
  );
  const [activeFlagValue, setActiveFlagValue] = React.useState(
    activeFlagData.options[0].label
  );
  const [loadTypeValue, setLoadTypeValue] = React.useState(
    loadTypeData.options[0].label
  );

  const [radioValue, setRadioValue] = React.useState(
    datasetTypeOptions[1].value
  );

  const [formData, setFormData] = React.useState(INITIAL_STATE);

  useEffect(() => {
    dispatch(reset());
    setFormData(INITIAL_STATE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successData?.insertedId]);

  const onInputChange = (e: any, key: any) => {
    let name: any = fieldKeys[key];
    let value = e.target.value;
    setFormData((currentFormData) => {
      const nextFormData = {
        ...currentFormData,
        [name]: value,
      };
      return nextFormData;
    });
  };

  const onSave = () => {
    const data = {
      ...formData,
      format: formatValue.toLowerCase(),
      activeFlag: activeFlagValue.toLowerCase(),
      loadType: loadTypeValue.toLowerCase(),
    };
    dispatch(postData(data));
  };

  const checkFormData =
    radioValue === 'rdbms'
      ? checkValuesForDBMSType(formData)
      : checkValuesForFilesType(formData);

  return (
    <div className='container'>
      <div className='subTitle'>{locales.controllerTitle}</div>
      {error?.name &&
        !loading &&
        toaster.danger('Something went wrong!', error.name)}
      {successData?.insertedId &&
        !loading &&
        toaster.success('Data saved successfully!')}
      {loading ? (
        <LoaderScreen />
      ) : (
        <>
          <div className='contentContainer'>
            <div className='firstContainer'>
              {formFieldData.slice(0, 2).map((item, index) => (
                <TextFieldScreen
                  id={`${index}`}
                  label={item.label}
                  required={item.required}
                  placeholder={item.placeholder}
                  onChange={onInputChange}
                />
              ))}
              <RadioGroup
                label={locales.datasetType}
                size={16}
                value={radioValue}
                options={datasetTypeOptions}
                onChange={(event) => setRadioValue(event.target.value)}
              />
              <SelectField
                label={activeFlagData.label}
                value={activeFlagValue}
                onChange={(e) => {
                  setActiveFlagValue(e.target.value);
                }}
              >
                {activeFlagData.options.map((item) => (
                  <option value={item.label}>{item.label}</option>
                ))}
              </SelectField>
            </div>
            <div className='secondContainer'>
              {radioValue === 'rdbms' &&
                RDBMSTypeData.map((item, index) => (
                  <TextFieldScreen
                    id={`${index}`}
                    label={item.label}
                    required={item.required}
                    placeholder={item.placeholder}
                    onChange={onInputChange}
                  />
                ))}
              {radioValue === 'files' &&
                FILESTypeData.map((item, index) => (
                  <TextFieldScreen
                    id={`${index}`}
                    label={item.label}
                    required={item.required}
                    placeholder={item.placeholder}
                    onChange={onInputChange}
                  />
                ))}
              {radioValue === 'files' && (
                <SelectField
                  label={formatData.label}
                  value={formatValue}
                  onChange={(e) => {
                    setFormatValue(e.target.value);
                  }}
                >
                  {formatData.options.map((item) => (
                    <option value={item.label}>{item.label}</option>
                  ))}
                </SelectField>
              )}
              {radioValue === 'rdbms' && (
                <SelectField
                  label={loadTypeData.label}
                  value={loadTypeValue}
                  background={'none'}
                  onChange={(e) => {
                    setLoadTypeValue(e.target.value);
                  }}
                >
                  {loadTypeData.options.map((item) => (
                    <option value={item.label}>{item.label}</option>
                  ))}
                </SelectField>
              )}
            </div>
            <div className='secondContainer'>
              {formFieldData.slice(2, 6).map((item, index) => (
                <TextFieldScreen
                  id={`${index}`}
                  label={item.label}
                  required={item.required}
                  placeholder={item.placeholder}
                  onChange={onInputChange}
                />
              ))}
            </div>
          </div>

          <div className='buttons-container'>
            <Button
              size='large'
              marginY={12}
              disabled={checkFormData}
              intent='success'
              marginRight={16}
              onClick={onSave}
              iconBefore={SmallTickIcon}
            >
              {locales.save}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ControllerScreen;
