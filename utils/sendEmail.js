export function sendEmail(data) {
  // TODO: send email
  const apiEndpoint = "/api/email";
  console.log(data);

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return alert(response.message);
    })
    .catch((err) => {
      return alert(err);
    });
}
