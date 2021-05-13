export function mungeLocation(booger) {
  return {
    formatted_query: booger[0].display_name,
    latitude: booger[0].lat,
    longitude: booger[0].lon
  };
}
