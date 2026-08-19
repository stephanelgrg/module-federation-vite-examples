export default defineEventHandler(async () => {
  console.log("host:API called");
  return {
    message: "HOST server",
  };
});
