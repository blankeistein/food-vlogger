const SkipToContentInitiator = {
  init({ button, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      content.focus();
    });
  },
};

export default SkipToContentInitiator;
