import initApp from "./server";

const port = process.env.PORT;
initApp().then((app) => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});