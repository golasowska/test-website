import axios from 'axios';

export const SEND_FORM_DATA = 'SEND_FORM_DATA';
export const GET_CAMS = 'GET_CAMS';

export function sendFormData(values, callback) {
  callback();
  return {
    type: SEND_FORM_DATA,
    payload: values
  };
}

export function getCams() {
  return dispatch => {
    axios
      .get('https://makevoid-skicams.p.mashape.com/cams.json', {
        headers: {
          'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
        }
      })
      .then(function(response) {
        dispatch({
          type: GET_CAMS,
          payload: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
