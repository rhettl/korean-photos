const send = (model, data) => {
  return fetch("http://localhost:3000/"+model, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(resp => resp.json());
}

export default function () {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing


  this.get('/save', function ({db}) {
    if (fetch) {
      return Promise.all([
        send('people', db.people.where({})),
        send('tags', db.tags.where({})),
        send('photos', db.photos.where({})),
      ]);
    } else {
      return [{}, {}, {}]
    }
  });


  this.get('/photos');
  this.post('/photos');
  this.get('/photos/:id');
  this.patch('/photos/:id'); // or this.patch
  this.del('/photos/:id');

  this.get('/tags');
  this.post('/tags');
  this.get('/tags/:id');
  this.patch('/tags/:id'); // or this.patch
  this.del('/tags/:id');

  this.get('/people');
  this.post('/people');
  this.get('/people/:id');
  this.patch('/people/:id'); // or this.patch
  this.del('/people/:id');


  // Shorthand cheatsheet:
  // http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/


}
