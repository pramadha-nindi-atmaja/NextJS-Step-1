import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

// Define TypeScript interfaces for our data structure
interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function Blog({ dataBlog }: BlogProps) {
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    
    const dataBlog = await res.json();
    
    return {
      props: {
        dataBlog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    
    return {
      props: {
        dataBlog: [],
      },
    };
  }
}