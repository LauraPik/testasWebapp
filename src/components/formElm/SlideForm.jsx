

function SlideForm() {
  return (
    <>
   <div class="bg-white rounded-lg shadow-md px-4 py-6">
  <h2 class="text-xl font-medium text-gray-800 mb-4">Kiek Jums metų?</h2>
  <ul class="list-none space-y-2">
    <li class="flex items-center">
      <input type="radio" id="react" name="age" value="react" class="mr-2 rounded-md focus:ring-1 focus:ring-blue-500"/>
      <label for="react" class="text-base text-gray-700">React.js</label>
    </li>
    <li class="flex items-center">
      <input type="radio" id="vue" name="age" value="vue" class="mr-2 rounded-md focus:ring-1 focus:ring-blue-500"/>
      <label for="vue" class="text-base text-gray-700">Vue.js</label>
    </li>
    <li class="flex items-center">
      <input type="radio" id="svelte" name="age" value="svelte" class="mr-2 rounded-md focus:ring-1 focus:ring-blue-500"/>
      <label for="svelte" class="text-base text-gray-700">Svelte.js</label>
    </li>
    <li class="flex items-center">
      <input type="radio" id="other" name="age" value="other" class="mr-2 rounded-md focus:ring-1 focus:ring-blue-500"/>
      <label for="other" class="text-base text-gray-700">Jūsų tekstas apie mus</label>
    </li>
  </ul>
</div>


</>
  )
}

export default SlideForm