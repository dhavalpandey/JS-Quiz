var ip = fetch('http://api.ipify.org/?format=json').then(results => results.json()).then(data => console.log(data.ip));
