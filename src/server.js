import { time } from "console";
import { createServer } from "mirage";

export default function MirageServer() {
  createServer({
    routes() {
      this.get("api/customers", () => ({
        customers: [
          {
            id: 1,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 2,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 3,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 4,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 5,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 6,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 7,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 8,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 9,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
          {
            id: 10,
            name: "Jane Doe",
            userID: Math.Floor(Math.Random) * 9000,
            ContactInfo: "janedoe@mail.com",
            passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }],
          },
        ],
      }));
      this.get("api/passes", () => ({
        passes: [
          {
            pass: "Calming Yoga",
            date: Date,
            time: time,
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
          },
          {
            pass: "Group Training",
            date: Date,
            time: time,
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
          },
          {
            pass: "Cardio",
            date: Date,
            time: time,
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
          },
          {
            pass: "Advanced Yoga",
            date: Date,
            time: time,
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
          },
          {
            pass: "Boxing",
            date: Date,
            time: time,
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
          },
        ],
      }));
    },
  });
}
