import Link from 'next/link'
export default function Header() {
    return (
        <header>
               <h3>Markus <span>Wiland</span></h3>
               <nav> 
                   <ul>
                       <Link href="/"><li><a>Start</a></li></Link>
                       <Link href="/blog"><li><a>Blogg</a></li></Link>
                       <Link href="/portfolio"><li><a>Portfolio</a></li></Link>
                       <Link href="/about"><li><a>Om Mig</a></li></Link>
                       <Link href="/contact"><li><a>Kontakta Mig</a></li></Link>
                   </ul>
               </nav>
           </header>
    )
}
