export const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
  `;
const apiUrl = `https://api.coingecko.com/api/v3`;
export async function fetchData(page ) {
  try{

    const res =
      await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false
    `);
    const data = res.json()
  
    return data
  } catch (err){
    throw new Error ("could not get Data ")

  }
}
export async function getId (id){
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json()
  return data

}
// export function formatPrice(price) {
//   // Check if the price is a number
//   if (typeof price !== "number") {
//     return "N/A"; // Return 'N/A' if price is not a number
//   }

//   // Format the price with commas for thousands separator and 2 decimal places
//   const formattedPrice = price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   return `$${formattedPrice}`; // Add a dollar sign ($) as prefix
// } 
export  function formatPrice(price) {
  // Check if the price is a number
  if (typeof price !== "number") {
    return "N/A"; // Return 'N/A' if price is not a number
  }

  // Convert the price to absolute value and check its magnitude
  const absPrice = Math.abs(price);
  if (absPrice >= 1_000_000_000) {
    // If price is in billions, format it with 2 decimal places and "B" suffix
    return `$${(price / 1_000_000_000).toFixed(2)}B`;
  } else if (absPrice >= 1_000_000) {
    // If price is in millions, format it with 2 decimal places and "M" suffix
    return `$${(price / 1_000_000).toFixed(2)}M`;
  } else if (absPrice >= 1_000) {
    // If price is in thousands, format it with 2 decimal places and "K" suffix
    return `$${(price / 1_000).toFixed(2)}K`;
  } else {
    // For smaller prices, format it with 2 decimal places
    return `$${price.toFixed(2)}`;
  }
}