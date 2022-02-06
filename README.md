![The TC Logo]("https://github.com/BradChandler/tc-fetch/blob/main/public/Portfolio-Logo.png")
# Try-Catch-Fetch

This project provides a simple wrapper around the browser-side `fetch` library.
It provides status code checking and full promise library usage while forwarding the status code and text back to your code, making it safe and simple to use Try-Catch logic around the request.

`npm i tc-fetch`   

`import tcFetch from 'tc-fetch';    
// or    
// import { tcGet, tcPost, tcPut, tcDelete } from 'tc-fetch';    
... const yourFunction = async () => {    
  try {    
    // all request types will resolve, with any JSON response parsed const    
    res = await tcFetch.tcGet('URL_PATH');    
    return res;    
    } catch(err) {    
      // you can safely catch errors here without any need to check for status or status codes    
      console.err(err);    
    }    
  }   
`

---

## Usage

Any response codes in the 200 - 300 range are treated as successful and will resolve to server response text.

### Get Requests

Use the tcGet method to reach out to a given URL and receive some data in response.
You may supply an options object but it is not required.
`import { tcGet } from 'tc-fetch';    
...    
const yourFunction = async () => {    
  try {    
    const res = await tcFetch.tcGet('URL_PATH');    
    return res;    
  } catch(err) {    
    console.err(err);    
  }    
}   
`

### Post Requests

Use the tcPost method to reach out to a given URL and create data.
The options object is required for this request and you must specify a method and body.
`import { tcPost } from 'tc-fetch';    
...    
const yourFunction = async () => {    
  try {    
    const res = await tcFetch.tcGet('URL_PATH', {method: 'POST', body: {}});    
    return res;    
  } catch(err) {    
    console.err(err);    
  }    
}   
`

### Put Requests

Use the tcPut method to reach out to a given URL and update data.
The options object is required for this request and you must specify a method and body.
`import { tcPut } from 'tc-fetch';    
...    
const yourFunction = async () => {    
  try {    
    const res = await tcFetch.tcGet('URL_PATH', {method: 'PUT', body: {}});    
    return res;    
  } catch(err) {    
    console.err(err);    
  }    
}   
`

### Delete Requests

Use the tcDelete method to reach out to a given URL and delete data.
The options object is required for this request and you must specify a method and body.
`import { tcDelete } from 'tc-fetch';    
...    
const yourFunction = async () => {    
  try {    
    const res = await tcFetch.tcGet('URL_PATH', {method: 'DELETE', body: {}});    
    return res;    
  } catch(err) {    
    console.err(err);    
  }    
}   
`
