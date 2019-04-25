// ES Modules syntax
import Unsplash from 'unsplash-js/native';
import { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: "4e725e8f99d07fe47ae8409ab65f57ec98bbcbd574282adc001cdfe52750d73a",
  secret: "7cc87c7eb83f8340ca44ea8d2c0c87e3f2d43b8f4bbb214d4b4708ba7e79497a"
});

export const photoSearch = keyword => {
  return unsplash.search.photos(keyword, 1, 15)
  .then(toJson)
  .then(result => {
    let processed = []
    result.results.map(r => {
      processed.push(r.urls.small)
    })
    return processed
  });
}