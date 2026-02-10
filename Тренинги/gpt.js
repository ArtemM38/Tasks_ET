const API_URL = "https://jsonplaceholder.typicode.com/users"; // учебный сервер

let cart = []; // локальный массив для отображения товаров


async function request(url, method, body = null) {
  const options = { method, headers: { "Content-Type": "application/json" } };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(url, options);

  if (!response.ok) throw new Error(`Ошибка ${method} запроса`);

  return body ? await response.json() : null;
}

async function createProduct(name, price) {
  const product = await request(API_URL, "POST", { name, price });
  console.log("Создан товар:", product);
  cart.push(product); // добавляем в локальный массив
  return product;
}

async function updateProduct(id, name, price) {
  const product = await request(`${API_URL}/${id}`, "PUT", { name, price });
  console.log("Обновлён товар:", product);

  // обновляем локальный массив
  cart = cart.map(p => (p.id === id ? product : p));
  return product;
}

async function deleteProduct(id) {
  await request(`${API_URL}/${id}`, "DELETE");
  console.log("Товар удалён с id:", id);

  cart = cart.filter(p => p.id !== id);
}


async function testCRUD() {
  const t1 = await createProduct("Laptop", 1000);
  const t2 = await createProduct("Phone", 700);

  showCart();

  await updateProduct(t1.id, "Laptop Pro", 1200);

  showCart();

  await deleteProduct(t2.id);

  showCart();
}
function filterByPrice(minPrice) {
  return cart.filter(p => p.price >= minPrice);
}

function searchByName(search) {
  return cart.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
}
function calculateTotals() {
  return cart.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );
}
function showCart() {
  console.log("Текущий список товаров:", cart);
  console.log("Итоги:", calculateTotals());
}


testCRUD();
