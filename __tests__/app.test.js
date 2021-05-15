import app from '../lib/app.js';
import supertest from 'supertest';
import unmungedLocation from '../data/location.js';
import mungeLocation, { mungeWeather, mungeYelp } from '../utils.js';


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

it('this tests our mungeWeather', () => {
  const data = {
    'data': [
      {
        'moonrise_ts': 1620852986,
        'wind_cdir': 'ENE',
        'rh': 91,
        'pres': 980.875,
        'high_temp': 19.5,
        'sunset_ts': 1620900248,
        'ozone': 322.875,
        'moon_phase': 0.0253679,
        'wind_gust_spd': 4.53516,
        'snow_depth': 0,
        'clouds': 92,
        'ts': 1620831660,
        'sunrise_ts': 1620850141,
        'app_min_temp': 13.9,
        'wind_spd': 1.30774,
        'pop': 65,
        'wind_cdir_full': 'east-northeast',
        'slp': 1012.23,
        'moon_phase_lunation': 0.04,
        'valid_date': '2021-05-13',
        'app_max_temp': 19.5,
        'vis': 23.808,
        'dewpt': 14.2,
        'snow': 0,
        'uv': 3.26878,
        'weather': {
          'icon': 'c04d',
          'code': 804,
          'description': 'Overcast clouds'
        },
        'wind_dir': 68,
        'max_dhi': null,
        'clouds_hi': 55,
        'precip': 1.6875,
        'low_temp': 13.2,
        'max_temp': 19.6,
        'moonset_ts': 1620905250,
        'datetime': '2021-05-13',
        'temp': 15.6,
        'min_temp': 13.8,
        'clouds_mid': 14,
        'clouds_low': 79
      },
      {
        'moonrise_ts': 1620941632,
        'wind_cdir': 'S',
        'rh': 84,
        'pres': 982.25,
        'high_temp': 23.8,
        'sunset_ts': 1620986695,
        'ozone': 321.104,
        'moon_phase': 0.0656482,
        'wind_gust_spd': 2.40039,
        'snow_depth': 0,
        'clouds': 81,
        'ts': 1620918060,
        'sunrise_ts': 1620936494,
        'app_min_temp': 13.2,
        'wind_spd': 1.03915,
        'pop': 0,
        'wind_cdir_full': 'south',
        'slp': 1013.38,
        'moon_phase_lunation': 0.07,
        'valid_date': '2021-05-14',
        'app_max_temp': 23.9,
        'vis': 24.1,
        'dewpt': 15,
        'snow': 0,
        'uv': 4.799,
        'weather': {
          'icon': 'c04d',
          'code': 804,
          'description': 'Overcast clouds'
        },
        'wind_dir': 174,
        'max_dhi': null,
        'clouds_hi': 75,
        'precip': 0,
        'low_temp': 15,
        'max_temp': 24,
        'moonset_ts': 1620995048,
        'datetime': '2021-05-14',
        'temp': 18,
        'min_temp': 13.1,
        'clouds_mid': 3,
        'clouds_low': 29
      },
    ],
    'city_name': 'Hiroshima',
    'lon': 132.45,
    'timezone': 'Asia/Tokyo',
    'lat': 34.39,
    'country_code': 'JP',
    'state_code': '11'
  };
  const expected = [
    {
      'forecast': 'Overcast clouds',
      'time': '2021-05-13',
    },
    {
      'forecast': 'Overcast clouds',
      'time': '2021-05-14',
    }
  ];

  const actual = mungeWeather(data);
  expect(actual).toEqual(expected);

});

it('this tests mungeYelp', async () => {
  const data = {
    'businesses': [
      {
        'id': 'OfQhFTk5r7uZ5wOrXMUQ1g',
        'alias': 'hunt-country-market-charlottesville',
        'name': 'Hunt Country Market',
        'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/b2cILOCgGQyctd8wtT6GrQ/o.jpg',
        'is_closed': false,
        'url': 'https://www.yelp.com/biz/hunt-country-market-charlottesville?adjust_creative=-V_P-4BK7mpp_nO_AMR1mg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-V_P-4BK7mpp_nO_AMR1mg',
        'review_count': 14,
        'categories': [
          {
            'alias': 'delis',
            'title': 'Delis'
          },
          {
            'alias': 'grocery',
            'title': 'Grocery'
          }
        ],
        'rating': 4.0,
        'coordinates': {
          'latitude': 38.1031645,
          'longitude': -78.5554366
        },
        'transactions': [],
        'price': '$',
        'location': {
          'address1': '2048 Garth Rd',
          'address2': '',
          'address3': '',
          'city': 'Charlottesville',
          'zip_code': '22901',
          'country': 'US',
          'state': 'VA',
          'display_address': [
            '2048 Garth Rd',
            'Charlottesville, VA 22901'
          ]
        },
        'phone': '+14342961648',
        'display_phone': '(434) 296-1648',
        'distance': 2452.996792346069
      }
    ],
    'total': 1,
    'region': {
      'center': {
        'longitude': -78.543,
        'latitude': 38.123
      }
    }
  };
  const expected = [
    {
      'name': 'Hunt Country Market',
      'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/b2cILOCgGQyctd8wtT6GrQ/o.jpg',
      'price': '$',
      'rating': 4,
      'url': 'https://www.yelp.com/biz/hunt-country-market-charlottesville?adjust_creative=-V_P-4BK7mpp_nO_AMR1mg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-V_P-4BK7mpp_nO_AMR1mg'
    }
  ];
  const actual = mungeYelp(data);
  expect(actual).toEqual(expected);

});
