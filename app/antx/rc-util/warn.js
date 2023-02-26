/** @deprecated Use `warning` instead. This will be removed in next major version */
export default function warn(msg) {
  if (false) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn(msg);
    }
  }
}
