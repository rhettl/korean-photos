export default function(server) {

  // server.loadFixtures();
  server.loadFixtures('photos');
  server.loadFixtures('tags');
  server.loadFixtures('people');

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
