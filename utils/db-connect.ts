export const a=5;
// import mongoose from "mongoose";

// global.mongoose = {
//   conn: null,
//   promise: null,
// };

// export async function dbConnect() {
//   if (global.mongoose && global.mongoose.conn) {
//     console.log("using existing connection");
//     return global.mongoose.conn;
//   } else {
//     // console.log("creating new connection");
//     const user = process.env.USER;
//     const password = process.env.PASSWORD;
//     const dataBase = process.env.MONGODB_DB;
//     const conString = `mongodb+srv://${user}:${password}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;

//     const promise = mongoose
//       .connect(conString, {
//         useNewUrlParser: true,

//         useUnifinedTopology: true,
//         autoIndex: true,
//       })
//       .then((mongoose) => mongoose);

//     global.mongoose = {
//       conn: await promise,
//       promise,
//     };
//     return await promise;
//   }
// }
