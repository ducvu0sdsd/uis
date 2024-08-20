'use client'
import Logo1 from "@/components/logos/logo1";
import { useEffect, useState } from "react";


export default function Home() {

  const [index, setIndex] = useState(1)

  const colors = [
    {
      blobColor: '#e23e29',
      backgroundColor: '#fe8e78'
    },
    {
      blobColor: '#fdab0d',
      backgroundColor: '#ffe8be'
    },
    {
      blobColor: '#241d4e',
      backgroundColor: '#ced3ff'
    }
  ]

  const handleChangeImage = (index) => {
    setIndex(index)
  }

  return (
    <div style={{ backgroundColor: colors[index - 1].backgroundColor, transition: '0.8s' }} className='flex relative justify-center h-screen overflow-hidden'>
      <svg className="absolute left-[-30%] top-[-75%]" viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
        <path fill={colors[index - 1].blobColor} style={{ transition: '0.8s' }} className="transition-all" d="M27,-38.7C36.6,-30.2,47.1,-24.4,47.9,-16.8C48.6,-9.2,39.6,0.4,36.2,12C32.8,23.7,35,37.5,29.9,43.3C24.8,49.2,12.4,47.1,1.3,45.4C-9.9,43.7,-19.8,42.2,-32.9,39C-46.1,35.8,-62.4,30.7,-67,20.8C-71.5,10.9,-64.2,-3.8,-56.6,-15.8C-49.1,-27.7,-41.4,-37,-31.9,-45.7C-22.4,-54.3,-11.2,-62.3,-1.3,-60.5C8.7,-58.8,17.4,-47.3,27,-38.7Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute" viewBox="-270 -60 400 400" xmlns="http://www.w3.org/2000/svg">
        <path fill={colors[index - 1].blobColor} style={{ transition: '0.8s' }} className="transition-all" d="M66.7,-32.6C80.9,-14,83,17.6,69.9,39.9C56.7,62.3,28.4,75.5,3.3,73.6C-21.8,71.7,-43.7,54.8,-53.7,34.2C-63.7,13.7,-61.8,-10.5,-50.9,-27.2C-39.9,-44,-20,-53.5,3.1,-55.3C26.3,-57.1,52.5,-51.3,66.7,-32.6Z" transform="translate(100 100)" />
      </svg>
      <div className="w-full z-50 py-3">
        <div className="flex justify-between items-center px-[2rem] z-50">
          <div className="flex items-center gap-2">
            <Logo1 />
            <span className="text-[white] text-[30px] font-newAmsterdam">Fresh QiFood</span>
          </div>
          <ul className="flex items-center text-[white] text-[20px] pr-[2rem] gap-8 font-newAmsterdam">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Account</li>
          </ul>
        </div>

        <div className="flex justify-between px-[2rem] items-center z-0 h-[90%]">
          <div className="flex flex-col w-[45%] gap-4 font-workSans text-[white]">
            <span className="text-[80px] font-medium h-[75px]">QIFOOD</span>
            <span className="text-[65px] font-medium h-[75px]">BANANA</span>
            <span>At Fresh QiFood, we believe in the power of nourishing, wholesome meals crafted from the freshest ingredients. Our mission is to provide you with delicious, healthy food that fuels your body and delights your taste buds.</span>
            <div className="flex items-center gap-4">
              {/* <img src="/1.png" className="h-[50px] w-[50px] rounded-full" />
                <img src="/2.png" className="h-[50px] w-[50px] rounded-full" /> */}
              <div onClick={() => handleChangeImage(1)} style={{ backgroundImage: `url(/1.png)` }} className="bg-cover hover:scale-[1.2] transition-all cursor-pointer aspect-square w-[80px] rounded-full" />
              <div onClick={() => handleChangeImage(2)} style={{ backgroundImage: `url(/3.png)` }} className="bg-cover hover:scale-[1.2] transition-all cursor-pointer aspect-square w-[80px] rounded-full" />
              <div onClick={() => handleChangeImage(3)} style={{ backgroundImage: `url(/2.png)` }} className="bg-cover hover:scale-[1.2] transition-all cursor-pointer aspect-square w-[80px] rounded-full" />
            </div>
          </div>
          <div className="w-[50%] relative z-0 bg-[white]">
            <div style={{ transform: `rotate(${index * 120}deg)`, transition: '0.8s' }} className="z-50 absolute right-[-63%] top-[90%] w-full flex justify-center items-center">
              <div
                className="bg-cover w-[75%] aspect-square rounded-full absolute z-50"
                style={{ backgroundImage: `url(/1.png)`, transform: 'rotate(60deg) translate(80%)' }}
              />
              <div
                className="bg-cover w-[75%] aspect-square rounded-full absolute z-50"
                style={{ backgroundImage: `url(/2.png)`, transform: 'rotate(180deg) translate(80%)' }}
              />
              <div
                className="bg-cover w-[75%] aspect-square rounded-full absolute z-50"
                style={{ backgroundImage: `url(/3.png)`, transform: 'rotate(300deg) translate(80%)' }}
              />
            </div>
            <div className="blur-2xl bg-[#ffffff99] w-[80%] aspect-square absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] rounded-full z-0">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}