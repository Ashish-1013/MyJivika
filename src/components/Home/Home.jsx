// import React from 'react';
// import akg from '../../assets/Akg.jpg';
// import Harsita from '../../assets/Harsita.jpg';



// export default function Home() {
//     // Animated testimonial carousel state
//     const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
//     const testimonials = [
//         {
//             text: '“My Jivika helped me find my first job and improve my skills. The courses are top-notch!”',
//             img: akg,
//             name: 'A.K.Giri',
//         },
//         {
//             text: '“The career guidance section gave me the confidence to ace my interviews. Highly recommended!”',
//             img: Harsita,
//             name: 'Harsita M.',
//         },
//         {
//             text: '“A seamless experience from learning to landing a job. Thank you, My Jivika!”',
//             img: 'https://tse1.mm.bing.net/th/id/OIP.brmotDoTzzPa59L82D2vigHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
//             name: 'Mr Hero',
//         },
//     ];

//     // Auto-change testimonial every 4 seconds
//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//         }, 4000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="pt-5 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 animate-fade-in font-sans">
//             {/* Hero Section */}
// <section className="relative h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white text-center px-2 sm:px-4 shadow-2xl overflow-hidden animate-hero-slide flex items-center justify-center">
//     {/* Background image overlay */}
//     <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center pointer-events-none scale-110 blur-sm transition-all duration-1000" />
    
//     {/* Content container (now centered) */}
//     <div className="relative z-10 max-w-5xl mx-auto w-full px-4">
//         <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 drop-shadow-xl tracking-tight animate-text-pop font-display bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//             Welcome to <span className="text-yellow-300 animate-jump font-display">My Jivika</span>
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl md:max-w-3xl mx-auto mb-8 md:mb-12 font-medium drop-shadow-lg animate-fade-in font-body text-white/90">
//             Building Skills, Shaping Futures – Your one-stop platform for learning and job opportunities.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-full max-w-xs sm:max-w-none mx-auto">
//             <a
//                 href="#jobs"
//                 className="bg-yellow-400 text-gray-900 font-bold px-6 sm:px-12 py-3 sm:py-5 rounded-full shadow-xl hover:bg-yellow-300 transition-all duration-300 text-lg sm:text-2xl flex items-center justify-center relative overflow-hidden group animate-btn-pop font-body"
//             >
//                 <span className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-lg"></span>
//                 <span className="relative z-10">🔍 Explore Jobs</span>
//             </a>
//             <a
//                 href="#courses"
//                 className="bg-white text-blue-700 font-bold px-6 sm:px-12 py-3 sm:py-5 rounded-full shadow-xl hover:bg-blue-100 transition-all duration-300 text-lg sm:text-2xl flex items-center justify-center relative overflow-hidden group animate-btn-pop font-body"
//             >
//                 <span className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-lg"></span>
//                 <span className="relative z-10">📚 Browse Courses</span>
//             </a>
//         </div>
//     </div>
    
//     {/* Decorative animated shapes */}
//     <div className="hidden sm:block absolute top-10 left-10 w-16 md:w-24 h-16 md:h-24 bg-yellow-300 rounded-full opacity-30 animate-float-slow" />
//     <div className="hidden sm:block absolute bottom-10 right-10 w-20 md:w-32 h-20 md:h-32 bg-blue-200 rounded-full opacity-20 animate-float-slower" />
// </section>
//             {/* Quick Links Cards */}
//             <section className="container mx-auto py-10 md:py-20 px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
//                 {[
//                     {
//                         icon: '💼',
//                         title: 'Find Jobs',
//                         color: 'border-blue-700',
//                         textColor: 'text-blue-700',
//                         desc: 'Search thousands of job listings and apply to the ones that suit your career goals.',
//                         link: '#jobs',
//                         linkText: 'Search Jobs →',
//                     },
//                     {
//                         icon: '🎓',
//                         title: 'Learn & Upskill',
//                         color: 'border-yellow-400',
//                         textColor: 'text-yellow-500',
//                         desc: 'Access a wide range of courses to upgrade your skills and stay ahead in your career.',
//                         link: '#courses',
//                         linkText: 'Browse Courses →',
//                     },
//                     {
//                         icon: '🧑‍💼',
//                         title: 'Career Guidance',
//                         color: 'border-green-500',
//                         textColor: 'text-green-600',
//                         desc: 'Get expert tips, resume assistance, and interview preparation to land your dream job.',
//                         link: '#guidance',
//                         linkText: 'Get Guidance →',
//                     },
//                 ].map((card, i) => (
//                     <div
//                         key={card.title}
//                         className={`p-6 sm:p-8 md:p-10 bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 ${card.color} border-t-8 flex flex-col items-start animate-card-fade`}
//                         style={{ animationDelay: `${i * 0.2}s` }}
//                     >
//                         <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 animate-wiggle">{card.icon}</div>
//                         <h2 className={`text-xl sm:text-2xl font-bold ${card.textColor} mb-2 sm:mb-3 font-display`}>{card.title}</h2>
//                         <p className="text-gray-600 mb-4 sm:mb-6 font-body text-base sm:text-lg">{card.desc}</p>
//                         <a href={card.link} className={`${card.textColor} font-semibold hover:underline mt-auto transition-all duration-200 font-body text-base sm:text-lg`}>
//                             {card.linkText}
//                         </a>
//                     </div>
//                 ))}
//             </section>

