import { server } from "./server";

async function main() {
  await server.connectDatabase();
}

main()
  .catch(console.error)
  .finally(() => process.exit());
