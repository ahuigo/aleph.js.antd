import { ExecuteRule } from '../interface.ts';
import { format, isEmptyValue } from '../util.ts';

const required: ExecuteRule = (rule, value, source, errors, options:any, type) => {
  if (
    rule.required &&
    (!source.hasOwnProperty(rule.field!) ||
      isEmptyValue(value, type || rule.type))
  ) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

export default required;
