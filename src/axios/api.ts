import service from "./service";

const base = '';

export function restRequest(url: string, method: string, params: any) {
  return service({
    url: `${base}${url}`,
    method: `${method}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export function formRequest(url: string, method: string, params: any) {
  return service({
    url: `${base}${url}`,
    method: `${method}`,
    params: {params},
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
