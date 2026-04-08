import { Navbar } from '@/components/layout/Navbar'



function CommonLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
     <Navbar></Navbar>
        {children}
    </div>
  )
}

export default CommonLayout