import { ExecuteValidator } from '../interface.ts';
import rules from '../rule/index.ts';
import { isEmptyValue } from '../util.ts';

const method: ExecuteValidator = (rule, value, callback, source, options:any) => {
  const errors: string[] = [];
  const validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field!));
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};

export default method;
