
export const returnJsonOrRes = async (data) => {
  // check to see if body is json and converts it if it needs to be converted
  const contentType = data.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return data.json();
  }
  return data;
};

export async function handleErrors(response) {
  if (
    response.ok === false ||
    response.status === 401 ||
    response.status === 403 ||
    response.status >= 500
  ) {
    const formattedResponse = await returnJsonOrRes(response);
    if (formattedResponse?.errorMessage) {
      throw formattedResponse.errorMessage;
    } else {
      throw response.statusText;
    }
  }
  return response; 
}

export const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const fetchOptions = { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, fetchOptions);
  await handleErrors(res);
  return res.json();
}

