export default function canUseDom() {
  return !!(
    typeof window.location !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}
