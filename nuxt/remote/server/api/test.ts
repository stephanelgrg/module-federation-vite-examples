export default defineEventHandler(async () => {
  console.log("remote:API called");
  return {
    message: "Hello World - from remote server",
  };
});
