export function validateGenre(genre) {
    return typeof genre === 'string' && genre.trim().length > 0;
  }
  
  export function validateTime(time) {
    const regex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
    return regex.test(time);
  }