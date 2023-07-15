const SuccessAlert = (text) => `
  <div class="alert alert-success">
    <p class="mb-0">${text}</p>
  </div>
`;

const ErrorAlert = (text) => `
  <div class="alert alert-error">
    <p class="mb-0">${text}</p>
  </div>
`;

export { SuccessAlert, ErrorAlert };
