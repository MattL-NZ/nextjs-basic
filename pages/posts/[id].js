import Layout from "../../components/layout";
import {getAllPostsIds, getPostData} from "../../lib/posts";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export default function Post({postData}) {

  return(
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
      <article>
        <h1 className='text-xl'>{postData.title}</h1>
        <div className='text-gray-500'>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
