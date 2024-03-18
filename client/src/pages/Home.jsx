import FAQpage from "../components/FAQs";
import "./Home.css"
export default function Home() {
  return (
    <div>
      
      <div className="w-full flex">
        <div className="w-1/2 p-4  px-10">
          <div className="font-bold text-xl pt-6">About</div>
          <div className="text-stone-500">
            <div className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius, accusamus consequatur quod, qui eveniet delectus illo explicabo ea ipsum similique in optio at cumque veritatis dignissimos nam, iusto soluta deleniti a. Ex quibusdam rem ipsum molestiae, commodi ullam pariatur aliquid vel praesentium quo adipisci sit quis esse culpa facilis.</div>
          
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora unde fuga enim velit mollitia molestiae eum deserunt assumenda eaque? Placeat officiis facere iusto repudiandae optio fugit repellendus atque eius aliquid odit rem quod libero quo sequi ipsum, perspiciatis delectus reprehenderit.
          </div>

          <div className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora unde fuga enim velit mollitia molestiae eum deserunt assumenda eaque? Placeat officiis facere iusto repudiandae optio fugit repellendus atque eius aliquid odit rem quod libero quo sequi ipsum, perspiciatis delectus reprehenderit.
          </div>
          </div>
          </div>
        <div className="w-1/2 p-4 px-10">
            <div className="font-bold text-xl pt-6">Statistics</div>
            <div className="flex py-3 justify-between">
              <div className="border-2 p-4 w-[45%] rounded-xl">
                <div>Number</div>
                <div>New Grievances</div>
              </div>
              <div className="border-2 p-4 w-[45%]  rounded-xl">
                <div>Number</div>
                <div>Grievances resolved</div>
              </div>
            </div>
            <div className="">
              <FAQpage/>
            </div>
          </div>
      </div>
    </div>
  )
}
