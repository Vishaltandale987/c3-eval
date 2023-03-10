import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
// import index from "../pages/project/index.jsx";
import Project from "../components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home({apidata}) {
  console.log(apidata)
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
<div>

</div>
      <div
        style={{
          width: "30%",
          // border: "1px solid red",
          textAlign:"center",
        }}
      >
        <img
          src={apidata.avatar_url}
          width={300}
          height={300}
          style={{
            borderRadius: "150px",
            paddingTop: "20px",
            marginLeft: "90px",
          }}
        />

        <h1>{apidata.name}</h1>
        <h1>{apidata.login}</h1>

        <div style={{
          display:"flex",
          gap:"10px",
          marginLeft:"130px"
        }}>
          <Button colorScheme='green'>Resume</Button>
          <Button colorScheme='blue'>Follow</Button>
        </div>
        <h1>{apidata.bio}</h1>





        <div
        style={{
          // "display":"flex",
          // "flexDirection":"row",
          "paddingTop":"20px",
          // backgroundColor:"#385898"
        }}
        >
          <h1>Experience</h1>
        <h1>{apidata.company}</h1>
        </div>
      </div>
        

      <div
        style={{
          width: "70%",
          // border: "1px solid black",
          "textAlign":"center"
        }}
      >
        <h1>Project</h1>
      <Project/>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  let res = await fetch(`https://api.github.com/users/Vishaltandale987`)

  let data = await res.json()
  return{
    props:{
      apidata:data
    }
  }
}