//             {/* Features Section */}
//             <section className="container mx-auto py-10 md:py-20 px-2 sm:px-4">
//                 <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 md:mb-14 animate-text-pop font-display">Why Choose My Jivika?</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
//                     {[
//                         {
//                             icon: '🌐',
//                             title: 'All-in-One Platform',
//                             desc: 'Access jobs, courses, and career resources in one place, tailored for your growth.',
//                         },
//                         {
//                             icon: '🤝',
//                             title: 'Trusted by Experts',
//                             desc: 'Learn from industry leaders and get guidance from experienced professionals.',
//                         },
//                         {
//                             icon: '🚀',
//                             title: 'Fast & Easy',
//                             desc: 'Simple navigation, quick applications, and instant access to learning resources.',
//                         },
//                     ].map((feat, i) => (
//                         <div
//                             key={feat.title}
//                             className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-card-fade"
//                             style={{ animationDelay: `${i * 0.2 + 0.3}s` }}
//                         >
//                             <div className="text-4xl sm:text-6xl mb-3 sm:mb-5 animate-wiggle">{feat.icon}</div>
//                             <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-blue-700 font-display">{feat.title}</h3>
//                             <p className="text-gray-600 text-center font-body text-base sm:text-lg">{feat.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Testimonials Section - Carousel */}
//             <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 md:py-20 px-2 sm:px-4">
//                 <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 md:mb-14 animate-text-pop font-display">What Our Users Say</h2>
//                 <div className="max-w-lg md:max-w-2xl mx-auto flex flex-col items-center relative">
//                     <div className="w-full">
//                         <div
//                             key={testimonials[currentTestimonial].name}
//                             className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-700 animate-carousel-fade"
//                         >
//                             <img
//                                 src={testimonials[currentTestimonial].img}
//                                 alt="User"
//                                 className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-blue-300 shadow-lg mb-4 sm:mb-6 animate-photo-pop"
//                             />
//                             <p className="text-gray-700 mb-4 sm:mb-6 italic text-base sm:text-lg font-body text-center transition-all duration-500">{testimonials[currentTestimonial].text}</p>
//                             <span className="font-semibold text-blue-700 font-display text-lg sm:text-xl">{testimonials[currentTestimonial].name}</span>
//                         </div>
//                     </div>
//                     {/* Carousel dots */}
//                     <div className="flex gap-2 mt-4 sm:mt-6">
//                         {testimonials.map((_, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setCurrentTestimonial(idx)}
//                                 className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-blue-400 transition-all duration-300 ${currentTestimonial === idx ? 'bg-blue-400 scale-125' : 'bg-white'}`}
//                                 aria-label={`Go to testimonial ${idx + 1}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ Section */}
//             <section className="container mx-auto py-10 md:py-20 px-2 sm:px-4">
//                 <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 md:mb-14 animate-text-pop font-display">Frequently Asked Questions</h2>
//                 <div className="max-w-xl md:max-w-3xl mx-auto space-y-6 md:space-y-8">
//                     {[
//                         {
//                             q: 'How do I sign up?',
//                             a: 'Click the "Get Started" button and fill out the registration form. It only takes a minute!',
//                         },
//                         {
//                             q: 'Are the courses free?',
//                             a: 'Many courses are free, while some premium content may require a small fee.',
//                         },
//                         {
//                             q: 'Can I apply for jobs directly?',
//                             a: 'Yes, you can apply for jobs directly through our platform with your profile.',
//                         },
//                     ].map((faq, i) => (
//                         <div
//                             key={faq.q}
//                             className="bg-white rounded-lg md:rounded-xl shadow-lg p-6 sm:p-8 animate-card-fade"
//                             style={{ animationDelay: `${i * 0.2 + 0.9}s` }}
//                         >
//                             <h3 className="font-bold text-blue-700 mb-2 sm:mb-3 font-display text-base sm:text-lg">{faq.q}</h3>
//                             <p className="text-gray-700 font-body text-sm sm:text-base">{faq.a}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-10 md:py-20 px-2 sm:px-4 rounded-2xl md:rounded-3xl shadow-2xl mx-2 md:mx-24 my-8 md:my-12 animate-cta-pop">
//                 <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 font-display">Ready to Build Your Future?</h2>
//                 <p className="mb-6 sm:mb-8 text-base sm:text-xl md:text-2xl font-body">Join My Jivika today and take the first step towards success.</p>
//                 <a
//                     href="#signup"
//                     className="bg-yellow-400 text-gray-900 font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl hover:bg-yellow-300 transition-all duration-300 text-base sm:text-xl inline-block relative overflow-hidden group animate-btn-pop font-body"
//                 >
//                     <span className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-lg"></span>
//                     <span className="relative z-10">🚀 Get Started</span>
//                 </a>
//             </section>

