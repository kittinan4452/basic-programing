let username:unknown;
username="kongruksiam";
console.log((username as string).toUpperCase());
console.log((<string>username).toUpperCase());
