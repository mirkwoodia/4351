export const callBackendAPI = async (string) => {
    const response = await fetch('/express_backend/' + string); 
    const body = await response.json();

    if (response.status !== 200) {
      console.log(response.status)
      throw Error(body.message) 
    }
    return body;
};