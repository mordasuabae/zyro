import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Choose from './Choose'

export default function Home() {
  return (
    <div>
     <Navbar />
     <Banner />
     <Choose />
    </div>
  )
}
