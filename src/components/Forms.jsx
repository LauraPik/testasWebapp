import "survey-core/defaultV2.min.css";
import Form from "./formElm/Form";
import Input from "./formElm/Input";
import CheckBox from "./formElm/CheckBox";
import HorizontalCheckBox from "./formElm/HorizontalCheckBox";
import SlideForm from "./formElm/SlideForm";
import SelectOneQuestion from "./formElm/SelectOneQuestion";

function Forms() {
  return (
    <div className="flex space-y-8 flex-col  ">
      <div className="flex flex-col space-y-7  items-center sm:text-left mt-8 mb-8 py-12 md:shrink-0">
        <Form />
        <CheckBox />
        <Input />
        <HorizontalCheckBox />
        <SlideForm/>
        <SelectOneQuestion/>
        <button
      type="button"
      class="inline-block rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
      Sekantis
    </button>
      </div>
    </div>
  );
}

export default Forms;
