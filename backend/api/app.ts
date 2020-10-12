import { server } from "./server";

server.listen(3000, "0.0.0.0").then((url) => {
    console.log(`🚀 Server ready at ${url}`);
});
