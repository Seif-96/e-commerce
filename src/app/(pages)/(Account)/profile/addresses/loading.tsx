import React from 'react';
export default function loading() {
  return (
    <>
      <section className="py-6 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex itms-center justify-center gap-4 min-h-[60vh]">
            <div className="mx-auto p-4 border rounded-lg shadow-md bg-white">
              <div className="flex gap-4">
                <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="flex space-x-2 mt-2">
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="animate-pulse space-y-3">
                <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="flex space-x-2 mt-2">
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
