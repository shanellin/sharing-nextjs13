import sleep from "@utils/sleep";

async function getData() {
  await sleep(5000);
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2", {
    cache: "no-store",
  });
  return res.json();
}

export default async function SlowComponent() {
  const data = await getData();

  return <h2>{`slowComponent: ${data.title}`}</h2>;
}
