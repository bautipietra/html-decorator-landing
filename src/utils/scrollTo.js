/**
 * @description Scroll from a element to the target
 * @param {Event} element
 * @param {String} to
 * @returns {void}
 */
export const scrollTo = (element, to) => {
  element.preventDefault();
  const target = document.querySelector(to);
  window.scroll({
    top: target?.offsetTop - 100,
    behavior: 'smooth'
  });
}