//             {/* Animations & Fonts */}
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Slab:wght@400;700&family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap');
//                 .font-display { font-family: 'Montserrat', 'Pacifico', cursive, sans-serif; }
//                 .font-body { font-family: 'Open Sans', 'Roboto Slab', serif, sans-serif; }
//                 .animate-fade-in { animation: fadeIn 1.2s ease; }
//                 .animate-hero-slide { animation: heroSlide 1.2s cubic-bezier(.4,0,.2,1); }
//                 .animate-card-fade { animation: cardFade 1s cubic-bezier(.4,0,.2,1) both; }
//                 .animate-text-pop { animation: textPop 0.9s cubic-bezier(.4,0,.2,1); }
//                 .animate-cta-pop { animation: ctaPop 1.1s cubic-bezier(.4,0,.2,1); }
//                 .animate-wiggle { animation: wiggle 1.5s infinite alternate; }
//                 .animate-float-slow { animation: float 6s ease-in-out infinite alternate; }
//                 .animate-float-slower { animation: float 9s ease-in-out infinite alternate; }
//                 .animate-jump { animation: jump 1.2s cubic-bezier(.4,0,.2,1) infinite alternate; }
//                 .animate-btn-pop { animation: btnPop 0.8s cubic-bezier(.4,0,.2,1); }
//                 .animate-carousel-fade { animation: carouselFade 1s cubic-bezier(.4,0,.2,1); }
//                 .animate-photo-pop { animation: photoPop 1s cubic-bezier(.4,0,.2,1); }
//                 @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//                 @keyframes heroSlide { from { opacity: 0; transform: translateY(-40px);} to { opacity: 1; transform: none; } }
//                 @keyframes cardFade { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
//                 @keyframes textPop { 0% { opacity: 0; transform: scale(0.8);} 80% { opacity: 1; transform: scale(1.05);} 100% { transform: scale(1);} }
//                 @keyframes ctaPop { 0% { opacity: 0; transform: scale(0.7);} 80% { opacity: 1; transform: scale(1.03);} 100% { transform: scale(1);} }
//                 @keyframes btnPop { 0% { opacity: 0; transform: scale(0.7);} 80% { opacity: 1; transform: scale(1.08);} 100% { transform: scale(1);} }
//                 @keyframes wiggle { 0% { transform: rotate(-6deg);} 100% { transform: rotate(6deg);} }
//                 @keyframes float { 0% { transform: translateY(0);} 100% { transform: translateY(-30px);} }
//                 @keyframes jump {
//                     0% { transform: translateY(0);}
//                     10% { transform: translateY(-8px);}
//                     20% { transform: translateY(-16px);}
//                     30% { transform: translateY(-24px);}
//                     40% { transform: translateY(-16px);}
//                     50% { transform: translateY(-8px);}
//                     60% { transform: translateY(0);}
//                     100% { transform: translateY(0);}
//                 }
//                 @keyframes carouselFade { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }
//                 @keyframes photoPop { 0% { opacity: 0; transform: scale(0.7);} 80% { opacity: 1; transform: scale(1.08);} 100% { transform: scale(1);} }
//                 /* Responsive font and padding tweaks */
//                 @media (max-width: 640px) {
//                     .font-display { font-size: 1.1rem; }
//                     .font-body { font-size: 1rem; }
//                 }
//             `}</style>
//         </div>
//     );
// }





//                                                                       IT






// import React from 'react';
// import akg from '../../assets/Akg.jpg';
// import Harsita from '../../assets/Harsita.jpg';

