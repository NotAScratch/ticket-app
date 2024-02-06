import Nav from "./(components)/Nav";

import './global.css'
import {Inter} from'next/font/google'

const inter = Inter({subsets:['latin']})

export const metadata= {
    title: 'Create a Next App',
    description :'First Next Project'
}

export default function RootLayout({children}){
    return(
        <html lang='en'>
            <body className={inter.className}>
                <Nav />
                {children}
            </body>
        </html>
    )
}