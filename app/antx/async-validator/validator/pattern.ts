import { ExecuteValidator } from '../interface.ts';
import rules from '../rule/index.ts';
import { isEmptyValue } from '../util.ts';

const pattern: ExecuteValidator = (rule, value, callback, source, options:any) => {
  const errors: string[] = [];
  const validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field!));
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};

export default pattern;
