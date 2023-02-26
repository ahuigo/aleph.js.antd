export default function deprecated(props, instead, component) {
  if (typeof window.location !== 'undefined' && window.console && window.console.error) {
    window.console.error(
      `Warning: ${props} is deprecated at [ ${component} ], ` +
        `use [ ${instead} ] instead of it.`
    );
  }
}
