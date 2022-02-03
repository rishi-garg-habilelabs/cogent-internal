/* eslint-disable import/no-unresolved */
import _ from 'lodash';
import isValidPhoneNumber from 'libphonenumber-js';

const error = {
  error: false,
  errorKey: '',
};

export function isRequiredValid(key, value, errorKey) {
  const errorObj = { ...error };
  if (!value) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || `ERRORS.${key.toUpperCase()}_REQUIRED`;
  }
  return errorObj;
}

export function isEmailValid(key, value, errorKey) {
  const errorObj = { ...error };
  if (!value) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || `ERRORS.${key.toUpperCase()}_REQUIRED`;
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || 'ERRORS.EMAIL_INVLALID';
  }
  return errorObj;
}

export function isPostCodeValid(key, value, errorKey) {
  const errorObj = { ...error };
  if (!value) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || `ERRORS.${key.toUpperCase()}_REQUIRED`;
  } else if (!/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value)) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || 'ERRORS.POSTCODE_INVLALID';
  }
  return errorObj;
}

export function isMobileNumberValid(key, value, errorKey) {
  const errorObj = { ...error };
  if (!value) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || `ERRORS.${key.toUpperCase()}_REQUIRED`;
  // eslint-disable-next-line no-useless-escape
  } else if (!isValidPhoneNumber(value.toString(), 'DE')) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || 'ERRORS.PHONE_INVLALID';
  }
  return errorObj;
}

export function isStreetNumberValid(key, value, errorKey) {
  const errorObj = { ...error };
  if (!value) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || `ERRORS.${key.toUpperCase()}_REQUIRED`;
  } else if (!/^[1-9]\d{0,3} ?[a-zA-Z]?(?: ?[/-] ?[1-9]\d{0,3} ?[a-zA-Z]?)?$/.test(value)) {
    errorObj.error = true;
    errorObj.errorKey = errorKey || 'ERRORS.STREET_NUMBER_INVALID';
  }
  return errorObj;
}

export function validatePassword(key, password, confirmPassword) {
  const errorObj = { ...error };
  if (password !== confirmPassword) {
    errorObj.error = true;
    errorObj.errorKey = `ERRORS.${key.toUpperCase()}_DOESNOT_MATCH`;
    return errorObj;
  }

  if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password)) {
    errorObj.error = true;
    errorObj.errorKey = `ERRORS.${key.toUpperCase()}_NOT_SECURE_ERROR`;
  }
  return errorObj;
}

export function checkFormValid(formFields) {
  const updatedFormFields = formFields.map((formField) => {
    const updatedFormField = { ...formField };
    let errorObj = {};
    if (updatedFormField.required) {
      errorObj = isRequiredValid(updatedFormField.key, updatedFormField.value);
    }
    if (!errorObj?.error && formField.email) {
      errorObj = isEmailValid(formField.key, formField.value);
    }
    if (!errorObj?.error && formField.contactNumber) {
      errorObj = isMobileNumberValid(formField.key, formField.value);
    }
    if (!errorObj?.error && formField.postCode) {
      errorObj = isPostCodeValid(formField.key, formField.value);
    }
    if (!errorObj?.error && formField.key === 'number') {
      errorObj = isStreetNumberValid(formField.key, formField.value);
    }
    if (!errorObj?.error && (formField.key === 'newPassword')) {
      const newPwd = formField.value;
      if (newPwd) {
        const confirmPwd = formFields.find((f) => f.key === 'confirmPassword').value;
        errorObj = validatePassword('password', newPwd, confirmPwd);
      }
    }
    return { ...formField, error: errorObj.error || false, errorText: errorObj.errorKey };
  });

  const isFormValid = _.every(updatedFormFields, { error: false });
  return { fields: updatedFormFields, isFormValid };
}

export function isValidNoOfDays(value, errorKey) {
  const errorObj = { ...error };
  if (parseInt(value, 10) > 28) {
    errorObj.error = true;
    errorObj.errorKey = errorKey;
  }
  return errorObj;
}

export default {
  isRequiredValid,
  isEmailValid,
  isPostCodeValid,
  isMobileNumberValid,
  validatePassword,
  isValidNoOfDays,
};
