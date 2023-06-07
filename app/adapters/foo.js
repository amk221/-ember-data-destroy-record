import RESTAdapter from '@ember-data/adapter/rest';
import { resolve } from 'rsvp';

export default class FooAdapter extends RESTAdapter {
  findAll() {
    return {
      foos: [
        {
          id: 1,
          name: 'Foo 1',
        },
        {
          id: 2,
          name: 'Foo 2',
        },
      ],
    };
  }

  deleteRecord() {
    return resolve();
  }
}
