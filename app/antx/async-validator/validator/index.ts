import string from './string.ts';
import method from './method.ts';
import number from './number.ts';
import boolean from './boolean.ts';
import regexp from './regexp.ts';
import integer from './integer.ts';
import float from './float.ts';
import array from './array.ts';
import object from './object.ts';
import enumValidator from './enum.ts';
import pattern from './pattern.ts';
import date from './date.ts';
import required from './required.ts';
import type from './type.ts';
import any from './any.ts';

export default {
  string,
  method,
  number,
  boolean,
  regexp,
  integer,
  float,
  array,
  object,
  enum: enumValidator,
  pattern,
  date,
  url: type,
  hex: type,
  email: type,
  required,
  any,
};
