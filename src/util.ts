import _ from "lodash";

let posts = [
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  { id: "34abc", title: "The blog post we want", content: "..." },
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  { id: "34abc", title: "The blog post we want", content: "..." },
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  { id: "34abc", title: "The blog post we want", content: "..." },
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  { id: "34abc", title: "The blog post we want", content: "..." },
];

posts = _.keyBy(posts, "id");

 const post = posts["34abc"];
 export default post;