// export default function Home() {
//     // Animated testimonial carousel state
//     const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
//     const testimonials = [
//         {
//             text: 'My Jivika helped me find my first job and improve my skills. The courses are top-notch!',
//             img: akg,
//             name: 'A.K.Giri',
//             role: 'Software Developer'
//         },
//         {
//             text: 'The career guidance section gave me the confidence to ace my interviews. Highly recommended!',
//             img: Harsita,
//             name: 'Harsita M.',
//             role: 'UX Designer'
//         },
//         {
//             text: 'A seamless experience from learning to landing a job. Thank you, My Jivika!',
//             img: 'https://tse1.mm.bing.net/th/id/OIP.brmotDoTzzPa59L82D2vigHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
//             name: 'Mr Hero',
//             role: 'Product Manager'
//         },
//     ];

//     // Auto-change testimonial every 4 seconds
//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//         }, 4000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="min-h-screen bg-white font-sans">
//             {/* Hero Section */}
//             <section className="relative h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-indigo-900/80 z-0" />
//                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />
                
//                 <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
//                         Build Your Career with <span className="text-blue-400">My Jivika</span>
//                     </h1>
//                     <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
//                         Your complete platform for professional growth - learn skills, find jobs, and get career guidance.
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-center gap-4">
//                         <a
//                             href="#jobs"
//                             className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//                             </svg>
//                             Explore Jobs
//                         </a>
//                         <a
//                             href="#courses"
//                             className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//                             </svg>
//                             Browse Courses
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* Quick Stats */}
//             <section className="py-16 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="text-center">
//                             <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
//                             <div className="text-gray-600">Job Opportunities</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
//                             <div className="text-gray-600">Courses Available</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
//                             <div className="text-gray-600">User Satisfaction</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose My Jivika?</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             We provide everything you need to advance your career in one place.
//                         </p>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                             <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3">Curated Job Listings</h3>
//                             <p className="text-gray-600">
//                                 Access thousands of verified job opportunities from top companies across industries.
//                             </p>
//                         </div>
                        
//                         <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                             <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
//                             <p className="text-gray-600">
//                                 Learn in-demand skills through our comprehensive courses taught by industry experts.
//                             </p>
//                         </div>
                        
//                         <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                             <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
//                             <p className="text-gray-600">
//                                 Get personalized advice to help you navigate your career path and make informed decisions.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Get started in just a few simple steps
//                         </p>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div className="text-center">
//                             <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-200">
//                                 <span className="text-blue-600 font-bold text-xl">1</span>
//                             </div>
//                             <h3 className="font-medium mb-2">Create Profile</h3>
//                             <p className="text-gray-600 text-sm">Set up your account in minutes</p>
//                         </div>
                        
//                         <div className="text-center">
//                             <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-200">
//                                 <span className="text-blue-600 font-bold text-xl">2</span>
//                             </div>
//                             <h3 className="font-medium mb-2">Explore Options</h3>
//                             <p className="text-gray-600 text-sm">Browse jobs or courses</p>
//                         </div>
                        
//                         <div className="text-center">
//                             <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-200">
//                                 <span className="text-blue-600 font-bold text-xl">3</span>
//                             </div>
//                             <h3 className="font-medium mb-2">Take Action</h3>
//                             <p className="text-gray-600 text-sm">Apply or enroll</p>
//                         </div>
                        
//                         <div className="text-center">
//                             <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-200">
//                                 <span className="text-blue-600 font-bold text-xl">4</span>
//                             </div>
//                             <h3 className="font-medium mb-2">Grow Your Career</h3>
//                             <p className="text-gray-600 text-sm">Achieve your professional goals</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Hear from professionals who transformed their careers
//                         </p>
//                     </div>
                    
//                     <div className="max-w-4xl mx-auto">
//                         <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
//                             <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//                                 <img 
//                                     src={testimonials[currentTestimonial].img} 
//                                     alt={testimonials[currentTestimonial].name}
//                                     className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
//                                 />
//                                 <div className="text-center md:text-left">
//                                     <blockquote className="text-lg italic text-gray-700 mb-4">
//                                         "{testimonials[currentTestimonial].text}"
//                                     </blockquote>
//                                     <div>
//                                         <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
//                                         <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div className="flex justify-center gap-2 mt-8">
//                                 {testimonials.map((_, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setCurrentTestimonial(idx)}
//                                         className={`w-3 h-3 rounded-full transition-colors ${currentTestimonial === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
//                                         aria-label={`Go to testimonial ${idx + 1}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-20 bg-blue-600 text-white">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//                     <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
//                     <p className="text-xl mb-8 max-w-3xl mx-auto">
//                         Join thousands of professionals who have accelerated their careers with My Jivika
//                     </p>
//                     <a
//                         href="#signup"
//                         className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
//                     >
//                         Get Started Now
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                     </a>
//                 </div>
//             </section>
//         </div>
//     );
// }





