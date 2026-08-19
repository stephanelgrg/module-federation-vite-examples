export default defineEventHandler(async () => {
  console.log("remote:API called");
  return {
    message: "REMOTE server",
  };
});
