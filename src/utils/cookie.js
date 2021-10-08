export const Cookies = {
  ANNOUNCEMENT_DISABLED: 'ANNOUNCEMENT_DISABLED',
};

export const setCookie = (name, value, days = 1) => {
  if (typeof window === 'undefined') {
    return;
  }

  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

export const getCookie = (cname) => {
  if (typeof window === 'undefined') {
    return;
  }

  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const deleteCookie = (name) => {
  if (typeof window === 'undefined') {
    return;
  }

  const date = new Date();
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
};
