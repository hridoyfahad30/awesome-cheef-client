/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaFileDownload } from "react-icons/fa";
import './Blogs.css';

const Blogs = () => {

    const pdfRef = useRef();

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('Blogs.pdf');
        });
    };

    return (
        <>
        <div className='container mx-auto'>

            <div onClick={downloadPDF} className=' flex justify-end my-10'>
                <button className='flex items-center gap-2 text-xl bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-orange-700'>Download PDF <FaFileDownload className='text-2xl' /></button>
            </div>

            <div className='flex justify-center bg-slate-400 py-14 px-4 rounded-2xl' ref={pdfRef}>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-white hover:bg-orange-500 duration-300 rounded-box px-6 my-1">
                        <div className="collapse-title text-lg md:text-2xl text-slate-800 font-semibold">
                        Differences between uncontrolled and controlled components.
                        </div>
                        <div className="collapse-content bg-orange-300 rounded-xl mb-4">
                        <div className="overflow-x-auto">
                            <table className="table w-full mt-4 text-base">
                                {/* head*/}
                                <thead>
                                    <tr>
                                        
                                        <th>Features</th>
                                        <th>Controlled Component</th>
                                        <th>Uncontrolled Component</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    
                                    <td>Value Management</td>
                                    <td>Managed by React state</td>
                                    <td>Managed by component&aspo;s own internal state</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    
                                    <td>User Interaction</td>
                                    <td>Parent component updates state on user interaction</td>
                                    <td>Component updates own internal state on user interaction</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    
                                    <td>Data Flow</td>
                                    <td>Data flows from parent component to component</td>
                                    <td>Data flows within the component</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    
                                    <td>Debugging</td>
                                    <td>Easier to debug</td>
                                    <td>More difficult to debug</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    
                                    <td>Performance</td>
                                    <td>Generally faster as there&apos;s less state management</td>
                                    <td>Generally slower as there&apos;s more state management</td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    
                                    <td>Code Complexity</td>
                                    <td>Less complex code</td>
                                    <td>More complex code</td>
                                </tr>
                                {/* row 7 */}
                                <tr>
                                    
                                    <td>Best Practices</td>
                                    <td>Considered a best practice</td>
                                    <td>Considered an alternate approach</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-white hover:bg-orange-500 duration-300 rounded-box px-6 my-1">
                        <div className="collapse-title text-lg md:text-2xl text-slate-800 font-semibold">
                        How to validate React props using PropTypes ?
                        </div>
                        <div className="collapse-content bg-orange-300 rounded-xl  mb-4">
                            <p className='px-6 py-2 text-xl'>At first install prop-type package, by this code (<code>npm install prop-types --save)</code> then :- </p>
                            <p className='px-6 py-2 text-xl'>
                                <code>
                                import React from 'react'; <br />
                                import PropTypes  from "prop-types";
                                </code>
                                
                            </p>
                            <p className='px-6 py-2 text-xl'>
                                <code>
                                    name: PropTypes.string,<br />
                                    age: PropTypes.number,<br />
                                    address: PropTypes.object,<br />
                                    friends: PropTypes.array,<br />
                                </code>
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-white hover:bg-orange-500 duration-300 rounded-box px-6 my-1">
                        <div className="collapse-title text-lg md:text-2xl text-slate-800 font-semibold">
                        Difference between nodejs and express js.
                        </div>
                        <div className="collapse-content bg-orange-300 rounded-xl  mb-4">
                        <table className="table w-full mt-4 text-base">
                                {/* head*/}
                                <thead>
                                    <tr>
                                        
                                        <th>Features</th>
                                        <th>Express.js	</th>
                                        <th>Node.js</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    
                                    <td>Usage</td>
                                    <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                                    <td>It is used to build server-side, input-output, event-driven apps.</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    
                                    <td>Level of features</td>
                                    <td>More features than Node.js.</td>
                                    <td>Fewer features.</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    
                                    <td>Building Block</td>
                                    <td>It is built on Node.js.</td>
                                    <td>It is built on Google’s V8 engine.</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    
                                    <td>Written in</td>
                                    <td>JavaScript</td>
                                    <td>C, C++, JavaScript</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    
                                    <td>Framework/Platform</td>
                                    <td>Framework based on Node.js</td>
                                    <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    
                                    <td>Controllers</td>
                                    <td>Controllers are provided.</td>
                                    <td>Controllers are not provided.</td>
                                </tr>
                                {/* row 7 */}
                                <tr>
                                    
                                    <td>Routing</td>
                                    <td>Routing is provided.</td>
                                    <td>Routing is not provided.</td>
                                </tr>
                                {/* row 8 */}
                                <tr>
                                    
                                    <td>Middleware</td>
                                    <td>Uses middleware for the arrangement of functions systematically server-side.</td>
                                    <td>Doesn’t use such a provision.</td>
                                </tr>
                                {/* row 9 */}
                                <tr>
                                    
                                    <td>Coding time</td>
                                    <td>It requires less coding time.</td>
                                    <td>It requires more coding time.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-white hover:bg-orange-500 duration-300 rounded-box px-6 my-1">
                        <div className="collapse-title text-lg md:text-2xl text-slate-800 font-semibold">
                        What is a custom hook, and why will you create a custom hook?
                        </div>
                        <div className="collapse-content bg-orange-300 rounded-xl  mb-4">
                            <p className='px-6 py-2 text-xl break-words'>Custom React hooks are an essential tool that let you add special, unique functionality to your React applications. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". <br /><br />
                            Custom React JS hooks offer three major benefits over standard library hooks: Reusability, readability, and testability.
                            
                            <ul className='list-decimal ml-10 my-2'>
                                <li className='my-4'>Reusability <br />
                                <p>
                                When a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                                </p>

                                </li>
                                <li className='my-4'>Readability <br />
                                <p>
                                Complex codes can become hard to read if layers of providers surround the components, consumers, High-Order Components, render props, and other abstractions, generally known as wrapper hell. Instead of using High-Order Components one can use custom hooks to improve the readability of the code.
                                </p>

                                </li>
                                <li className='my-4'>Reusability <br />
                                <p>
                                When a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                                </p>

                                </li>
                                
                            </ul>

                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>

        <div className="map">
            
        </div>

        </>
    );
};

export default Blogs;