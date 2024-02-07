import Nav from "./(components)/Nav";
import './global.css'
import {Inter} from'next/font/google'

import { config} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;

const inter = Inter({subsets:['latin']});

export const metadata= {
    title: 'Create a Next App',
    description :'First Next Project'
};

export default function RootLayout({children}){
    return(
        <html lang='en'>
            <body className={inter.className}>
                <div className="flex flex-col h-screen max-h-screen">
                <Nav />
                </div>
                <div className="flex-grow overflow-y-auto bg-page text-default_text">
                {children}
                </div>
            </body>
        </html>
    )
}