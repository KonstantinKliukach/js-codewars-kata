function kebabize(str) {
  return str.replace(/\d/g, '').split(/(?=[A-Z])/).join('-').toLowerCase();
}