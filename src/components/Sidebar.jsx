import { TrashIcon } from "@heroicons/react/outline";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white p-4 shadow-md w-1/5 max-w-52">
      <div className="mb-4 flex flex-col items-center">
        <ul>
          <h3 className="font-bold">Category</h3>
          <li className="py-0.5 text-[#2D16BB]">Dress</li>
          <li className="py-0.5">T-shirt</li>
          <li className="py-0.5">Sweatshirt</li>
          <li className="py-0.5">Swimsuit</li>
          <li className="py-0.5">Pants and Skirts</li>
          <li className="py-0.5">Blouses</li>
        </ul>
      </div>
      <div className="mb-4 flex flex-col items-center">
        <div>
          <h3 className="font-bold">Filter by:</h3>
          <h3 className="font-bold">Type</h3>
          <ul className=" mb-4 flex flex-col">
            <label className="py-0.5" for="Bodycon">
              <input type="checkbox" name="Bodycon" id="" /> Bodycon
            </label>
            <label className="py-0.5" for="Shirt">
              <input type="checkbox" name="Shirt" id="" /> Shirt
            </label>
            <label className="py-0.5" for="Mini">
              <input type="checkbox" name="Mini" id="" /> Mini
            </label>
            <label className="py-0.5" for="Midi">
              <input type="checkbox" name="Midi" id="" /> Miditrttttttttt
            </label>
            <label className="py-0.5" for="Long">
              <input type="checkbox" name="Long" id="" /> Long
            </label>
            <label className="py-0.5" for="A-shape">
              <input type="checkbox" name="A-shape" id="" /> A-shape
            </label>
          </ul>
        </div>
        <div className="mb-4 ">
          <h4 className="font-bold">Color</h4>
          <ul className="flex flex-col">
            <label className="py-0.5" for="White">
              <input type="checkbox" name="White" id="" /> White
            </label>
            <label className="py-0.5" for="Blue">
              <input type="checkbox" name="Blue" id="" /> Blue
            </label>
            <label className="py-0.5" for="Black">
              <input type="checkbox" name="Black" id="" /> Black
            </label>
            <label className="py-0.5" for="Multicolor">
              <input type="checkbox" name="Multicolor" id="" /> Multicolor
            </label>
            <label className="py-0.5" for="Purple">
              <input type="checkbox" name="Purple" id="" /> Purple
            </label>
          </ul>
        </div>
      </div>
      <div className="flex ">
        <button className="mt-4 mx-4 py-2 px-4 rounded-md font-bold bg-[#2D16BB] text-white rounded">
          Apply
        </button>

        <button className="mt-4 p-2 bg-[#D9D9D9]  text-black rounded">
          <TrashIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
