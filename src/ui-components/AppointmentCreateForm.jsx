/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAppointment } from "../graphql/mutations";
const client = generateClient();
export default function AppointmentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    appointmentId: "",
    businessName: "",
    businessId: "",
    businessNumber: "",
    clientName: "",
    clientId: "",
    clientNumber: "",
    clientEmail: "",
    date: "",
    time: "",
  };
  const [appointmentId, setAppointmentId] = React.useState(
    initialValues.appointmentId
  );
  const [businessName, setBusinessName] = React.useState(
    initialValues.businessName
  );
  const [businessId, setBusinessId] = React.useState(initialValues.businessId);
  const [businessNumber, setBusinessNumber] = React.useState(
    initialValues.businessNumber
  );
  const [clientName, setClientName] = React.useState(initialValues.clientName);
  const [clientId, setClientId] = React.useState(initialValues.clientId);
  const [clientNumber, setClientNumber] = React.useState(
    initialValues.clientNumber
  );
  const [clientEmail, setClientEmail] = React.useState(
    initialValues.clientEmail
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [time, setTime] = React.useState(initialValues.time);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAppointmentId(initialValues.appointmentId);
    setBusinessName(initialValues.businessName);
    setBusinessId(initialValues.businessId);
    setBusinessNumber(initialValues.businessNumber);
    setClientName(initialValues.clientName);
    setClientId(initialValues.clientId);
    setClientNumber(initialValues.clientNumber);
    setClientEmail(initialValues.clientEmail);
    setDate(initialValues.date);
    setTime(initialValues.time);
    setErrors({});
  };
  const validations = {
    appointmentId: [{ type: "Required" }],
    businessName: [],
    businessId: [],
    businessNumber: [],
    clientName: [],
    clientId: [],
    clientNumber: [],
    clientEmail: [],
    date: [],
    time: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          appointmentId,
          businessName,
          businessId,
          businessNumber,
          clientName,
          clientId,
          clientNumber,
          clientEmail,
          date,
          time,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAppointment.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AppointmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Appointment id"
        isRequired={true}
        isReadOnly={false}
        value={appointmentId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId: value,
              businessName,
              businessId,
              businessNumber,
              clientName,
              clientId,
              clientNumber,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.appointmentId ?? value;
          }
          if (errors.appointmentId?.hasError) {
            runValidationTasks("appointmentId", value);
          }
          setAppointmentId(value);
        }}
        onBlur={() => runValidationTasks("appointmentId", appointmentId)}
        errorMessage={errors.appointmentId?.errorMessage}
        hasError={errors.appointmentId?.hasError}
        {...getOverrideProps(overrides, "appointmentId")}
      ></TextField>
      <TextField
        label="Business name"
        isRequired={false}
        isReadOnly={false}
        value={businessName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName: value,
              businessId,
              businessNumber,
              clientName,
              clientId,
              clientNumber,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.businessName ?? value;
          }
          if (errors.businessName?.hasError) {
            runValidationTasks("businessName", value);
          }
          setBusinessName(value);
        }}
        onBlur={() => runValidationTasks("businessName", businessName)}
        errorMessage={errors.businessName?.errorMessage}
        hasError={errors.businessName?.hasError}
        {...getOverrideProps(overrides, "businessName")}
      ></TextField>
      <TextField
        label="Business id"
        isRequired={false}
        isReadOnly={false}
        value={businessId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId: value,
              businessNumber,
              clientName,
              clientId,
              clientNumber,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.businessId ?? value;
          }
          if (errors.businessId?.hasError) {
            runValidationTasks("businessId", value);
          }
          setBusinessId(value);
        }}
        onBlur={() => runValidationTasks("businessId", businessId)}
        errorMessage={errors.businessId?.errorMessage}
        hasError={errors.businessId?.hasError}
        {...getOverrideProps(overrides, "businessId")}
      ></TextField>
      <TextField
        label="Business number"
        isRequired={false}
        isReadOnly={false}
        value={businessNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber: value,
              clientName,
              clientId,
              clientNumber,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.businessNumber ?? value;
          }
          if (errors.businessNumber?.hasError) {
            runValidationTasks("businessNumber", value);
          }
          setBusinessNumber(value);
        }}
        onBlur={() => runValidationTasks("businessNumber", businessNumber)}
        errorMessage={errors.businessNumber?.errorMessage}
        hasError={errors.businessNumber?.hasError}
        {...getOverrideProps(overrides, "businessNumber")}
      ></TextField>
      <TextField
        label="Client name"
        isRequired={false}
        isReadOnly={false}
        value={clientName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber,
              clientName: value,
              clientId,
              clientNumber,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.clientName ?? value;
          }
          if (errors.clientName?.hasError) {
            runValidationTasks("clientName", value);
          }
          setClientName(value);
        }}
        onBlur={() => runValidationTasks("clientName", clientName)}
        errorMessage={errors.clientName?.errorMessage}
        hasError={errors.clientName?.hasError}
        {...getOverrideProps(overrides, "clientName")}
      ></TextField>
      <TextField
        label="Client id"
        isRequired={false}
        isReadOnly={false}
        value={clientId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber,
              clientName,
              clientId: value,
              clientNumber,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.clientId ?? value;
          }
          if (errors.clientId?.hasError) {
            runValidationTasks("clientId", value);
          }
          setClientId(value);
        }}
        onBlur={() => runValidationTasks("clientId", clientId)}
        errorMessage={errors.clientId?.errorMessage}
        hasError={errors.clientId?.hasError}
        {...getOverrideProps(overrides, "clientId")}
      ></TextField>
      <TextField
        label="Client number"
        isRequired={false}
        isReadOnly={false}
        value={clientNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber,
              clientName,
              clientId,
              clientNumber: value,
              clientEmail,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.clientNumber ?? value;
          }
          if (errors.clientNumber?.hasError) {
            runValidationTasks("clientNumber", value);
          }
          setClientNumber(value);
        }}
        onBlur={() => runValidationTasks("clientNumber", clientNumber)}
        errorMessage={errors.clientNumber?.errorMessage}
        hasError={errors.clientNumber?.hasError}
        {...getOverrideProps(overrides, "clientNumber")}
      ></TextField>
      <TextField
        label="Client email"
        isRequired={false}
        isReadOnly={false}
        value={clientEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber,
              clientName,
              clientId,
              clientNumber,
              clientEmail: value,
              date,
              time,
            };
            const result = onChange(modelFields);
            value = result?.clientEmail ?? value;
          }
          if (errors.clientEmail?.hasError) {
            runValidationTasks("clientEmail", value);
          }
          setClientEmail(value);
        }}
        onBlur={() => runValidationTasks("clientEmail", clientEmail)}
        errorMessage={errors.clientEmail?.errorMessage}
        hasError={errors.clientEmail?.hasError}
        {...getOverrideProps(overrides, "clientEmail")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber,
              clientName,
              clientId,
              clientNumber,
              clientEmail,
              date: value,
              time,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        value={time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              appointmentId,
              businessName,
              businessId,
              businessNumber,
              clientName,
              clientId,
              clientNumber,
              clientEmail,
              date,
              time: value,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
