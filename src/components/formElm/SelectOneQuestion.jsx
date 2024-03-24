
function SelectOneQuestion() {
  return (
<div className="mx-auto max-w-md md:max-w-ful flex flex-col gap-4">
    <div className="flex flex-row gap-2 items-center ">
        <h1 className="text-center">Ar ketinate dalyvauti KITM renginiuose?</h1>
        <select className="rounded shadow border focus:outline-none focus:ring-1 focus:ring-[#a5b4fc]-300 py-2 px-4">
            <option class="mt-1 w-full px-3 py-2 text-sm 
            ">Taip</option>
            <option class="mt-1 w-full px-3 py-2 text-sm 
            ">Ne</option>
            <option class="mt-1 w-full px-3 py-2 text-sm 
            ">Abejoju</option>
        </select>
    </div>
 
    <div className="flex flex-row gap-2 items-center">
    <h1 className="text-">Ar esate dalyvavęs KITM renginiuose?</h1>
        <select className="rounded shadow border focus:outline-none focus:ring-1 focus:ring-[#a5b4fc]-300 py-2 px-4">
            <option>Taip</option>
            <option>Ne</option>
            <option>Abejoju</option>
        </select>
        
    </div>
</div>
  )
}

export default SelectOneQuestion