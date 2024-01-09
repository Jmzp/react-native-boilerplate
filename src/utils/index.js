export const numberWithDots = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const removeSpaces = (string) => string.replace(/\s/g, '');

export const formatPhoneNumber = (phone) =>
  phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

export const formatPhoneNumberWithInternationalCode = (phone) =>
  phone.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');

export const toHHMMSS = (secs) => {
  const sec_num = parseInt(secs, 10);
  const hours = Math.floor(sec_num / 3600) % 24;
  const minutes = Math.floor(sec_num / 60) % 60;
  const seconds = sec_num % 60;
  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

export const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
