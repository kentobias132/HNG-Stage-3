export async function getAllProducts() {
  const res = await fetch(
    "/api/products?organization_id=6ee49d8f96e64d368c9ca1c7e09a6eb5&reverse_sort=false&page=1&size=10&Appid=F3CQ0A1IPWNNXJL&Apikey=f8f029814110445a91cefa3da53899a120240713001906164641"
  );
  const data = await res.json();
  console.log(data);
}

//   anxios
//     .get(
//       "/api/products?organization_id=6ee49d8f96e64d368c9ca1c7e09a6eb5&reverse_sort=false&page=1&size=10&Appid=F3CQ0A1IPWNNXJL&Apikey=f8f029814110445a91cefa3da53899a120240713001906164641"
//     )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
