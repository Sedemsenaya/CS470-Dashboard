"use client"
import React from 'react';

const Counti = () => {
    return (
        <div>
            <div className="grid  gap-1 text-center auto-cols-min">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-2xl">
                              <span style={{"--value": 15}}></span>
                            </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-2xl">
                              <span style={{"--value": 10}}></span>
                            </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-2xl">
                              <span style={{"--value": 24}}></span>
                            </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-2xl">
                              <span style={{"--value": 53}}></span>
                            </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Counti;