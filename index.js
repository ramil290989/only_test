// классы свернутой и развенутой кнопки
const classNames = {
  expand: 'btn-expand',
  collapse: 'btn-collapse',
};

// функция разворачивания кнопки
const expandButton = (button) => {
  button.classList.remove(classNames.collapse);
  button.classList.add(classNames.expand);
  button.textContent = button.dataset.text;
};

// функция сворачивания кнопки
const collapseButton = (button) => {
  button.classList.remove(classNames.expand);
  button.classList.add(classNames.collapse);
  button.textContent = '';
};

// функция определения кнопки
const isButton = (element) => element.tagName === 'BUTTON';

// функция определения развернутой кнопки
const isExpandButton = (button) => button.classList.contains(classNames.expand);

// функция, в зависимости от состояния кнопки, сворачивает или разворачивает кнопку
const buttonProcessing = (button) => {
  isExpandButton(button) ? collapseButton(button) : expandButton(button);
};

// функция сворачивает все кнопки
const collapseAllButton = () => {
  const buttons = document.getElementById('buttons');
  for (const button of buttons.children) {
    isExpandButton(button) && collapseButton(button);
  }
};

// обработчик click
document.addEventListener('click', ({ target }) => {
  isButton(target) ? buttonProcessing(target) : collapseAllButton();
});
