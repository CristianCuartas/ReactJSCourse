
export const apiGet = (url) => () => fetch(url).then(res => res.json());

export const apiPut = (url, id, obj) => () => fetch(`${url}/${id}`,{
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({'Content-type': 'application/json'})
}).then(res => res.json())
    .catch(Error => {
    console.log(Error);
  });;

export const apiPOST = (url, obj) => () => fetch(`${url}`,{
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({'Content-type': 'application/json'})
}).then(res => res.json())
    .catch(Error => {
    console.log(Error);
  });;