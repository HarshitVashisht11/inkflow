import Image from 'next/image'
import Navigation from "./_components/navbar";
export default async function Home() {
  return (
    <>
    <Navigation />
    <section className="h-full w-full pt-36 relatie flex items-center justify-center flex-col">
      <p className="text-center">Unleash Your Creativity</p>
      <div className='bg-gradient-to-r from primary to-secondary-foreground text-transparent bg-clip-text-relative'>
        <h1 className="text-8xl font-bold text-center md:text-[300px] text-emerald-300">Ink Flow</h1>
      </div>
      <div className='flex justify-center items-center relative md:mt-[-70px]'>
        <Image 
        src={"/main.png"}
        alt="banner image" 
        height={1200}
        width={1200}
        className="rounded-tl-2xl mt-2 rounded-tr-2xl border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>
    </section>
    <section className="flex justify-center flex-col items-center gap-4 mt-20">
      <h2 className="text-4xl text-center">Design at ease</h2>
      <p className="text-muted-foreground text-center">
        Create and manage your designs with ease. Our powerful tools will make your work easier. If
        {" you're"} a <br /> 
        begginer you are right place.
      </p>
      <div className="flex items-center gap-4 flex-wrap mt-6">
        
      </div>
    </section>
    </>
  );
}
