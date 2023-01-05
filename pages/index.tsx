import { GetServerSideProps } from 'next/types'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/main'
const inter = Inter({ subsets: ['latin'] })
 import {Filterproducts} from '../interfaces/IFilterProducts'
 type IFilterproducts={
  data:Filterproducts
 }
export default function Home({data}:IFilterproducts) {
  return (
    
      <main className={styles.main}>
        <div className={styles.description}>
      {data.products.map((item)=>{
          return( <p key={item.productId}>{item.productName}</p>)
      })}
       </div>
      </main>
    
  )
}
Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout >{page}</Layout>;
};
export const getServerSideProps: GetServerSideProps = async (context) =>  {
 
  const res = await fetch(`http://localhost:5000/filetrProducts/1`);
  const data:Filterproducts = await res.json();
  
  return { props: { data} }
}
