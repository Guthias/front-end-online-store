export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCategoriesId(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductDetails(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const saveLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};
