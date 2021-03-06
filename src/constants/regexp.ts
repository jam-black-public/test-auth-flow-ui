export default {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ZIP: new RegExp('^\\d{5}(?:[-\\s]\\d{4})?$'),
  TELEPHONE_NUMBER: new RegExp('^(\\([0-9]{3}\\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$')
};
