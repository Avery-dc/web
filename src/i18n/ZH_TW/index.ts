const modules = import.meta.globEager("./**/*.json");
console.log(modules);
let d = {
  "./Home.json": {
    default: {
      "0": "",
      "": "",
    },
  },
  "./a/a.json": {
    default: {},
  },
};

const t = (_: any) => {};

// // await modules["./Home.json"].default
// console.log(
//   Object.fromEntries(
//     await Promise.all(
//       Object.entries(modules).map(async ([key, value]) => [
//         key
//           .split(".")
//           .reverse()
//           .slice(1)
//           .reverse()
//           .join(".")
//           .replace(/^\.\//, ""),
//         (await value).default,
//       ])
//     )
//   )
// );
// let _data = {};

// const t = async (data: typeof modules) => {
//   Object.fromEntries(
//     await Promise.all(
//       Object.entries(data).map(async ([key, value]) => [
//         key
//           .split(".")
//           .reverse()
//           .slice(1)
//           .reverse()
//           .join(".")
//           .replace(/^\.\//, ""),
//         (await value).default,
//       ])
//     )
//   );
// };
// console.log(await t(modules));

export default {};
