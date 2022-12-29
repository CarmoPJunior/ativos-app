export const environment = {
  production: true,
  config:{
    apiUrl:  window["env"]["backendBaseUrl"] || "http://localhost:8080/api/v1"
  }
};
