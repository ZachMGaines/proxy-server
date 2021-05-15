export default function mungeLocation(booger) {
  return {
    formatted_query: booger[0].display_name,
    latitude: booger[0].lat,
    longitude: booger[0].lon
  };
}

export function mungeWeather(weather) {
  return weather.data.map(item => {
    return {
      forecast: item.weather.description,
      time: item.valid_date
    };
  });
}

export function mungeYelp(data) {
  return data.businesses.map(item => {
    return {
      name: item.name,
      image_url: item.image_url,
      price: item.price,
      rating: item.rating,
      url: item.url
    };
  });
}