import app from '../lib/app.js';
import supertest from 'supertest';
import unmungedLocation from '../data/location.js';
import mungeLocation, { mungeWeather } from '../utils.js';


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

it('', () => {
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
