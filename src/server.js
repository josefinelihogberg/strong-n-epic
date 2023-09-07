import { createServer } from "miragejs";

let users = [
  { id: 1, username: "Adam", role: "USER", password: "123" },
  { id: 2, username: "Bob", role: "ADMIN", password: "123" },
];

createServer({
  routes() {
    this.namespace = "api";

    // Responding to a POST request
    this.post("/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);

      users.push(attrs);

      return { user: attrs };
    });

    this.get("/users", () => {
      return users;
    });
  },
});
