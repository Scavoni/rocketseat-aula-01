import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/16035591?v=4",
      name: "Vinicius Scavoni",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/scavonizup.png",
      name: "Jose Scavoni",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map((post) => {
            return (
              <Post
               key={post.id}
               author={post.author}
               content={post.content}
               publishedAt={post.publishedAt}
               />
            )
          })}
        </main>
      </div>
    </div>
  );
}
