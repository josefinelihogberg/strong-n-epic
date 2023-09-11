import { createServer } from "miragejs";

let users = [
  { id: 1, username: "Bob", role: "ADMIN", password: "123" },
  { id: 2, username: "Adam", role: "USER", password: "123", activities: ["boxing", "yoga"] },
  {
    id: 3,
    username: "Yves",
    role: "USER",
    password: "123",
    activities: ["spinning", "bicycle", "yoga"],
  },
];

let activities = [
  {
    id: 1,
    title: "boxing",
    coach: "Erik Eriksson",
    day: "Monday",
    created: "20230907",
    time: "18:00",
    description: "an amazing activity for you who wants to become strong",
  },

  {
    id: 2,
    title: "yoga",
    coach: "Emelie Johansson",
    day: "Tuesday",
    created: "20230910",
    time: "15:00",
    description: "an amazing activity for you who wants to relax",
  },
  {
    id: 3,
    title: "spinning bicycle",
    coach: "Ulf Andersson",
    day: "Wednesday",
    created: "20230907",
    time: "18:00",
    description: "an amazing activity for you who wants to become strong",
  },
];

createServer({
  routes() {
    this.namespace = "api";

    this.post("/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);

      users.push(attrs);

      return { user: attrs };
    });

    this.post("/admin/activity", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);

      activities.push(attrs);

      return { activity: attrs };
    });

    this.get("/admin/users", () => {
      return users;
    });

    this.get("admin/activities", () => {
      return activities;
    });

    this.delete("/admin/activities/:id", (schema, request) => {
      let id = request.params.id;
      let activity = schema.activities.find(id);

      if (!activity) {
        return new Response(404, {}, { message: "Activity not found" });
      }

      activity.destroy();

      return { activity: id };
    });
  },
});
