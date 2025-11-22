"use client";

import { Monitor, Smartphone } from "lucide-react";

export default function DesktopOnlyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#D87D4A' }}>
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
        
        {/* Icon Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-600 blur-3xl opacity-50 rounded-full"></div>
            <div className="relative bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-full">
              <Monitor className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Desktop Access Required
        </h1>

        {/* Subheading */}
        <p className="text-lg text-orange-100 text-center mb-8">
          This website is optimized for desktop viewing
        </p>

        {/* Description */}
        <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10">
          <div className="flex items-start gap-4 mb-4">
            <Smartphone className="w-6 h-6 text-orange-200 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-2">Mobile Device Detected</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                We've detected that you're using a mobile device. For the best experience 
                and full functionality, please access this website from a desktop or laptop.
              </p>
            </div>
          </div>
          
          {/* <div className="flex items-start gap-4">
            <Monitor className="w-6 h-6 text-orange-200 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-2">Why Desktop?</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Our platform features advanced tools, complex interfaces, and detailed visualizations 
                that require a larger screen and more powerful system capabilities.
              </p>
            </div>
          </div> */}
        </div>

        {/* Features List */}
        {/* <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-orange-100">
            <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
            <span className="text-sm">Enhanced screen resolution support</span>
          </div>
          <div className="flex items-center gap-3 text-orange-100">
            <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
            <span className="text-sm">Advanced keyboard shortcuts</span>
          </div>
          <div className="flex items-center gap-3 text-orange-100">
            <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
            <span className="text-sm">Multi-window workflows</span>
          </div>
        </div> */}

        {/* Footer */}
        <div className="text-center">
          <p className="text-orange-200 text-sm">
            Bookmark this page and return on your desktop computer
          </p>
        </div>
      </div>
    </div>
  );
}
