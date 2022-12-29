export const environment = {
  production: false,
  config:{
    apiUrl:  window["env"]["backendBaseUrl"] || "http://localhost:8080/api/v1"
  }
};
