export async function fetchCars() {
  const headers = {
    "X-Api-Key": "6Ljojr7Eq+hOocNq+02f7w==F20aYGCM9bgbzNUq",
  };

  const responce = await fetch(
    "https://api.api-ninjas.com/v1/cars?model=corolla",
    {
      headers: headers,
    },
  );

  const result = await responce.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
