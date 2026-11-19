export default defineEventHandler(async () => {
  console.log("host:API called");
  return {
    message: "Hello World - from REMOTE",
  };
});
