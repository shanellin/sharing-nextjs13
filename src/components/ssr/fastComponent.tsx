async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  return res.json();
}

export default async function FastComponent() {
  const data = await getData();

  return <h2>{`fastComponent: ${data.title}`}</h2>;
}
