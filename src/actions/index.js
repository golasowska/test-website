export const SEND_FORM_DATA = 'SEND_FORM_DATA';

export function sendFormData(values, callback) {
  callback();
  return {
    type: SEND_FORM_DATA,
    payload: values
  };
}
