// const BASE_API = 'http://127.0.0.1:8000/api/';
const BASE_API = 'http://api.refrescatusuerte.com//api/';

class Api {
  

  getweeks() {
    return this.get(`${BASE_API}weeks`);
  }
  getWinnersByWeekId(weekId) {
    return this.get(`${BASE_API}winners/${weekId}`);
  }

  
  async get(url) {
    const query = await fetch(url, {method: 'GET'});
    return this.handleResponse(query);
  }
  async secure_get(url, token) {
    console.log('user_token:', token);
    const query = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    return this.handleResponse(query);
  }
  async delete(url, token) {
    const query = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    return this.handleResponse(query);
  }

  async post(url, data) {
    const query = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return this.handleResponse(query);
  }

  async secure_post(url, data, token) {
    console.log('user_token:', token);
    const query = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });

    return this.handleResponse(query);
  }

  async handleResponse(query) {
    //console.log('apilog-query:', query);
    let response = {};
    if (query.status === 200 || query.status === 201) {
      response = await query.json();
      response.success = true;
    } else {
      response = await query.json();
      response.success = false;
      //response.error_desc = errorMessage[response.code];
    }

    //console.log('apilog-response:', response);
    return response;
  }

  toParams(obj_data) {
    return Object.entries(obj_data)
      .map((e) => e.join('='))
      .join('&');
  }
}

export default new Api();
