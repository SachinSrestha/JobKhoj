import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'

function Job() {
  return (
    <div className="max-w-96 outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg cursor-pointer bg-white">
        <div className='flex justify-between'>

            <p className='text-sm text-slate-500 mt-2'>Today</p>
            <Button variant="outline" className="rounded-full active:bg-gray-200" size="icon"> <Bookmark /></Button>
        </div>
            <div className='flex '>
                <Button className="p-6 " variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
                    </Avatar>
                </Button>
                <div className='ml-2'>
            <h4 className="text-lg font-medium">Google</h4>
            <p className="text-slate-500 text-sm ">India</p>
                </div>
            </div>
            <p className="text-lg font-bold mt-2">FullStack Developer</p>
            <p className="flex justify-center mt-2 text-gray-600 mb-4 text-sm">
              I need a senior full stack developer, who is able to write
              efficient code for both backend and frontend
            </p>
            <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-blue-800">
              2 Positions
            </span>
            <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-orange-600">
              Full Time
            </span>
            <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-[13px] font-bold text-purple-800">
              45 LPA
            </span>
            <div className='mt-4 space-x-4'>

            <Button variant="outline">Details</Button>
            <Button variant="primary" className="bg-purple-800 text-white hover:bg-purple-700 active:bg-purple-900">Save For Later</Button>
            </div>
          </div>
  )
}

export default Job