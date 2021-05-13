import app from '../lib/app.js';
import supertest from 'supertest';
import unmungedLocation from '../data/location.js';
import mungeLocation from '../utils.js';


const request = supertest(app);

describe('API Routes', () => {

  it('string omy gosh your gunna put test munge location function', () => {
    const expected = {
      formatted_query: 'Portland, Multnomah County, Oregon, USA', latitude: '45.5202471', longitude: '-122.6741949'
    };
    const result = mungeLocation(unmungedLocation);
    expect(result).toEqual(expected);
  });
});
