import { HowitWorks } from "@/constants"
import { HowItWorks } from "@/components/shared/how-it-works"

const WorkingSection = () => {
  return (
    <section className='w-full bg-zinc-200/40 h-screen mt-20 px-6 md:px-24 py-24'>
        <div className="pb-4">
            <h1 className='text-5xl font-bold text-sky-950 mb-1 text-center md:text-start'>How it Works</h1>
            <p className='text-sm md:text-lg text-center md:text-start font-medium text-gray-400'>What can you expect when you order from us</p>
            </div>

            <div>
            {
                HowitWorks.map((item)=> (
                    <HowItWorks key={item.title} title={item.title} description={item.description} icon={item.icon} />
                ))
            }
        </div>

        <div>
            
        </div>
    </section>
  )
}

export default WorkingSection