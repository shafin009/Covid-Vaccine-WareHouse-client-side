import React from 'react';

const Blogs = () => {
    return (
        <div>
            <br />
            <div className="card text-center">
                <div className="card-header">
                    Question-1. What is the difference between javascript and nodejs ?
                </div>
                <div className="card-body">
                    <p className="card-text">
                        JavaScript হল একটি lightweight, cross-platform, interpreted scripting programming language যা প্রাথমিকভাবে client-side scripting এর জন্য ব্যবহৃত হয়। এটি Java এবং HTML উভয়ের মধ্যেই তৈরি। অন্যদিকে, Node.js হল Google Chrome এর V8 ইঞ্জিনের উপর ভিত্তি করে একটি server-side scripting language.

                    </p>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    Question-2. When should you use nodejs and when should you use mongodb ?
                </div>
                <div className="card-body">
                    <p className="card-text">
                        Node.js একটি দ্রুত বর্ধনশীল প্রযুক্তি যা আশ্চর্যজনক গতির সাথে Server-side programming এর বিশ্বকে ছাড়িয়ে যাচ্ছে। MongoDB একটি প্রযুক্তি যা ডাটাবেস ব্যবহারে বিপ্লব ঘটাচ্ছে। একসাথে, দুটি টুল একটি শক্তিশালী সংমিশ্রণ। Node.js সার্ভার এবং এটি একটি MongoDB ডাটাবেসের সাথে সংযুক্ত করা অসাধারণভাবে সহজ, অন্তত এই power duo একসাথে প্রতিযোগিতা করে এমন বেশিরভাগ প্রযুক্তির তুলনায়। অবশ্যই, নিরাপত্তা সেট আপ এবং সঠিক error-handling একটু বেশি কাজ নিতে পারে, কিন্তু Node.js এবং MongoDB এর সাথে কাজ করার জন্য সংস্থানগুলি দ্রুত বৃদ্ধি পাচ্ছে। একসাথে একটি দ্রুত কিন্তু অত্যন্ত নমনীয় সমাধান অফার করে যা Server-side programming বিশ্বকে ঝড়ের মধ্যে নিয়ে যাচ্ছে।

                    </p>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    Question-3. What is the differences between sql and nosql databases ?
                </div>
                <div className="card-body">
                    <p className="card-text">
                        SQL Database গুলি vertically ভাবে scalable. NoSQL Database গুলি horizontally ভাবে scalable। SQL Database গুলি table-based অন্যদিকে, NoSQL Database গুলি document, key-value, graph, or wide-column stores। SQL Database গুলি multi-row transactions এর  জন্য ভাল অন্যদিকে, document বা JSON এর মতো unstructured data এর জন্য NoSQL ভাল।
                    </p>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    Question-4. What is the purpose of JWT and how does it work ?

                </div>
                <div className="card-body">
                    <p className="card-text">
                        JWT, বা JSON Web Token, একটি open standard যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করতে ব্যবহৃত হয় - একটি client এবং একটি server। প্রতিটি JWT-এ encoded করা JSON object রয়েছে, যার মধ্যে claims সেট রয়েছে। JWT একটি cryptographic algorithm ব্যবহার করে sign করা হয় যাতে token issue করার পরে claims গুলি পরিবর্তন করা যায় না।

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;