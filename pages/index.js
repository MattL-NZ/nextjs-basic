import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Introduction about Matt]</p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href='https://nextjs.org/learn'>our Next.JS tutorial</a>
        </p>
      </section>
      <section className='pt-8'>
        <h2 className='text-2xl font-semibold'>Blog</h2>
        <ul className='list-none p-0 m-0'>
          {allPostsData.map(({id, date, title}) => (
              <li key={id} className='mb-2'>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br/>
                <p className='text-sm text-gray-500'>{date}</p>
              </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
