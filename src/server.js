import { createServer, Model } from "miragejs";

createServer({
  models: {
    user: Model,
    activity: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/admin/users", (schema, request) => {
      return schema.users.all();
    });

    this.get("/admin/activities", (schema, request) => {
      return schema.activities.all();
    });

    this.post("/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.users.create(attrs);
    });

    this.post("/admin/activities", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.activities.create(attrs);
    });

    this.delete("/admin/activities/:id", (schema, request) => {
      let id = request.params.id;
      return schema.activities.find(id).destroy();
    });

    this.post("/auth/login", (schema, request) => {
      const { username, password } = JSON.parse(request.requestBody);
      const user = schema.users.findBy({ username, password });

      if (user) {
        // Return user data with role
        return { user };
      } else {
        return new Response(
          400,
          { some: "reader" },
          { error: ["username and password combined not exist!"] }
        );
      }
    });
  },

  seeds(server) {
    server.create("user", { id: 1, username: "Bob", role: "ADMIN", password: "123" });
    server.create("user", {
      id: 2,
      username: "Adam",
      role: "USER",
      password: "123",
      activities: ["boxing", "yoga"],
    });
    server.create("user", {
      id: 3,
      username: "Yves",
      role: "USER",
      password: "123",
      activities: ["spinning", "bicycle", "yoga"],
    });

    server.create("activity", {
      id: 1,
      title: "boxing",
      coach: "Erik Eriksson",
      day: "Monday",
      created: "20230907",
      time: "18:00",
      description: "an amazing activity for you who wants to become strong",
    });
    server.create("activity", {
      id: 2,
      title: "yoga",
      coach: "Emelie Johansson",
      day: "Tuesday",
      created: "20230910",
      time: "15:00",
      description: "an amazing activity for you who wants to relax",
    });
    server.create("activity", {
      id: 3,
      title: "spinning bicycle",
      coach: "Ulf Andersson",
      day: "Wednesday",
      created: "20230907",
      time: "18:00",
      description: "an amazing activity for you who wants to become strong",
    });
  },
});