//                                                new look














// for left side nav
import React from 'react';
import { 
  FiSearch, FiBookOpen, FiUser, FiAward, FiBriefcase, 
  FiArrowRight, FiCode, FiDatabase, FiLayers, FiDollarSign,
  FiMapPin, FiClock, FiBarChart2, FiCheckCircle 
} from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {
  const stats = [
    { value: "10K+", label: "Job Listings", icon: <FiBriefcase className="w-6 h-6" /> },
    { value: "500+", label: "Free Courses", icon: <FiBookOpen className="w-6 h-6" /> },
    { value: "85%", label: "Success Rate", icon: <FiAward className="w-6 h-6" /> },
    { value: "1M+", label: "Community", icon: <FiUser className="w-6 h-6" /> }
  ];

  const featuredJobs = [
    { title: "Frontend Developer", company: "TechCorp", location: "Remote", salary: "$90K-$120K", icon: <FiCode /> },
    { title: "Data Scientist", company: "DataSystems", location: "San Francisco", salary: "$110K-$150K", icon: <FiDatabase /> },
    { title: "UX Designer", company: "CreativeMinds", location: "New York", salary: "$85K-$110K", icon: <FiLayers /> }
  ];

  const courses = [
    { title: "Web Development Bootcamp", category: "Programming", duration: "8 Weeks", icon: <FiCode /> },
    { title: "Data Science Fundamentals", category: "Analytics", duration: "6 Weeks", icon: <FiDatabase /> },
    { title: "Digital Marketing Mastery", category: "Marketing", duration: "4 Weeks", icon: <FiBarChart2 /> }
  ];

  const benefits = [
    { title: "Personalized Matches", description: "AI-powered job matching tailored to your skills", icon: <FiCheckCircle /> },
    { title: "Salary Insights", description: "Real-time salary data for your position", icon: <FiDollarSign /> },
    { title: "Career Coaching", description: "1-on-1 sessions with industry experts", icon: <FiUser /> }
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="text-gray-100 overflow-x-hidden" ref={ref}>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900 to-cyan-900/80 z-0"
        />
        
        {/* Stars Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech Career</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The ultimate platform to discover opportunities, learn in-demand skills, and connect with top employers.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl font-medium flex items-center gap-3 text-lg shadow-lg hover:shadow-blue-500/30"
              >
                <FiSearch className="text-xl" /> 
                <span>Explore Jobs</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent hover:bg-gray-800/50 border-2 border-gray-700 px-8 py-4 rounded-xl flex items-center gap-3 text-lg"
              >
                <FiBookOpen className="text-xl" /> 
                <span>Browse Courses</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="min-h-[50vh] py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:shadow-lg"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-400 flex justify-center mb-4 text-3xl"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold mb-2 text-center">{stat.value}</div>
                <div className="text-gray-400 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="min-h-[80vh] py-20 bg-gradient-to-br from-gray-900 to-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <FiBriefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech Jobs</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredJobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-8 hover:border-blue-400/30 transition-all hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-6">
                    {job.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-2">{job.title}</h3>
                  <div className="text-blue-400 mb-4">{job.company}</div>
                  <div className="flex items-center gap-3 text-gray-400 mb-4">
                    <FiMapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 mb-6">
                    <FiDollarSign className="w-5 h-5" />
                    <span>{job.salary}</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium"
                  >
                    Apply Now <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="min-h-[80vh] py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Free Courses</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-8 hover:border-blue-400/30 transition-all hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-6">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{course.title}</h3>
                  <div className="flex items-center gap-3 text-gray-400 mb-4">
                    <FiBookOpen className="w-5 h-5" />
                    <span>{course.category}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 mb-6">
                    <FiClock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium"
                  >
                    Start Learning <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="min-h-[80vh] py-20 bg-gradient-to-br from-blue-900/20 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-20">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CareerPulse</span>?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                We provide everything you need to succeed in your tech career journey.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-8 hover:border-blue-400/30 transition-all"
                >
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-cyan-900/30 z-0" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                background: `radial-gradient(circle, rgba(56,182,255,0.3) 0%, rgba(0,0,0,0) 70%)`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of tech professionals who accelerated their careers with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-xl font-medium flex items-center gap-3 text-lg mx-auto shadow-lg hover:shadow-blue-500/30"
              >
                <FiUser className="text-xl" /> 
                <span>Get Started - It's Free</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;