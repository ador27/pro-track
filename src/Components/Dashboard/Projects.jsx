import React, { useState } from "react";
import { GrAdd } from 'react-icons/gr'
import AddProjectModal from "./AddProjectModal";
const Projects = () => {
  return (
    <section className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold font-mono">Project list</h1>
        <AddProjectModal />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 justify-items-center overscroll-y-none">
        <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
          <div class="card-body">
            <h2 class="card-title">Project title</h2>
            <p><small className="font-semibold">Owner: Mark don</small></p>
            <div className="flex justify-between font-semibold">
              <p><small>Start date: 9/8/2022</small></p>
              <p><small>End date:12/8/2022</small></p>
            </div>
            <p>Tasks: 7</p>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
          <div class="card-body">
            <h2 class="card-title">Project title</h2>
            <p><small className="font-semibold">Owner: Mark don</small></p>
            <div className="flex justify-between font-semibold">
              <p><small>Start date: 9/8/2022</small></p>
              <p><small>End date:12/8/2022</small></p>
            </div>
            <p>Tasks: 7</p>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
          <div class="card-body">
            <h2 class="card-title">Project title</h2>
            <p><small className="font-semibold">Owner: Mark don</small></p>
            <div className="flex justify-between font-semibold">
              <p><small>Start date: 9/8/2022</small></p>
              <p><small>End date:12/8/2022</small></p>
            </div>
            <p>Tasks: 7</p>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
          <div class="card-body">
            <h2 class="card-title">Project title</h2>
            <p><small className="font-semibold">Owner: Mark don</small></p>
            <div className="flex justify-between font-semibold">
              <p><small>Start date: 9/8/2022</small></p>
              <p><small>End date:12/8/2022</small></p>
            </div>
            <p>Tasks: 7</p>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
          <div class="card-body">
            <h2 class="card-title">Project title</h2>
            <p><small className="font-semibold">Owner: Mark don</small></p>
            <div className="flex justify-between font-semibold">
              <p><small>Start date: 9/8/2022</small></p>
              <p><small>End date:12/8/2022</small></p>
            </div>
            <p>Tasks: 7</p>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-seaBlue border-l-8 border-blue text-primary-content cursor-pointer shadow-xl transform transition duration-500 hover:scale-110 ">
          <div class="card-body">
            <h2 class="card-title">Project title</h2>
            <p><small className="font-semibold">Owner: Mark don</small></p>
            <div className="flex justify-between font-semibold">
              <p><small>Start date: 9/8/2022</small></p>
              <p><small>End date:12/8/2022</small></p>
            </div>
            <p>Tasks: 7</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;
