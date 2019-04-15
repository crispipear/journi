import store from '../store';
import {storeCitiesData} from '../actions/appActions';

export const fetchData = () => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        store.dispatch(storeCitiesData(JSON.parse(req.responseText)))
      }
    };

    var BIN_ID = '5ca5240d24f5074645ec407b',
        SECRET_KEY = '$2a$10$pm2L9FUY9CgQ8bHwrwjAUuKUIUTgQZW/3MX42sO9gG6vqMREWpF3C'

    req.open("GET", `https://api.jsonbin.io/b/${BIN_ID}`, true);
    req.setRequestHeader("secret-key", SECRET_KEY);
    req.send();
}